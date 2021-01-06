import React from 'react';
import classes from './Buttons.module.css'

const Buttons = (props) => {
 return (
  <div className={classes.Buttons}>{props.children}</div>
 )
}
export default Buttons;