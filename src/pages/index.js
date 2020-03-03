import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
//import fetch from 'isomorphic-unfetch'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  //http://localhost:8080/ping
  const [itemData, setItemData] = useState(0)
  useEffect( () => {
    fetch(`http://itemcheck.herokuapp.com/ping`)
    .then(response => response.json()) // parse JSON from request
    .then(resultData => {
      setItemData(resultData)
    })
  }, [])
  
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <ul>
        {Object.values(itemData).map((item, index) => {
            return (
              <li key={index}>
                <p>{index}: {item[0]}, stats: {Object.values(item[1]).toString()}</p>
              </li>
            )
          }
      )}
      </ul>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage  

/*class index extends Component {
    static async getInitialProps(ctx) {
        const response = await fetch('http://localhost:8080/ping');
        const resObject = await response.json();

        //console.log(Object.values(resObject));
        
        return { filteredItemsObject: resObject }
    }

    render() {
        return (
            <div>
                <ul>    
                    {this.props.filteredItemsObject.map((item, index) =>
                        <li key={index}>
                            <h4>{item[0]}</h4>
                            <p>{Object.keys(item[1]).toString()}: {Object.values(item[1]).toString()}</p>
                        </li>,
                    )}
                </ul>
                <Head>
                    <title>My page title</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
            </div>
        )
    }
}*/