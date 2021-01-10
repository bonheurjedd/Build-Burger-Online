import React from 'react';
import classes from './BackOrder.module.css';

const BackOrder = (props) => {
 return (
  <>
   <div onClick={props.toclose} className={classes.Backorder}>

   </div>
  </>
 )
}

export default BackOrder;