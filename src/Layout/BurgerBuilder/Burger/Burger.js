import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.module.css';
const Burger = (props) => {
 let transfromeingredient = Object.keys(props.burgerIngredients)
  .map((ingredients, igKey) => {
   return [...Array(props.burgerIngredients[ingredients])]
    .map((_, i) => {
     return (
      <BurgerIngredients keys={i + 1} type={ingredients} />
     )
    })
  }).reduce((arr, el) => {
   return arr.concat(el)
  })

 if (transfromeingredient === 0) {
  transfromeingredient = <p>Start Adding Ingredients !</p>
 }
 return (
  <>
   <div className={classes.Burger}>
    <BurgerIngredients type="bread-top" />
    {transfromeingredient}
    <BurgerIngredients type="bread-bottom" />
   </div>
  </>
 )
}

export default Burger;