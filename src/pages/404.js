import * as React from "react"

//components
import Layout from "../components/Layout"


export default function Component () {
  return (
    <Layout>
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>page not found</h3>
        </section>
      </main>      
    </Layout>
  )
}