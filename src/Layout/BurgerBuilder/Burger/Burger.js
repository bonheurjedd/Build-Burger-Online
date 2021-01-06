import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.module.css';
const Burger = () => {
 return (
  <>
   <div className={classes.Burger}>
    <BurgerIngredients type="bread-top" />
    <div><p>Ingredients</p></div>
    <BurgerIngredients type="bread-bottom" />
   </div>
  </>
 )
}

export default Burger;