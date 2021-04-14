import React from "react"
import { Link } from "gatsby"
import * as styles from "../styles/BigButton.module.scss"
import PropTypes from "prop-types"

const BigButton = props => {
  return (
    <Link to={props.to} className={styles.wrap}>
      <div className={styles.button}>
        <h2>{props.children}</h2>
      </div>
    </Link>
  )
}

export default BigButton

BigButton.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
}
