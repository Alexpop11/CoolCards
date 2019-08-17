import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#fff",
  outline: "none",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}


const Checkout = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    this.stripe = window.Stripe("pk_test_5oVbSXtaXfA3n7MS0mHBdcDw00Cveocj92")
  }
  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: this.props.SKU, quantity: 1 }],
      successUrl: `http://localhost:8000/page-2/`,
      cancelUrl: `http://localhost:8000/`,
    })
    if (error) {
      console.warn("Error:", error)
    }
  }
  render() {
    return (
      <button
        style={buttonStyles}
        onClick={event => this.redirectToCheckout(event)}
      >
        BUY CARD
      </button>
    )
  }
}


const OrderPage = (pageNode) => {
  let context = pageNode.pageContext
  console.log(context)
  return (
  <Layout>

    <SEO title={context.name} />
    <div className="ordergrid">
      <div style={{margin: "0.5em"}} className="bigbox "><h1>{context.name}</h1></div>
      <div></div>
      <img style={{width: '100%'}} src={context.pic} />
      <div style={{margin: "0.5em", padding: "1em",}} className= "bigbox"><h3>{context.description}</h3></div>
    </div>
    <Link to="/">Go back to the homepage</Link>
    <Checkout SKU={context.SKU}/>
  </Layout>
  )
}

export default OrderPage
