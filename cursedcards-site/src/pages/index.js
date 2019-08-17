import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Card = (props) => (
  <div>
    <Link to={props.l}>
      <img className="cardpic" src={props.pic} 
         onMouseOver={e => (e.currentTarget.src = props.insidepic)}
         onMouseOut ={e => (e.currentTarget.src = props.pic)}/>
    </Link>
    <div className="card">
      <p>{props.name}</p>
    </div>
  </div>

)


export default ( {data} ) => {
  let cards = data.allCardInfoYaml.edges
  console.log(cards)

  let cardComponents = cards.map(({node}, index) => <Card key={index} l={node.slug} pic={node.pic} insidepic={node.backpic} name={node.name}/>)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="bigbox">
        <div className="bigcontainer">
          <h1>Cards for cool people.</h1>
        </div>
        <div className="container">
          <p>Here you can see our grand selection of cards.</p>
        </div>
        <div className="container">
          <p>This website is under construction.</p>
        </div>
      </div>

      <div className="cardgrid">
        {cardComponents}
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
}

export const query = graphql`
  query {
    allCardInfoYaml {
      edges {
        node {
          name
          pic
          backpic
          slug
        }
      }
    }
  }
`
