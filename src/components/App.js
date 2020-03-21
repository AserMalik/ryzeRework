import React from "react"
import ListItem from "./ListItem"
import Chart from "./Chart"

class App extends React.Component {   
  constructor() {
    super();

    this.state = {
      itemsMasterObject: []
      /*dataset object goes here*/
    };
  }

  componentDidMount() {
    fetch(`http://localhost:8080/ping`)
    .then(response => response.json()) // parse JSON from request
    .then(resultData => {
      this.setState({
        itemsMasterObject: resultData
      });
    })
    console.log(this.props.itemsData);
  }

  render() {
    if(!this.state.itemsMasterObject.length){
      return null;
    }

    return (
      <div className="rootContainer">
        <div className="rootItems">
          <div className="itemsList" id="itemsListCatalogue">
            <ul>
              {Object.values(this.state.itemsMasterObject).map(itemObject => {
                var imgSrc = "https://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/"+itemObject[0]+".png"
                return(
                  <li key={itemObject[0]}>
                    <ListItem imgLink={imgSrc} />
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="itemsList" id="itemsListInventory">
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
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