import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = (pageNode) => {
  let context = pageNode.pageContext
  return (
  <Layout>
    <SEO title="Page two" />
    <div className="bigbox bigpicturewidth"><h1>{context.name}</h1></div>
    <img className="bigpicturewidth" src={context.pic} />
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}

export default SecondPage
