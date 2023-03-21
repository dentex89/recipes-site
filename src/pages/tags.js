import React from "react"
import { Link, graphql } from "gatsby"
import slugify from "slugify"

//components
import Layout from "../components/Layout"
import setUpTags from "../utils/setUpTags"

export default function tags({data}) {
  const newTags = setUpTags(data.allContentfulRecipe.nodes)
  return (
   <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })
            return <Link key={index} className='tag' to={`/tags/${slug}`}>
              <h5>{text}</h5>
              <p>{value} recipe</p>
            </Link>
          })}
        </section>
      </main>
   </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`
