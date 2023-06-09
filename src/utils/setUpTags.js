const setUpTags = recipes => {
   
   const allTags = {}

   recipes.forEach(recipe => {
      recipe.content.tags.forEach(tag => {
         console.log(tag)
         if (allTags[tag]) {
         allTags[tag] = allTags[tag] + 1
         }
         else {
           allTags[tag] = 1 
         }
      })
   })
   console.log(allTags);
   const newTags = Object.entries(allTags).sort((a, b) => {
      const [firstTag] = a
      const [secondTag] = b
      return firstTag.localeCompare(secondTag)
   })
   console.log(newTags);
  return newTags
}

export default setUpTags

