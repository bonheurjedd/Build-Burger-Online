import React from 'react';
import classes from './OrderNow.module.css';

const OrderNow = (props) => {
 return (
  <>
   <div className={classes.OrderButton}>
    <button disabled={props.goCheckout} onClick={props.checkoutNow} className={classes.Order}>Order Now </button>
   </div>
  </>
 )
}

export default OrderNow;