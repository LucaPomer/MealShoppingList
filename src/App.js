import React from 'react';
import MealCardList from './MealCardList.js';
import logo from './logo.svg';
import './App.css';
import GroceriesList from "./GroceriesList";

function App() {
  return (
    <div className="App">
      <MealCardList />
      <GroceriesList/>
    </div>
  );
}

export default App;
