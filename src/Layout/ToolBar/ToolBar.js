import React, { Component } from 'react';
import classes from './ToolBarStyle.module.css';
import logo from '../Assets/images/burger-logo.png'
import BackOrder from '../BurgerBuilder/BackOrder/BackOrder';

class ToolBar extends Component {
 state = {
  BackOrderToggle: false
 }
 showBackorder = () => {
  this.setState({ BackOrderToggle: true });
 }
 hideBackorder = () => {
  this.setState({ BackOrderToggle: false });
  console.log("ajljdhfljahdk")
 }
 render() {
  let shower = null;
  if (this.state.BackOrderToggle) {
   shower = <BackOrder />
  }
  return (
   <>
    <div onClick={this.hideBackorder}>
     {shower}
    </div>
    <div className={classes.ToolbarWrapper}>
     <div onClick={this.showBackorder} className={classes.OnlyMobile}>
      <span></span>
      <span></span>
      <span></span>
     </div>
     <div className={classes.LogoWrapper}>
      <img alt="logo" src={logo} />
     </div>
     <div className={this.state.BackOrderToggle ? classes.Drawer : classes.NavWrapperDeskop}>
      <div className={this.state.BackOrderToggle ? classes.LogoWrapperMobile : classes.LogoWrapperMobileHide}>
       <img alt="logo" src={logo} />
      </div>
      <nav>
       <ul>
        <li>
         <a href="/">Build Burger</a>
        </li>
        <li>
         <a href="/">Checkout</a>
        </li>
       </ul>
      </nav>
     </div>
    </div>
   </>
  )
 }
}

export default ToolBar;