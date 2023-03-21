import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

//components
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            layout="fullWidth"
          />
           <div className="hero-container">
              <div className="hero-text">
                  <h1>ponchito simply recipes</h1>
                  <h4>no fluff, just recipes</h4>
              </div>
            </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}
