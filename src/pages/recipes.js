import * as React from "react"

//components
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"

export default function recipes() {
  return (
   <Layout>
      <main className="page">
        <AllRecipes />
      </main>
   </Layout>
  )
}
