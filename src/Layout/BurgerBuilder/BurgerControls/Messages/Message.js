import React from 'react';
import classes from './Message.module.css'

const Message = (props) => {
 return (
  <div>
   <div className={props.messageEmpty ? classes.Message : classes.MessageHide}  >
    {props.children}
   </div>
  </div>
 )
}
export default Message;