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

  let cardComponents = cards.map(({node}, index) => 
    <Card key={index} l={node.slug} pic={node.pic} insidepic={node.backpic} name={node.name}/>
  )

  return (
    <Layout>
      <SEO title="Home" />
      <div className="bigbox">
        <div className="bigcontainer">
          <h1>Cards for cool people. And you.</h1>
        </div>
        <div className="container">
          <p>Here you can see our grand selection of cards. These cards are inspired by Present-day memes, Gen-Z culture, and various subreddits.</p>
        </div>
        <div className="container">
          <p>The cards you see here are not currently available. They are not a finished product, and are only displayed to demonstrate the function of the website.</p>
        </div>
      </div>

      <div className="cardgrid">
        {cardComponents}
      </div>
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
