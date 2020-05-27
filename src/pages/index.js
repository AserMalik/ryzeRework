import React from "react"
import { Link } from "gatsby"
//zingcharts, dygraph, react-chartjs, highcharts, or chartist
//sortable and shuffle js

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import App from "../components/app"

const IndexPage = () => {
  return (
    <Layout>
      
      <SEO title="Home" />
      <App />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      </div>
      <h1>Hi people</h1>
     
      <h2>If you do not see a scrollable grid and table above this, please wait up to 30 seconds and then reload this page. This will allow the Heroku free dyno to complete a cold start.</h2>
    
      <h3>Disclaimer</h3>
      <p>This is a prototype of a LoL item damage calculator. Currently this website is only pulling from an Express backend that in turn contacts Riot's API to retrieve item data from the latest patch. This backend is currently hosted on a free Heroku dyno. The 'calculator' is currently incomplete as the graph does not reflect the selections made by the user.</p>
      
      <h3>About</h3>
      <p>LoL stands for League of Legends, a game my friends and I have enjoyed playing for a while. The game can be highly competitive and sometimes players argue about which of their builds, the six items their in-game character can buy in a game, is better. The design goal for this utility is to provide graphical data to users to help them mathematically determine the optimal build. But League can be a complex game and math doesn't always win you games, and so just writing a formula to give the players the set of items with the largest numbers isn't always that useful. By providing graphical context, players might alter their playstyle to reflect what the math reveals. And so I decided to undertake this LoL item damage calculator project, quite a mouthful that one.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      
    </Layout>
  )
}

export default IndexPage  

/*
<Head>
    <title>My page title</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
</Head>
}*/
