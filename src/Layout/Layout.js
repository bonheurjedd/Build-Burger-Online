import React from 'react';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Checkout from './Checkout/Checkout'
import Toolbar from './ToolBar/ToolBar';
const Layout = () => {
 return (
  <>
   <Toolbar />
   <BurgerBuilder />
   <Checkout />
  </>
 )
}

export default Layout;