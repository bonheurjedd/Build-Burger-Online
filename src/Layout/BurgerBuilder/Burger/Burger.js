import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.module.css';
const Burger = (props) => {
  let transfromeingredient = Object.keys(props.burgerIngredients)
    .map((ingredients) => {
      return [...Array(props.burgerIngredients[ingredients])]
        .map((_, i) => {
          return (
            <BurgerIngredients key={ingredients + i} type={ingredients} />
          )
        })
    }).reduce((arr, el) => {

      return arr.concat(el)
    }, [])



  if (transfromeingredient.length === 0) {
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