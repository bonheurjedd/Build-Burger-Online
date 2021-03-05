import React from 'react';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Checkout from './Checkout/Checkout';
import Toolbar from './ToolBar/ToolBar';
import { Route, Switch } from 'react-router-dom';
const Layout = () => {
 return (
  <>
   <Toolbar />
   <Switch>
    <Route path="/checkout" component={Checkout} />
    <Route path="/" exact component={BurgerBuilder} />
   </Switch>
  </>
 )
}

export default Layout;