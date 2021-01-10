import React from 'react';
import classes from './Summary.module.css';
const Summary = (props) => {
 const theOrders = Object.keys(props.listoforder).map((listordered, ofkeys) => {
  return <li key={ofkeys}>{listordered} : {props.listoforder[listordered]}</li>
 });

 console.log("howow" + theOrders)
 return (
  <>

   <div className={classes.SummaryBox}>
    <h1>Your Order</h1>
    <p>A delicious Burger with Your Own Choosen Ingredients</p>


    {theOrders}

    <div><strong>Total Price: {props.SummaryPrice}</strong></div>
    <p>Continue to Checkout ? </p>

    <button onClick={props.CancelOrder}>Cancel</button>
    <button>Continue</button>
   </div>
  </>
 )
}

export default Summary;