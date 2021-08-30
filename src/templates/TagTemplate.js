import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import RecipeList from "../components/RecipeList"
import Seo from "../components/Seo"

const TagTemplate = ({ data, pageContext }) => {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = data
  const { tag } = pageContext

  return (
    <Layout>
      <Seo title={tag} />
      <main className="page">
        <h2>{tag}</h2>
        <div className="tag-recipes">
          <RecipeList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        prepTime
        cookTime
        title
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default TagTemplate
