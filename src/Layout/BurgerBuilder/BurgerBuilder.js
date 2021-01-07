import React, { Component } from 'react';
import Burger from './Burger/Burger';
import BurgerControls from './BurgerControls/BurgerControls';
import Message from './BurgerControls/Messages/Message';
import closeItem from '../Assets/images/icon.png'
import classes from './BurgerBuilder.module.css';

// const ingredientPrices = {
//  salad: 0.5,
//  meat: 0.8,
//  bacon: 0.7,
//  cheese: 0.4
// }
class BurgerBuilder extends Component {
 state = {
  ingredients: {
   salad: 0,
   meat: 0,
   bacon: 0,
   cheese: 0,
  },
  Message: false,
  MessageText: ""


 }
 addIngredientHandler = (igKey) => {
  const ingredientsCopy = { ...this.state.ingredients };
  if (ingredientsCopy[igKey] < 2) {
   ingredientsCopy[igKey] += 1;
  } else {
   this.setState(
    {
     Message: true,
     MessageText: "You Can Only Add 2 " + igKey + " Only "
    }
   );
  }

  this.setState({ ingredients: ingredientsCopy });
 }

 removeIngredientHandler = (igKey) => {
  const ingredientsCopy = { ...this.state.ingredients };
  if (ingredientsCopy[igKey] > 0) {
   ingredientsCopy[igKey] -= 1;
  } else {
   this.setState(
    {
     Message: true,
     MessageText: "No More " + igKey + " To Remove "
    }
   );
  }

  this.setState({ ingredients: ingredientsCopy });
 }

 ToggleMessage = () => {
  this.setState({ Message: false })
 }
 render() {

  return (
   <>
    <Burger burgerIngredients={this.state.ingredients} />
    <Message messageEmpty={this.state.Message}>
     {this.state.MessageText}
     <img onClick={this.ToggleMessage} className={classes.Icon} src={closeItem} alt="close" />
    </Message>
    <BurgerControls
     removeIngredient={this.removeIngredientHandler}
     addIngredient={this.addIngredientHandler}
     disable={this.state.Message}
    />
   </>
  )
 }
}

export default BurgerBuilder;