import React from 'react'
import { Link } from 'gatsby';
import slugify from "slugify"


//components
import setUpTags from '../utils/setUpTags';

const TagsList = ({ recipes }) => {
  const newTags = setUpTags(recipes)

  return (
    <div className='tags-container'>
      <h4>recipes</h4>
      <div className='tags-list'>
        {newTags.map((tag, index) => {
          const [text, value] = tag
          const slug = slugify(text, { lower: true })
          return <Link to={`/tags/${slug}`} key={index}>{text} ({value})</Link>
        })}
      </div>
   </div>
  )
}

export default TagsList