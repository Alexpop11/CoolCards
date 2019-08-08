import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="bigbox">
      <div className="bigcontainer">
        <h1>The best cards on the net.</h1>
      </div>
      <div className="container">
        <p>Here you can see our grand selection of cards.
           there are none currently, because this website is
            under construction, dummy. </p>
      </div>
      <div className="container">
        <p>There will be soon, though.</p>
      </div>
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <div className="container">
        <p 
          style={{
            backgroundColor: `rgb(255,255,255)`
          }} > And now an advert from our sponsor:</p>
      </div>
      <img src="/hmmmmmmmm.jpg"/>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
