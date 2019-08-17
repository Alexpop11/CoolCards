/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, actions  }) => {
  }


exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  const result = await graphql(`
  {
    allCardInfoYaml {
      edges {
        node {
          name
          pic
          backpic
          slug
          description
          size
          price
        }
      }
    }
  }
  
  `)
  JSON.parse(JSON.stringify(result, null, 4)).data.allCardInfoYaml.edges.forEach(( n ) => { 
        let {node} = n
        createPage({
          path: node.slug,
          component: path.resolve(`./src/templates/order-page.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            ...node
          },
        })
    })
  /*
  result.data.allCardInfoYaml.edges.forEach(( { n } ) => {
    console.log(n)
    let node = n
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/order-page.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })*/
}