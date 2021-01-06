import React, { Component } from 'react';
import Burger from './Burger/Burger';
class BurgerBuilder extends Component {
 render() {

  return (
   <>
    <Burger />
    <div>BurgerControls</div>
   </>
  )
 }
}

export default BurgerBuilder;