import React, {Fragment} from 'react';
import './App.css';
import MyCard from "./components/my-card/MyCard";
import FoodMenu from "./components/food/FoodMenu";
import NavBar from "./layout/navbar/NavBar";

const App = () => {
  return (
    <>
       <NavBar header="Welcome to Bootstrap" color="bg-success"/>
      <FoodMenu/>
    </>
  );
}

export default App;
