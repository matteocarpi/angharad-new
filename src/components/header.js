import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import * as styles from "../styles/Header.module.scss"
import navigation from "../data/navigation.json"
import classnames from "classnames"
import { FaBars } from "react-icons/fa"
import { Location } from "@reach/router"

const Header = ({ siteTitle }) => {
  const [displayMenu, setDisplayMenu] = useState(false)
  const [displaySecondLevel, setDisplaySecondLevel] = useState(false)

  return (
    <Location>
      {({ location }) => (
        <header
          className={classnames(
            displayMenu && styles.backgroundOverlay,
            styles.header,
            location.pathname === "/" && styles.home
          )}
        >
          <div className={styles.headerTop}>
            <h2
              className={classnames(
                styles.logo,
                displayMenu && styles.frontWhite,
                location.pathname === "/" && styles.hide
              )}
            >
              <Link to="/">{siteTitle}</Link>
            </h2>
            <FaBars
              className={classnames(
                styles.menuIcon,
                location.pathname === "/" && styles.white
              )}
              onClick={() => setDisplayMenu(!displayMenu)}
            />
          </div>

          <nav className={classnames(styles.navigation, styles.mobile)}>
            <ul
              className={
                displayMenu ? styles.displayNavigation : styles.hideNavigation
              }
            >
              {navigation.map(item => {
                return (
                  <li
                    className={styles.menuItem}
                    key={item.name}
                    onClick={() => setDisplaySecondLevel(!displaySecondLevel)}
                  >
                    {!item.secondLevel ? (
                      <Link
                        className={styles.menuItem}
                        activeClassName={styles.active}
                        onClick={
                          !item.secondLevel
                            ? () => setDisplayMenu(false)
                            : () => setDisplaySecondLevel(!displaySecondLevel)
                        }
                        to={item.url}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      `${item.name}`
                    )}

                    {item.secondLevel && (
                      <ul
                        className={classnames(
                          displaySecondLevel ? styles.show : styles.hide,
                          styles.menuItem
                        )}
                      >
                        {item.secondLevel.map(subItem => {
                          return (
                            <li className={styles.menuItem} key={subItem.name}>
                              <Link className={styles.white} to={subItem.url}>
                                {subItem.name}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>

          <nav className={classnames(styles.navigation, styles.desktop)}>
            <ul>
              {navigation.map(item => {
                return (
                  <li
                    className={classnames(
                      styles.menuItem,
                      location === "/" && styles.white
                    )}
                    key={item.name}
                  >
                    {!item.secondLevel ? (
                      <Link to={item.url}>{item.name}</Link>
                    ) : (
                      `${item.name}`
                    )}
                    {item.secondLevel && (
                      <ul>
                        {item.secondLevel.map(subItem => {
                          return (
                            <li
                              key={subItem.name}
                              className={
                                location.pathname !== "/" &&
                                styles.whiteBackground
                              }
                            >
                              <Link to={subItem.url}>{subItem.name}</Link>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>
        </header>
      )}
    </Location>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export default Header
