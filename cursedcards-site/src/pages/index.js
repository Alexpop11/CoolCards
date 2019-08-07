import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
        <div>< div class="container"><h1>The best cards on the net.</h1> </div>
    <div><p>lets sell some cards!</p></div>
    <div><p>Now go build something great.</p></div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src="/hmmmmmmmm.jpg"/>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
