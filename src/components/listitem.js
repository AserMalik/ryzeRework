import React, { Component } from "react"

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.value = "Testing"
      }

    render () {
        return (
            <div>
                <p>{this.props.value}</p>
                <p>{this.value}</p>
            </div>
        )
    }
}

export default ListItem;