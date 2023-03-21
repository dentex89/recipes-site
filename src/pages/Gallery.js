import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const query = graphql`
   {
      allFile(filter: { extension: { ne: "svg" } }) {
         nodes {
           name
           childImageSharp {
             gatsbyImageData(
               layout: FIXED
               placeholder: BLURRED
               width: 200
               height: 200
             )
           }
         }
       }
  }
`

export default function Gallery() {
   const data = useStaticQuery(query)
   const nodes = data.allFile.nodes
   console.log(data);
   return (
      <div>
         {nodes.map((image, index) => {
            console.log(image);
            const { name } = image
            const pathToImage = getImage(image)
            return (
               <div key={index}>
                  <GatsbyImage image={pathToImage} alt={name} />
                  <p>{name}</p>
               </div>
            )
         })}      
      </div>
      
    
  )
}
