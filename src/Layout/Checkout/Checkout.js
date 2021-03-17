import react, { Component } from 'react';
import CheckoutSummary from '../BurgerBuilder/CheckoutSummary/CheckoutSummary'
class Checkout extends Component {
 state = {
  ingredients: {
   salad: 1,
   meat: 1,
   cheese: 1,
   bacon: 1
  }
 }
 componentDidMount() {
  const query = new URLSearchParams(this.props.location.search);
  const ingredients = {};
  for (let param of query.entries()) {
   //['salad','1']
   ingredients[param[0]] = +param[1];
  }
  this.setState({ ingredients: ingredients })
 }

 checkoutContinuedHandle = () => {
  this.props.history.replace('/checkout/contact-data')
 }
 checkCancelledHandle = () => {
  this.props.history.goBack()
 }

 render() {

  return (
   <div>
    <CheckoutSummary
     checkoutContinued={this.checkoutContinuedHandle}
     checkCancelled={this.checkCancelledHandle}
     ingredients={this.state.ingredients} />
   </div>
  )
 }


}

export default Checkout;