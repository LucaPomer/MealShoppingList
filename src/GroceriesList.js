"use strict"
import React from 'react';

class GroceriesList extends React.Component{

    render(){
        return(
            <div>
                <h1>Grocery List</h1>
                <ul>
                    <Product/>
                </ul>
            </div>
        )
    }

}

function Product() {
    return <h2>I am product</h2>;
}








export default GroceriesList;