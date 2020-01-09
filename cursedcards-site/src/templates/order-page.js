import React, { useState } from "react"
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
    this.stripe = window.Stripe("pk_live_fy5o2iL2IvS1YMfFsondFnRe002NW9Z7S8")
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
     return (<OrderForm redirectToCheckout={this.redirectToCheckout}/>)
  }
}

const OrderForm = ({props}) => {
  const [name, set_name] = useState("");
  const [street_address, set_street_address] = useState("");
  const [city, set_city] = useState("");
  const [state, set_state] = useState("");
  const [zip_code, set_zip_code] = useState("");
  return (
    <div className="orderFormGrid">
      <form onSubmit={() => {}}>
      <button
          style={buttonStyles}
          onClick={event => props.redirectToCheckout(event)}
        >
          ORDER CARD
      </button>
      <div>
      <input 
        name={"name"}
        value={name}
        placeholder={"Name"}
        onChange={n => set_name(n.target.value)}
      /></div>
      <div>
      <input 
        name={"street_address"}
        value={street_address}
        placeholder={"Street Address"}
        onChange={n => set_street_address(n.target.value)}
      />
      </div>
      <div>
      <input 
        name={"city"}
        value={city}
        placeholder={"City"}
        onChange={n => set_city(n.target.value)}
      />
      </div>
      <input
        name={"state"}
        value={state}
        placeholder={"State"}
        onChange={n => set_state(n.target.value)}
      />
      <input 
        name={"zip_code"}
        value={zip_code}
        placeholder={"Zipcode"}
        onChange={n => set_zip_code(n.target.value)}
      />
    </form>
  </div>
  )
}



const OrderPage = (pageNode) => {
  let context = pageNode.pageContext
  return (
  <Layout>
    <span dangerouslySetInnerHTML= {{ __html: ` 
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBxC3rNbafWBznGocNNdNOjE6yrYz5OjOk&libraries=places"></script>`}} />
    <SEO title={context.name} />
    <div className="ordergrid">
      <div style={{margin: "0.5em"}} className="bigbox "><h1>{context.name}</h1></div>
      <div></div>
      <img style={{width: '100%'}} src={context.pic} />
      <div style={{margin: "0.5em", padding: "1em",}} className= "bigbox">
        <h3>{context.description}</h3>
        <Checkout SKU={context.SKU}/>
      </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}

export default OrderPage
