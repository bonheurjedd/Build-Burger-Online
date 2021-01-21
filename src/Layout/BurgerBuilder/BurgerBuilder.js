import React, { Component } from 'react';
import Burger from './Burger/Burger';
import BurgerControls from './BurgerControls/BurgerControls';
import Message from './BurgerControls/Messages/Message';
import closeItem from '../Assets/images/icon.png'
import classes from './BurgerBuilder.module.css';
import Summary from '../Summary/Summary';
import OrderNow from './OrderNow/OrderNow';
import BackOrder from './BackOrder/BackOrder';
import instance from '../../axios-orders';
import Spinner from './Spinner/Spinner';
import ErrorHandler from './ErrorHandler/ErrorHandler';
import axios from 'axios';
const ingredientPrices = {
  salad: 0.7,
  meat: 0.9,
  bacon: 1,
  cheese: 0.8
}
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    Message: false,
    MessageText: "",
    NoIngridient: true,
    cantRemove: true,
    Price: 4,
    Purchasable: true,
    OrderNow: false,
    loading: false,
    error: false,

  }
  componentDidMount() {
    axios.get('https://react-my-burger-228f1-default-rtdb.firebaseio.com/ingredients.json')
      .then(response => {
        this.setState({ ingredients: response.data })
      })
      .catch(error => {
        this.setState({ error: true })
      })
  }
  // ________functions___________
  addIngredientHandler = (igKey) => {
    const ingredientsCopy = { ...this.state.ingredients };
    if (ingredientsCopy[igKey] < 2) {
      ingredientsCopy[igKey] += 1;
      const oldPrice = this.state.Price;
      const sumIngredients = oldPrice + ingredientPrices[igKey];
      this.setState({ Price: sumIngredients, });
      this.youCanCheckOut(ingredientsCopy);

    } else {
      this.setState(
        {
          Message: true,
          MessageText: "You Can Only Add 2 " + igKey + " Only ",

        }
      );
    }
    this.setState({ ingredients: ingredientsCopy });
    const newIngredsValues = Object.values({ ...ingredientsCopy });
    console.log(newIngredsValues);
    const newIngredsLength = newIngredsValues.reduce((total, currentValue) => {
      return total + currentValue;
    }, 0);
    console.log(newIngredsLength);
    if (newIngredsLength !== 0) {
      this.setState({ NoIngridient: false });
    }
  }

  // ____end________

  removeIngredientHandler = (igKey) => {
    const ingredientsCopy = { ...this.state.ingredients };
    if (ingredientsCopy[igKey] > 0) {
      ingredientsCopy[igKey] -= 1;
      const oldPrice = this.state.Price;
      const sumIngredients = oldPrice - ingredientPrices[igKey];
      this.setState({ Price: sumIngredients });
      this.youCanCheckOut(ingredientsCopy);
    } else {
      this.setState(
        {
          Message: true,
          MessageText: "No  " + igKey + " To Remove ",
        }
      );
    }

    this.setState({ ingredients: ingredientsCopy });
    const newIngredsValues = Object.values({ ...ingredientsCopy });
    console.log(newIngredsValues);
    const newIngredsLength = newIngredsValues.reduce((total, currentValue) => {
      return total + currentValue;
    }, 0);
    console.log(newIngredsLength);
    if (newIngredsLength !== 0) {
      this.setState({ NoIngridient: false });
      console.log(this.state.NoIngridient)
    } else {
      this.setState({ NoIngridient: true, Purchasable: true });
      console.log(this.state.Purchasable)
    }
  }

  // ____end________

  ToggleMessage = () => {
    this.setState({ Message: false })
  }

  // ____end________

  OrderNowHandler = () => {
    this.setState({ OrderNow: true });
    console.log("OrderNowHandler" + this.state.OrderNow);
  }

  // ____end________

  CloseBackOrder = () => {
    this.setState({ OrderNow: false })
  }

  // ____end________

  sentOrder = () => {
    this.setState({ loading: true })
    const orderPost = {
      ingredients: this.state.ingredients,
      price: this.state.Price,
      customer: {
        name: 'bonheur jed',
        address: {
          street: 'Street1',
          postalcode: 'H4L1P5',
          country: 'Canada'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'Fastest'
    }
    instance.post('/orders.json', orderPost)
      .then(response => {
        this.setState({ loading: false, OrderNow: false });
      })
      .catch(error => {
        this.setState({ loading: false, OrderNow: false })
      });
  }

  // ____end________

  showSummary = (props) => {
    if (this.state.OrderNow) {
      if (this.state.loading) {
        return (<Spinner />)
      } else {
        return (
          <>
            <Summary
              listoforder={this.state.ingredients}
              SummaryPrice={this.state.Price.toFixed(2)}
              CancelOrder={this.CloseBackOrder}
              sentOrder={this.sentOrder}
            />
            <BackOrder toclose={this.CloseBackOrder} />
          </>
        )
      }

    }
  }

  // ____end________

  youCanCheckOut = (ingredients) => {
    const newIngredsValues = Object.values(ingredients);
    console.log(newIngredsValues);
    const newIngredsLength = newIngredsValues.reduce((total, currentValue) => {
      return total + currentValue;
    }, 0);
    console.log("newIngredsLength" + newIngredsLength)
    if (newIngredsLength !== 0) {
      this.setState({ Purchasable: false });
    }
  }

  // ____end________



  render() {
    const shows = this.showSummary();
    let humburger = this.state.error ? <p>Ingredient Can't be loaded ! </p> : <Spinner />;
    if (this.state.ingredients) {
      humburger = <Burger burgerIngredients={this.state.ingredients} />
    }
    return (
      <>
        {shows}
        {humburger}
        <div className={classes.BurgerContols}>
          <Message messageEmpty={this.state.Message}>
            {this.state.MessageText}
            <img onClick={this.ToggleMessage} className={classes.Icon} src={closeItem} alt="close" />
          </Message>
          <div className={classes.TotalPrice}>Total: {(this.state.Price.toFixed(2))}$ </div>
          <BurgerControls
            removeIngredient={this.removeIngredientHandler}
            addIngredient={this.addIngredientHandler}
            disable={this.state.Message}
            zeroIngredient={this.state.NoIngridient}
          />
          <OrderNow goCheckout={this.state.Purchasable} checkoutNow={this.OrderNowHandler} />

        </div>
      </>
    )
  }
}

export default ErrorHandler(BurgerBuilder, instance);