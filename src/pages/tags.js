import { Link, graphql } from "gatsby"
import React from "react"
import slugify from "slugify"
import Layout from "../components/Layout"
import setUpTags from "../utils/setUpTags"
import Seo from "../components/Seo"

const Tags = ({
  data: {
    allContentfulRecipe: { nodes },
  },
}) => {
  const tags = setUpTags(nodes)

  return (
    <Layout>
      <Seo title="Tags" />
      <main className="page">
        <section className="tags-page">
          {tags.map((tag, index) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })

            return (
              <Link to={`/tags/${slug}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
