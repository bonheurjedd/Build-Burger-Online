import React, { Component } from 'react';
import Burger from './Burger/Burger';
import BurgerControls from './BurgerControls/BurgerControls';
import Message from './BurgerControls/Messages/Message';

class BurgerBuilder extends Component {
 state = {
  ingredients: {
   salad: 0,
   meat: 0,
   bacon: 0,
   cheese: 0,
  },
  Message: false
 }
 addIngredientHandler = (igKey) => {
  const ingredientsCopy = { ...this.state.ingredients };
  if (ingredientsCopy[igKey] < 2) {
   ingredientsCopy[igKey] += 1;
  } else {
   this.setState({ Message: "You can only Add 2x Ingredient" });
  }
  setTimeout(() => {
   this.setState({ Message: false });
  }, 5000);
  this.setState({ ingredients: ingredientsCopy });
 }
 removeIngredientHandler = (igKey) => {
  const ingredientsCopy = { ...this.state.ingredients };
  if (ingredientsCopy[igKey] > 0) {
   ingredientsCopy[igKey] -= 1;
  } else {
   this.setState({ Message: "No More ingredient to Remove" });
  }
  setTimeout(() => {
   this.setState({ Message: false });
  }, 5000);
  this.setState({ ingredients: ingredientsCopy });
 }
 render() {

  return (
   <>
    <Burger burgerIngredients={this.state.ingredients} />
    <BurgerControls
     removeIngredient={this.removeIngredientHandler}
     addIngredient={this.addIngredientHandler}
    />
    <Message messageEmpty={this.state.Message}>{this.state.Message}</Message>
   </>
  )
 }
}

export default BurgerBuilder;