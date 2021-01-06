import React, { Component } from 'react';
import Buttons from './Buttons/Buttons';
import classes from './BurgerControls.module.css'

const ControlsItems = [
 { label: 'Salad', type: 'salad' },
 { label: 'Bacon', type: 'bacon' },
 { label: 'Cheese', type: 'cheese' },
 { label: 'Meat', type: 'meat' },
]
class BurgerControls extends Component {
 render() {
  const Controls = ControlsItems.map((ctrl, keyz) => {
   return (
    <>
     <div className={classes.Controls} >
      <span className={classes.Ctrl} > {ctrl.type}</span>
      <div className={classes.ButtonSide}>
       <Buttons > <button className={classes.ButtonLess}>Less</button> </Buttons>
       <Buttons > <button onClick={() => this.props.addIngredient(ctrl.type)} className={classes.ButtonMore}>More</button> </Buttons>
      </div>

     </div>
    </>
   )
  })
  return (
   <>
    <div className={classes.BurgerContols}>
     <div className={classes.BurgerContolsInner}>
      {Controls}
     </div>
    </div>
   </>
  )

 }
}
export default BurgerControls;