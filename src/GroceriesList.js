"use strict"
import React from 'react';

class GroceriesList extends React.Component{
    listItems;
constructor(props){
    super(props);
    this.listItems=props.listItems;
    window.listComponent = this;
}
addProduct(name){
    let newList = this.props.listItems;
    newList.push(name);
    alert("added product" + newList);
    this.setState({
        listItems: newList
    })
}

    render(){
        const listItemsCopy = this.props.listItems.map((product) =>
            <Product name={product}></Product>
        );

        return(
            <div>
                <h1>Grocery List</h1>
                <ul id={"productList"}>
                    <Product name={"test name"}/>
                    {this.props.listItems}
                </ul>
            </div>
        )
    }

}

function Product(props) {
    return <h2>I am product : {props.name}</h2>;
}








export default GroceriesList;