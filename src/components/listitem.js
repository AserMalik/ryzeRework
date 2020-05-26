import React from "react"

class ListItem extends React.Component {
    constructor(props){
        super(props);
        this.props.itemData[0] = "https://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/"+this.props.itemData[0]+".png"
    }

    itemDataToSend = () => {
        this.props.sendItem(this.props.itemData);
    }

    render () {
        return (
            <div className="itemContainer" onClick={() => this.itemDataToSend(this.props.itemData)}>
                <img className="itemImage" src={this.props.itemData[0]} alt="itemPicture" />
            </div>
        )
    } 
}   

export default ListItem;