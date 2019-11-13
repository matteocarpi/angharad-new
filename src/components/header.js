import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from '../styles/Header.module.scss';
import navigation from '../data/navigation.json';

const Header = ({ siteTitle }) => (
  <header
    className={styles.header}
  >
      <h1 className={styles.logo}>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>

      <nav>
        <ul>
          {navigation.map((item) => {
            return (
            <li>
              <Link to={item.url}>
                {item.name}
              </Link>
              {item.secondLevel &&
                item.secondLevel.map((subItem) => {
                  return (
                    <li>
                      <Link to ={subItem.url}>
                        {subItem.name}
                      </Link>
                    </li>
                  )
              }
              )}
            </li>
            )
          })}
        </ul>
      </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
