import React from 'react';
import classes from './ErrorBase.module.css'
const ErrorBase = (props) => {
  return (
    <>
      <div className={props.display ? classes.ErroRHide : null}>
        <div onClick={props.closeErrorDisplay} className={classes.ErrorClass}>
          <div className={classes.ErrorInside}>
            Something didn't work !
      </div>
        </div>

      </div>
    </>
  );
}

export default ErrorBase;