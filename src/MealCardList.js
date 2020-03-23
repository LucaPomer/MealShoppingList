import React from 'react';

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
                <h1>MealCard in the </h1>
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