import React from "react"

class ListItem extends React.Component {
    render () {
        return (
            <div className="itemContainer">
                <img className="itemImage" src={this.props.imgLink} alt="itemPicture" />
            </div>
        )
    } 
}

export default ListItem;