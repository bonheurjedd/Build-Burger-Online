import React from 'react';
import classes from './Message.module.css'

const Message = (props) => {
 return (
  <div>
   <p className={props.messageEmpty ? classes.Message : classes.MessageHide}  >
    {props.children}
   </p>
  </div>
 )
}
export default Message;