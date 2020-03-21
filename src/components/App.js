import React from "react"
import ListItem from "./ListItem"
import Chart from "./Chart"

class App extends React.Component {   
  constructor() {
    super();

    this.state = {
      itemsMasterObject: [],
      itemInventorySlot1: [],
      itemInventorySlot2: [],
      itemInventorySlot3: [],
      itemInventorySlot4: [],
      itemInventorySlot5: [],
      itemInventorySlot6: []
      /*dataset object goes here*/
    };
  }

  componentDidMount() {
    fetch(`http://localhost:8080/ping`)
    .then(response => response.json()) // parse JSON from request
    .then(responseData => {
      this.setState({
        itemsMasterObject: responseData
      });
    })
  }

  render() {
    if(!this.state.itemsMasterObject.length){
      return null;
    }

    return (
      <div className="rootContainer">
        <div className="rootItems">
          <div className="itemsList" id="itemsListCatalogue">
            {/*<ul>
              {Object.values(this.state.itemsMasterObject).map(itemObject => {
                var imgSrc = "https://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/"+itemObject[0]+".png"
                return(
                  <li key={itemObject[0]}>
                    <ListItem imgLink={imgSrc} />
                  </li>
                )
              })}

            </ul>*/}
            {Object.values(this.state.itemsMasterObject).map((itemObject, index) => {
                var imgSrc = "https://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/"+itemObject[0]+".png"
                return(
                    <ListItem imgLink={imgSrc} key={index} onclick={() => this.activateLasers} />
                )
              })}
          </div>
          <div className="itemsList" id="itemsListInventory">
            <div>{this.state.itemInventorySlot1}</div>
            <div>{this.state.itemInventorySlot2}</div>
            <div>{this.state.itemInventorySlot3}</div>
            <div>{this.state.itemInventorySlot4}</div>
            <div>{this.state.itemInventorySlot5}</div>
            <div>{this.state.itemInventorySlot6}</div>
          </div>
        </div>
        <div className="rootChart">
          <Chart className="chart" />
        </div>
      </div>
    )
  } 
}

export default App;

/*const ListRoot = () => {
    const [itemData, setItemData] = useState(0)
    useEffect( () => {
      fetch(`http://localhost:8080/ping`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setItemData(resultData)
      })
    }, []) 

    return (
        <div className="itemsList">
          <ul>
            {Object.values(itemData).map(itemObject => {
              var imgSrc = "https://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/"+itemObject[0]+".png"
              return(
                <li key={itemObject[0]}>
                  <ListItem imgLink={imgSrc} />
                </li>
              )
            })}
          </ul>
        </div>
    )
}*/
/*
export default ItemsList;*/