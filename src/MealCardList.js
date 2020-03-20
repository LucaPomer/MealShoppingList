import React from 'react';

class MealCardList extends React.Component {

    constructor() {
        super();
        this.state = {
            color: "blue",
        }
    }

    render() {
        const allDishes = ["fish","pasta","soup"]
        const meals = require('./availableMeals.json');
        return (
            <div className="mealCard">
                <h1>MealCard in the color {this.state.color}</h1>
                <ul>
                    <Meal mealName={meals.mealsList[0].name}> </Meal>
                    <Meal mealName ={allDishes[1]}> </Meal>
                    <Meal mealName ={allDishes[2]}> </Meal>
                </ul>

            </div>
        );
    }


}

class Meal extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h1> this meal is {this.props.mealName}</h1>
            </div>
        );
    }
}

export default MealCardList