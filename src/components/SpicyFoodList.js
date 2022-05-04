import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  console.log(foods)

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray)
  }

  ////////////USE FOReACH TO REMOVE CLICKED ITEM
  // function handleClick(id){
  //   const foodAvailable = [...foods]
  //   foodAvailable.forEach((food) => {
  //     if(food.id === id){
  //       const index = foodAvailable.indexOf(food)
  //       foodAvailable.splice(index, 1)
  //     }
  //   })
  //   setFoods(foodAvailable)
  // }


  /////////////////USE FILTER TO REMOVE ITEM CLICKED
  // function handleClick(id) {
  //   const newFoodArray = foods.filter((food) => food.id !== id);
  //   setFoods(newFoodArray)
  // }

  /////////UPDATE FOODS HEAT LEVEL
  function handleClick(id){
    const newFoodsArray = [...foods]
    newFoodsArray.forEach((food) => {
      if(food.id === id) {
        food.heatLevel += 1
      }
    })
    setFoods(newFoodsArray)
  }
  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
