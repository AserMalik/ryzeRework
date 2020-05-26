import React from "react"
import ListItem from "./listitem"
//import Chart from "./chart"
import Chart2 from "./chart2"
import InventoryItem from "./inventoryitem";

class App extends React.Component {   
  constructor() {
    super();
    var numItemDataFields = 3;

    this.state = {
      itemsMasterObject: [],
      itemInventoryArray: Array(6).fill(Array(numItemDataFields).fill(0)),
      abilitySettings: {
        abilityName: "Dark Sphere",
        abilityDmg: 70,
        abilityAPRatio: 0.65
      },
      chartSettings: {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        datasets: [
          {
            label: "0",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            data: Array(19).fill(50)
          }
          /*{
            label: "1",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            data: [28, 48, 40, 19, 86, 27, 90]
          }*/
        ],       
      },
      enemyChampion: {
        name: "Teemo",
        level: 1,
        HP: 528,
        hpMod: 90,
        armor: 24.3,
        armorMod: 3.75,
        mr: 30,
        mrMod: 0.5
      }
    };
    //console.log(this.state.itemInventoryArray)
  }

  getItem = (itemData) => {
    let newItemInventoryArray = this.state.itemInventoryArray;
    let i = 0;
    while(this.state.itemInventoryArray[i][0]){
      i++;
      if (i > 5) {
        console.log("Max items. Please remove an item.");
        return;
      }
    }
    newItemInventoryArray[i] = itemData;
    this.setState.itemInventoryArray = newItemInventoryArray;
    this.updateDataset(this.state.itemInventoryArray);
    this.forceUpdate();
  }

  removeItem = (id) => {
    let newItemInventoryArray = this.state.itemInventoryArray;
    newItemInventoryArray[id] = Array(3).fill(0);
    this.setState.itemInventoryArray = newItemInventoryArray;
    this.updateDataset(this.state.itemInventoryArray);
    this.forceUpdate();
  }

  updateDataset = (itemInventoryArray) => {
    let totalAP = this.calculateAP(itemInventoryArray);
    //console.log("We have: ", totalAP, " AP.");
    let abilityDamage = this.calculateDmg(totalAP)
    //console.log("Syndra Q does: ", abilityDamage, " raw ability damage.")
    var dummyChartSettings = this.state.chartSettings;
    dummyChartSettings.datasets[0].data[0] = this.state.enemyChampion.HP;
    //console.log("Teemo has: ", this.state.chartSettings.datasets[0].data[0], " HP.")
    for (let i = 1; i < this.state.chartSettings.labels.length; i++){
      let abilityDamagePM = this.calculateDmgPostMigation(abilityDamage, i);  //i is the level, ablity damage is post mitigation
      dummyChartSettings.datasets[0].data[i] = this.state.enemyChampion.HP - abilityDamagePM;
    }
    this.setState.chartSettings = dummyChartSettings;
  }

  calculateAP = (itemInventoryArray) => {
    let totalAP = 0;
    for (let i = 0; i < itemInventoryArray.length; i++){
      if (itemInventoryArray[i][2].hasOwnProperty("FlatMagicDamageMod")){
        totalAP += Object.getOwnPropertyDescriptor(itemInventoryArray[i][2], "FlatMagicDamageMod").value;
        console.log(itemInventoryArray[i]);
      }
    }
    return totalAP;
  }

  calculateDmg = (totalAP, level) => {
    let rawDamage = this.state.abilitySettings.abilityDmg + (this.state.abilitySettings.abilityAPRatio*totalAP);
    return rawDamage;
  }

  calculateDmgPostMigation = (rawDamage, level) => {
    let mr = this.state.enemyChampion.mr + ((level-1) * this.state.enemyChampion.mrMod); //level-1 since we are counting from lvl 1
    return rawDamage * (100/(100+mr))
  }

  componentDidMount() {
    fetch(`https://itemcheck.herokuapp.com/ping`)
    .then(response => response.json())
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
            {Object.values(this.state.itemsMasterObject).map((itemObject, index) => {
                return(
                    <ListItem itemData={itemObject} key={index} sendItem={this.getItem.bind(this)} />
                )
              })}
          </div>
          <div className="itemsList" id="itemsListInventory">
            <InventoryItem itemData={this.state.itemInventoryArray[0]} id={0} removeItem={this.removeItem.bind(this)} />
            <InventoryItem itemData={this.state.itemInventoryArray[1]} id={1} removeItem={this.removeItem.bind(this)} />
            <InventoryItem itemData={this.state.itemInventoryArray[2]} id={2} removeItem={this.removeItem.bind(this)} />
            <InventoryItem itemData={this.state.itemInventoryArray[3]} id={3} removeItem={this.removeItem.bind(this)} />
            <InventoryItem itemData={this.state.itemInventoryArray[4]} id={4} removeItem={this.removeItem.bind(this)} />
            <InventoryItem itemData={this.state.itemInventoryArray[5]} id={5} removeItem={this.removeItem.bind(this)} />
          </div>
        </div>
        <div className="rootChart">
          {/*<Chart className="chart" initialState={this.state.chartSettings} />*/}
          <Chart2 />
        </div>
      </div>
    )
  } 
}

export default App;
