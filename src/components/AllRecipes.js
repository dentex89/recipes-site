import React from 'react'
import { useStaticQuery, graphql } from "gatsby"



//components
import TagsList from './TagsList'
import RecipesList from './RecipesList'

const query = graphql`
  query {
    allContentfulRecipe(sort: {title: ASC}) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

const AllRecipes = () => {
   const data = useStaticQuery(query)
   const recipes = data.allContentfulRecipe.nodes
   console.log(recipes);
  
   return (
     <section className='recipes-container'>
         <TagsList recipes={recipes} /> 
         <RecipesList recipes={recipes} />
     </section>
     
  )
}

export default AllRecipes