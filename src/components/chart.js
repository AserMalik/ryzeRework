import React from "react";
import { Line } from "react-chartjs-2";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialState: this.props.initialState
    }
  }

  componentDidMount() {
    var _this = this;
    var newState = this.state.initialState;
    // returns a Chart.js instance reference
      /*setInterval( () => {
      var newData = [];
      for (var i = 0; i < 100; i++) {
        newData[i] = Math.random() * 100 + i;
      }
      newState.datasets[0].data = newData;
      /*console.log("_this variable[0]: " + _this.state.datasets[0].data[2]);
      console.log("_this variable[1]: " + _this.state.datasets[1].data[2]);
      console.log("IS variable[0]: " + initialState.datasets[0].data[2]);
      console.log("IS variable[1]: " + initialState.datasets[1].data[2]);*/
      /*_this.setState(this.state.initialState);
    }, 1000);*/
  }

  render() {
    return <Line
      data={this.state.initialState}
      options={{
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }}
      />
  }
}

export default Chart;
