import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
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
        return (
            <div className="mealButton">
                <Button variant="primary"  onClick={this.props.handleClickMeal}>this meal is {this.props.mealName}</Button>
            </div>
        );
    }
}

export default MealCardList