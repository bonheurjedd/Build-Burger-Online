import React, { Component } from 'react';
import Burger from './Burger/Burger';
class BurgerBuilder extends Component {
 state = {
  ingredients: {
   salad: 1,
   meat: 1,
   bacon: 1,
   cheese: 1,
  }
 }

 render() {

  return (
   <>
    <Burger burgerIngredients={this.state.ingredients} />
    <div>BurgerControls</div>
   </>
  )
 }
}

export default BurgerBuilder;