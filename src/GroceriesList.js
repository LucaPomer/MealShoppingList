"use strict"
import React from 'react';

class GroceriesList extends React.Component{
constructor(props){
    super(props);
    this.state={
        listItems: ["tomato ","pasta"],
    }
    this.addProduct("basilikum");
}
addProduct(name){
    let newList = this.state.listItems;
    newList.concat(name);
    this.setState({
        listItems: newList
    })
}

    render(){
        const listItemsCopy = this.state.listItems.map((product) =>
            <Product name={product}></Product>
        );

        return(
            <div>
                <h1>Grocery List</h1>
                <ul id={"productList"}>
                    <Product name={"test name"}/>
                    {this.state.listItems}
                </ul>
            </div>
        )
    }

}

function Product(props) {
    return <h2>I am product : {props.name}</h2>;
}








export default GroceriesList;