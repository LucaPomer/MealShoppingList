import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";

class MealCardList extends React.Component {

    createMeal(index) {
        return (
            <Meal
                handleClickMeal={() => this.props.handleClickMeal(index)}
                mealName={this.props.mealsList[index].name}
            />
        );
    }


    render() {

        return (
            <div className="mealCard">
                <h1>Meal Card</h1>
                <ul>
                    {this.createMeal(0)}
                    {this.createMeal(1)}
                    {this.createMeal(1)}
                </ul>

            </div>
        );
    }


}

class Meal extends React.Component {

    render() {
        return <Card bg= "light" className="mealButton">
            <Card.Img variant="top" src="https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg"/>
            <Card.Body>
                <Card.Title>{this.props.mealName}</Card.Title>
                <Card.Text>
                    a nice meal
                </Card.Text>
                <Button onClick={this.props.handleClickMeal} variant="primary">Add to Groceries</Button>
            </Card.Body>
        </Card>;
    }
}

export default MealCardList