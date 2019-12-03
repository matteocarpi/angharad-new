import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from '../styles/Header.module.scss';
import navigation from '../data/navigation.json';
import classnames from 'classnames';
import { FaBars } from 'react-icons/fa';

const Header = ({ siteTitle }) => {

  // eslint-disable-next-line no-undef
  const location = window.location.pathname;
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displaySecondLevel, setDisplaySecondLevel] = useState(false);
  return(
    <header
      className={classnames(styles.header, location === '/' && styles.home)}
    >
      <div className={styles.headerTop}>

        <h2 className={classnames(styles.logo, location === '/' && styles.hide)}>
          <Link
            to="/"
          >
            {siteTitle}
          </Link>
        </h2>
        <FaBars className={styles.menuIcon} onClick={() => setDisplayMenu(!displayMenu)}/>
      </div>

      <nav className={classnames(styles.navigation, styles.mobile)}>
        <ul className={displayMenu ? styles.displayNavigation : styles.hideNavigation}>
          {navigation.map((item) => {
            return (
              <li key={item.name}>
                {!item.secondLevel ? 
                
                  <Link className={styles.menuItem} activeClassName={styles.active} onClick={!item.secondLevel ? () => setDisplayMenu(false) : () => setDisplaySecondLevel(!displaySecondLevel)} to={item.url}> 
                    {item.name}
                  </Link>
              
                  :
                  `${item.name}`
                }

                {item.secondLevel &&

                <ul className={displaySecondLevel ? styles.show : styles.hide}>
                  {item.secondLevel.map((subItem) => {
                    return (
                      <li key={subItem.name}>
                        <Link to={subItem.url}>
                          {subItem.name}
                        </Link>
                      </li>
                    );
                  },
                  )}
                </ul>
                }
              </li>
            );
          })}
        </ul>
      </nav>

      <nav className={classnames(styles.navigation, styles.desktop)}>
        <ul>
          {navigation.map((item) => {
            return (
              <li className={classnames(styles.menuItem, location === '/' && styles.white)} key={item.name}>
                {!item.secondLevel ?
                  <Link to={item.url}>
                    {item.name}
                  </Link>

                  :
                  `${item.name}`
                }
                {item.secondLevel &&
                <ul>
                  {item.secondLevel.map((subItem) => {
                    return (
                      <li 
                        key={subItem.name}
                        className={styles.whiteBackground}
                      >
                        <Link to ={subItem.url}>
                          {subItem.name}
                        </Link>
                      </li>
                    );
                  },
                  )}
                </ul>
                }
              </li>
            );
          })}
        </ul>
      </nav>

    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
