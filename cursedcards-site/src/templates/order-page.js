import React, { useState } from "react"
import { Link } from "gatsby"
import { Formik } from 'formik';
import * as Yup from "yup";

import Layout from "../components/layout"
import SEO from "../components/seo"


const usstates = {
  "AL": "Alabama",
  "AK": "Alaska",
  "AS": "American Samoa",
  "AZ": "Arizona",
  "AR": "Arkansas",
  "CA": "California",
  "CO": "Colorado",
  "CT": "Connecticut",
  "DE": "Delaware",
  "DC": "District Of Columbia",
  "FM": "Federated States Of Micronesia",
  "FL": "Florida",
  "GA": "Georgia",
  "GU": "Guam",
  "HI": "Hawaii",
  "ID": "Idaho",
  "IL": "Illinois",
  "IN": "Indiana",
  "IA": "Iowa",
  "KS": "Kansas",
  "KY": "Kentucky",
  "LA": "Louisiana",
  "ME": "Maine",
  "MH": "Marshall Islands",
  "MD": "Maryland",
  "MA": "Massachusetts",
  "MI": "Michigan",
  "MN": "Minnesota",
  "MS": "Mississippi",
  "MO": "Missouri",
  "MT": "Montana",
  "NE": "Nebraska",
  "NV": "Nevada",
  "NH": "New Hampshire",
  "NJ": "New Jersey",
  "NM": "New Mexico",
  "NY": "New York",
  "NC": "North Carolina",
  "ND": "North Dakota",
  "MP": "Northern Mariana Islands",
  "OH": "Ohio",
  "OK": "Oklahoma",
  "OR": "Oregon",
  "PW": "Palau",
  "PA": "Pennsylvania",
  "PR": "Puerto Rico",
  "RI": "Rhode Island",
  "SC": "South Carolina",
  "SD": "South Dakota",
  "TN": "Tennessee",
  "TX": "Texas",
  "UT": "Utah",
  "VT": "Vermont",
  "VI": "Virgin Islands",
  "VA": "Virginia",
  "WA": "Washington",
  "WV": "West Virginia",
  "WI": "Wisconsin",
  "WY": "Wyoming"
}


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
    <div>
    <Formik
      initialValues={{ email: "" }}
      onSubmit={async values => {
        await new Promise(resolve => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required"),
        name:  Yup.string().required("Required"),
        streetAddress:  Yup.string().required("Required"),
        city:  Yup.string().required("Required"),
        zipCode:  Yup.string().required("Required"),
        usstate:  Yup.string().required("Required"),
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <h4>Shipping information</h4>
            <div className="orderForm">


              <div >
                <label htmlFor="name" style={{ display: "block" }}>
                  Name
                </label>
                <input
                  id="name"
                  placeholder="Elanor Jenkins"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name
                      ? "text-input error"
                      : "text-input"
                  }
                />
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}
              </div>


              <div >
                <label htmlFor="email" style={{ display: "block" }}>
                  Email
                </label>
                <input
                  id="email"
                  placeholder="grandson@gmail.com"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? "text-input error"
                      : "text-input"
                  }
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                  )}
              </div>

              <div >
                <label htmlFor="streetAddress" style={{ display: "block" }}>
                  Street address
                </label>
                <input
                  id="streetAddress"
                  placeholder="220 Little Grove St."
                  type="text"
                  value={values.streetAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.streetAddress && touched.streetAddress
                      ? "text-input error"
                      : "text-input"
                  }
                  />
                  {errors.streetAddress && touched.streetAddress && (
                    <div className="input-feedback">{errors.streetAddress}</div>
                  )}
              </div>

              
              <div >
                <label htmlFor="city" style={{ display: "block" }}>
                  City
                </label>
                <input
                  id="city"
                  placeholder="Little Grove"
                  type="text"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.city && touched.city
                      ? "text-input error"
                      : "text-input"
                  }
                  />
                  {errors.city && touched.city && (
                    <div className="input-feedback">{errors.city}</div>
                  )}
              </div>

              
              <div >
                <label htmlFor="zipCode" style={{ display: "block" }}>
                  Zip code
                </label>
                <input
                  id="zipCode"
                  placeholder="12345"
                  type="text"
                  value={values.zipCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.zipCode && touched.zipCode
                      ? "text-input error"
                      : "text-input"
                  }
                  />
                  {errors.zipCode && touched.zipCode && (
                    <div className="input-feedback">{errors.zipCode}</div>
                  )}
              </div>
              
              <div >
                <label htmlFor="usstate" style={{ display: "block" }}>
                  State
                </label>
                <select
                  name="usstate"
                  value={values.usstate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.usstate && touched.usstate
                      ? "select error"
                      : "select"
                  }
                >
                  <option value="" label="Select a state" />
                  {
                    Object.keys(usstates).map(usstate => (
                      <option key={usstate}>{usstates[usstate]}</option>
                    ))
                  }
                </select>
                {errors.usstate && touched.usstate && (
                  <div className="input-feedback">{errors.usstate}</div>
                )}
              </div>

            </div>

            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        );
      }}
    </Formik>
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
      <div style={{margin: "0.5em", gridColumnStart: 1, gridColumnEnd: 3 }} className="bigbox "><h1>{context.name}</h1></div>
      <div>
        <img style={{width: '100%'}} src={context.pic} />
        <img style={{width: '100%'}} src={context.backpic} />
        </div>
      <div>
        <div style={{margin: "0.5em", padding: "1em"}} className= "bigbox">
          <h3>{context.description}</h3>
          <Checkout SKU={context.SKU}/>
        </div>
      </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}

export default OrderPage
