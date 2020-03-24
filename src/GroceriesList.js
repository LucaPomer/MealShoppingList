import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

class GroceriesList extends React.Component{
constructor(props){
    super(props);
    this.state={
        listItems:props.listItems,
        listWithDuplicates:{}
    }
    window.listComponent = this;
}
addProduct(names){
    let newList = this.state.listItems;
  for(let name of names){
      newList.push(name);
  }
    let WithDuplicate = {};
    newList.forEach(function(x) { WithDuplicate[x] = (WithDuplicate[x] || 0)+1; });
    this.setState({
        listItems: newList,
        listWithDuplicates:WithDuplicate,
    });
}

    render(){
        const listOfProducts = [];
        const listWithDuplicatesCopy = this.state.listWithDuplicates;
        let keys = Object.keys(listWithDuplicatesCopy);
        for (let key of keys){
            listOfProducts.push(<Product key = {key} name = {key} amount = {listWithDuplicatesCopy[key]}/>)
        }
        return(
            <div>
                <h1>Grocery List</h1>
                <ListGroup id={"productList"}>
                    {listOfProducts}
                </ListGroup>
            </div>
        )
    }

}

function Product(props) {
    return <ListGroup.Item variant="secondary" key={props.name}>{props.amount} x {props.name}  </ListGroup.Item>;
}








export default GroceriesList;