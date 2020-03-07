import React from "react";
import { Line } from "react-chartjs-2";

var initialState = {
  labels: [1, 2, 3, 4, 5, 6, 7],
  datasets: [
    {
      label: "0",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: "1",
      fillColor: "rgba(151,187,205,0.2)",
      strokeColor: "rgba(151,187,205,1)",
      pointColor: "rgba(151,187,205,1)",
      pointStrokeColor: "#fff",
      data: [28, 48, 40, 19, 86, 27, 90]
    }
  ]
};

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    var _this = this;
    var newState = initialState;
    // returns a Chart.js instance reference
    setInterval( () => {
      var newData = [];
      for (var i = 0; i < 100; i++) {
        newData[i] = Math.random() * 100 + i;
      }
      newState.datasets[0].data = newData;
      console.log("_this variable[0]: " + _this.state.datasets[0].data[2]);
      console.log("_this variable[1]: " + _this.state.datasets[1].data[2]);
      console.log("IS variable[0]: " + initialState.datasets[0].data[2]);
      console.log("IS variable[1]: " + initialState.datasets[1].data[2]);

      _this.setState(initialState);
    }, 1000);
  }

  render() {
    return <Line
      data={this.state}
      />
  }
}

export default Chart;
