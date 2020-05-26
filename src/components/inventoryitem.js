import React from "react"

class InventoryItem extends React.Component {
    imgLinkDefault = "https://external-preview.redd.it/e0dJq9mIpO_a3_kBZ_ii_QNY-oT9aSwPgn0Ig_SKwjo.jpg?width=1024&auto=webp&s=b9cdafaaf07273a6b16899d1accdefa0adedacff"

    itemDataToSend = () => {
        this.props.removeItem(this.props.id);
    }

    render () {
        return (
            <div className="itemContainer" onClick={() => this.itemDataToSend(this.props.id)}>
                <img className="itemImage" src={this.props.itemData[0] || this.imgLinkDefault} />
            </div>
        )
    } 
}

export default InventoryItem;