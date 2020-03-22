import React from 'react';

class MealCardList extends React.Component {


    constructor(props) {
        super(props);
        const mealsJSON = require('./availableMeals.json');
        this.state = {
            color: "blue",
            mealsList: mealsJSON.mealsList,
        }
    }

    createMeal(index) {
        return (
            <Meal
                handleClickMeal={() => this.handleClickMeal(index)}
                mealName={this.state.mealsList[index].name}
            />
        );
    }

    handleClickMeal(index) {
        const meals = this.state.mealsList;
        let groceries = meals[index].ingredients;
        alert(groceries);

    }

    render() {

        return (
            <div className="mealCard">
                <h1>MealCard in the color {this.state.color}</h1>
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
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.handleClickMeal}> this meal is {this.props.mealName}</button>
            </div>
        );
    }
}

export default MealCardList