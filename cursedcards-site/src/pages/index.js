import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="container">
        <div class="item"><h1>The best cards on the net.</h1>
    <p>lets sell some cards!</p>
    <p>Now go build something great.</p></div>
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src="/hmmmmmmmm.jpg"/>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
