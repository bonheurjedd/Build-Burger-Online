import React, { Component } from 'react';
import Burger from './Burger/Burger';
import BurgerControls from './BurgerControls/BurgerControls';
class BurgerBuilder extends Component {
 state = {
  ingredients: {
   salad: 0,
   meat: 0,
   bacon: 0,
   cheese: 0,
  }
 }

 addIngredientHandler = (igKey) => {


 }

 render() {

  return (
   <>
    <Burger burgerIngredients={this.state.ingredients} />
    <BurgerControls addIngredient={this.addIngredientHandler} />
   </>
  )
 }
}

export default BurgerBuilder;