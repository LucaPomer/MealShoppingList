"use strict"
import React from 'react';

class GroceriesList extends React.Component{
constructor(props){
    super(props);
    this.state={
        listItems:props.listItems,
    }
    window.listComponent = this;
}
addProduct(names){
    let newList = this.state.listItems;
  for(let name of names){
      newList.push(name);
  }
    this.setState({
        listItems: newList
    });
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
                    {listItemsCopy}
                </ul>
            </div>
        )
    }

}

function Product(props) {
    return <h2>I am product : {props.name}</h2>;
}








export default GroceriesList;