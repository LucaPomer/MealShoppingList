import React from 'react';
import MealCardList from "./MealCardList";
import GroceriesList from "./GroceriesList";

class MainBody extends React.Component {
    constructor(props){
        super(props);
        const mealsJSON = require('./availableMeals.json');
        this.state = {
            mealsList: mealsJSON.mealsList,
            productList: ["tomato ","pasta", " salami"]
        }
    }

    render(){
        return (
            <div className="App">
                <MealCardList />
                <GroceriesList listItems = {this.state.productList}/>
            </div>
        );
    }


}
export default MainBody