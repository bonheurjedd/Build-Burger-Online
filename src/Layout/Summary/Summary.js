import React from 'react';
import classes from './Summary.module.css';
const Summary = (props) => {

 return (
  <>

   <div className={classes.SummaryBox}>
    <h1>Your Order</h1>
    <p>A delicious Burger with Your Own Choosen Ingredients</p>
    <div>Ingredients</div>
    <div><strong>Total Price: </strong></div>
    <p>Continue to Checkout ? </p>

    <button>Cancel</button>
    <button>Continue</button>
   </div>
  </>
 )
}

export default Summary;