import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import RecipeList from "./RecipeList"
import TagList from "./TagList"

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        title
        id
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(query)

  return (
    <section className="recipes-container">
      <TagList recipes={recipes} />
      <RecipeList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
