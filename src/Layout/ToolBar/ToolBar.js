import React from 'react';
import classes from './ToolBarStyle.module.css';
import logo from '../Assets/images/burger-logo.png'
const Toolbar = () => {
 return (
  <>
   <div className={classes.ToolbarWrapper}>
    <div className={classes.OnlyMobile}>
     <span></span>
     <span></span>
     <span></span>
    </div>
    <div className={classes.LogoWrapper}>
     <img src={logo} />
    </div>
    <div className={classes.NavWrapperDeskop}>
     <div className={classes.LogoWrapperMobile}>
      <img src={logo} />
     </div>
     <nav>
      <ul>
       <li>
        <a href="#">Build Burger</a>
       </li>
       <li>
        <a href="#">Checkout</a>
       </li>
      </ul>
     </nav>
    </div>
   </div>
  </>
 )
}

export default Toolbar;