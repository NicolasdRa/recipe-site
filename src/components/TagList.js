import React from "react"
import { Link } from "gatsby"
import setUpTags from "../utils/setUpTags"
import slugify from "slugify"

const TagList = ({ recipes = [] }) => {
  const newTags = setUpTags(recipes)
  return (
    <div className="tag-container">
      <h4>Recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag
          const slug = slugify(text, { lower: true })
          return (
            <Link to={`/tags/${slug}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagList
