import React from 'react';
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/esm/ListGroup";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class GroceriesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: props.listItems,
            listWithDuplicates: {}
        }
        window.listComponent = this;
    }

    addProduct(names) {
        let newList = this.state.listItems;
        for (let name of names) {
            newList.push(name);
        }
        let WithDuplicate = {};
        newList.forEach(function (x) {
            WithDuplicate[x] = (WithDuplicate[x] || 0) + 1;
        });
        this.setState({
            listItems: newList,
            listWithDuplicates: WithDuplicate,
        });
    }

    render() {
        const listOfProducts = [];
        const listWithDuplicatesCopy = this.state.listWithDuplicates;
        let keys = Object.keys(listWithDuplicatesCopy);
        for (let key of keys) {
            listOfProducts.push(<Product key={key} name={key} amount={listWithDuplicatesCopy[key]}/>)
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
    return <Container  fluid="md">
        <Row >
            <Col xs className={"productItem"}>
                <ListGroupItem  variant={"secondary"}>{props.amount} x {props.name}</ListGroupItem>
            </Col>
            <Col xs={"auto"}>
                <Button variant={"danger"}>remove</Button>
            </Col>
        </Row>
    </Container>

    //<ListGroup.Item variant="secondary" key={props.name}>{props.amount} x {props.name}  </ListGroup.Item>


}


export default GroceriesList;