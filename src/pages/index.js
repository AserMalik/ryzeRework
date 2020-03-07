import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
//zingcharts, dygraph, react-chartjs, highcharts, or chartist
//sortable and shuffle js

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Chart from "../components/chart"
import ListItem from "../components/listitem"

const IndexPage = () => {
  //https://localhost:8080/ping
  const [itemData, setItemData] = useState(0)
  useEffect( () => {
    fetch(`https://itemcheck.herokuapp.com/ping`)
    .then(response => response.json()) // parse JSON from request
    .then(resultData => {
      setItemData(resultData)
    })
  }, []) 
  
  return (
    <Layout>
      <SEO title="Home" />
      <div className="chartRoot">
        <div className="chartContainer">
          <Chart className="chart" />
        </div>
        <div className="chartItemListContainer">
          <ul>
            {Object.values(itemData).map(itemObject => {
              var imgSrc = "https://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/"+itemObject[0]+".png"
              return(
                <li key={itemObject[0]}>
                  <div className="chartItemContainer">
                  <img className="itemImage" src={imgSrc} alt="itemPicture" />
                  {/*{itemObject[0]}: {itemObject[1]}
                  <ul>
                    {Object.entries(itemObject[2]).map((itemStats, subIndex) => {
                      console.log(itemStats)
                      return(
                        <li key={subIndex}>
                          {itemStats[0]}: {itemStats[1]}
                        </li>
                      )
                    })}
                  </ul>
                  */}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      </div>
      <ListItem value="test" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something  great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
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