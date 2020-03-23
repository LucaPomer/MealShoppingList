import React from 'react';
import MealCardList from "./MealCardList";
import GroceriesList from "./GroceriesList";

class MainBody extends React.Component {
    constructor(props){
        super(props);
        const mealsJSON = require('./availableMeals.json');
        this.state = {
            mealsList: mealsJSON.mealsList,
            productList: []
        }
    }


    handleClickMeal(index) {
        const meals = this.state.mealsList;
        let groceries = meals[index].ingredients;
        window.listComponent.addProduct(groceries);
    }

    render(){
        return (
            <div className="App">
                <MealCardList
                    handleClickMeal = {(i)=>this.handleClickMeal(i)}
                    mealsList = {this.state.mealsList}/>
                <GroceriesList listItems = {this.state.productList}/>
            </div>
        );
    }


}
export default MainBody