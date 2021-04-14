import React, { useState } from "react"
import Button from "./button"
import PropTypes from "prop-types"
import BigButton from "./bigButton"
import * as styles from "../styles/CategorySelector.module.scss"
import { navigate } from "@reach/router"

const CategorySelector = props => {
  const [displayCategories, setDisplayCategories] = useState(false)
  const categories =
    props.page === "Performance"
      ? [
          {
            title: "Design",
            link: "design",
          },
          {
            title: "Theatre Making",
            link: "theatre-making",
          },
        ]
      : props.page === "Design"
      ? [
          {
            title: "Performance",
            link: "performance",
          },
          {
            title: "Theatre Making",
            link: "theatre-making",
          },
        ]
      : props.page === "Home"
      ? [
          {
            title: "Performance",
            link: "performance",
          },
          {
            title: "Design",
            link: "design",
          },
          {
            title: "Theatre Making",
            link: "theatre-making",
          },
        ]
      : props.page === "Theatre Making" && [
          {
            title: "Performance",
            link: "performance",
          },
          {
            title: "Design",
            link: "design",
          },
        ]

  return (
    <section id="closed" className={styles.categoriesWrap}>
      <Button
        onClick={() => {
          setDisplayCategories(!displayCategories)
          navigate(!displayCategories ? "#opened" : "#closed")
        }}
      >
        {!displayCategories ? "MORE PROJECTS..." : "LESS PROJECTS..."}
      </Button>

      {displayCategories && (
        <section className={styles.categories}>
          <div className={styles.verticalLine} />

          <div id="opened" className={styles.options}>
            {categories.map(category => {
              return (
                <BigButton
                  key={category.title}
                  to={`/projects/${category.link}`}
                >
                  {category.title}
                </BigButton>
              )
            })}
          </div>
        </section>
      )}
    </section>
  )
}

export default CategorySelector

CategorySelector.propTypes = {
  page: PropTypes.oneOf(["Performance", "Design", "Theatre Making", "Home"]),
}
