import React, { Component } from 'react';
import {FlexibleXYPlot, FlexibleWidthXYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LineMarkSeries} from 'react-vis';
import "../../node_modules/react-vis/dist/style.css"

class Chart2 extends React.Component {
  render() {
    const data = [
      {x: 0, y: 1},
      {x: 1, y: 2},
      {x: 2, y: 3},
      {x: 3, y: 4},
      {x: 4, y: 5},
      {x: 5, y: 6},
      {x: 6, y: 7},
      {x: 7, y: 8},
      {x: 8, y: 9},
      {x: 9, y: 1}
    ];
    return (
      <div className="newChart">
        <FlexibleXYPlot height={300} xDomain={[0, 18]}>
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis />
            <YAxis />
            <LineMarkSeries data={data} />
        </FlexibleXYPlot>
      </div>
    );
  }
}

export default Chart2;
