"use strict"
import React from 'react';

class GroceriesList extends React.Component{
constructor(props){
    super(props);
    this.state={
        listItems: [],
    }
}

    render(){
        const products = ["tomato","pasta"];
        
        const listItems = products.map((product) =>
            <Product name={product}></Product>
        );
        return(
            <div>
                <h1>Grocery List</h1>
                <ul id={"productList"}>
                    <Product name={"test name"}/>
                    {listItems}
                </ul>
            </div>
        )
    }

}

function Product(props) {
    return <h2>I am product : {props.name}</h2>;
}








export default GroceriesList;