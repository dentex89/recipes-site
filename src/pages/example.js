import * as React from "react"
import Layout from "../components/Layout"
import Gallery from "./Gallery"


const Page = () => {
  return (
    <Layout>
      <main className="page">
        <Gallery />
      </main>
    </Layout>
   )
}

export default Page