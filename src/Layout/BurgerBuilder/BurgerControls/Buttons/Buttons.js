import React from 'react';
import classes from './Buttons.module.css'

const Buttons = (props) => {
 return (
  <div className={[classes['Buttons'], classes[props.btnType]].join(' ')}>{props.children}</div>
 )
}
export default Buttons;