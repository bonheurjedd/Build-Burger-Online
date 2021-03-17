import React from 'react';
import Burger from '../../BurgerBuilder/Burger/Burger';
import Buttons from '../BurgerControls/Buttons/Buttons';
import classes from './CheckoutSummary.module.css';
const checkoutSummary = (props) => {
 return (
  <div className={classes.checkoutSummary}>
   <h1>We hope you like it !</h1>
   <div style={{ width: '100%', height: "600px", margin: "auto" }}>
    <Burger burgerIngredients={props.ingredients} />
    <Buttons btnType="Dangerzone"
     clicked={props.checkCancelled}
    >Cancel</Buttons>
    <Buttons btnType="Successing"
     clicked={props.checkoutContinued}
    >Contintue</Buttons>
   </div>

  </div>
 )
}

export default checkoutSummary