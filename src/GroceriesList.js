import React from 'react';
import Button from 'react-bootstrap/Button'
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class GroceriesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productToAmount: props.listItems,
        }
        window.listComponent = this;
    }

    addProduct(names) {
        let mapCopy = this.state.productToAmount;
        for (let name of names) {
            let amount;
            if (mapCopy.hasOwnProperty(name)) {
                amount = mapCopy[name.toString()];
                amount++;
            } else {
                amount = 1;
            }
            mapCopy[name.toString()] = amount;
        }

        this.setState({
            productToAmount: mapCopy,
        });
    }

    removeProductAmount(name) {
        let mapCopy = this.state.productToAmount;
        let amount;
        if (mapCopy.hasOwnProperty(name)) {
            amount = parseInt(mapCopy[name.toString()]);
            if(amount<=1){
                delete mapCopy[name.toString()];
            }
            else{
                amount--;
                mapCopy[name.toString()] = amount;
            }
        }
        this.setState({
            productToAmount: mapCopy,
        });
    }

    addProductAmount(name) {
        let mapCopy = this.state.productToAmount;
        let amount;
        if (mapCopy.hasOwnProperty(name)) {
            amount = parseInt(mapCopy[name.toString()]);
                amount++;
                mapCopy[name.toString()] = amount;
        }
        this.setState({
            productToAmount: mapCopy,
        });
    }

    render() {
        const listOfProducts = [];
        const listWithDuplicatesCopy = this.state.productToAmount;
        let keys = Object.keys(listWithDuplicatesCopy);
        for (let key of keys) {
            listOfProducts.push(<Product
                clickRemoveProduct={() => this.removeProductAmount(key)}
                clickAddProduct={() => this.addProductAmount(key)}
                key={key}
                name={key}
                amount={listWithDuplicatesCopy[key]}/>)
        }
        return (
            <div className={"groceryList"}>
                <h1>Grocery List</h1>
                <li id={"productList"}>
                    {listOfProducts}
                </li>
            </div>
        )
    }

}

function Product(props) {
    return <Container fluid="md">
        <Row className={"productItem"}>
            <Col xs id={"description"}>
                <ListGroupItem variant={"secondary"}>{props.amount} x {props.name}</ListGroupItem>
            </Col>
            <Col id={"removeButton"} xs={"auto"}>
                <Button variant={"danger"} onClick={props.clickRemoveProduct}>-</Button>
            </Col>
            <Col id={"addButton"} xs={"auto"}>
                <Button variant={"success"} onClick={props.clickAddProduct}>+</Button>
            </Col>
        </Row>
    </Container>

    //<ListGroup.Item variant="secondary" key={props.name}>{props.amount} x {props.name}  </ListGroup.Item>


}


export default GroceriesList;