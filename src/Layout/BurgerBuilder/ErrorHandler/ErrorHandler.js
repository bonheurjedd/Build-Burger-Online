
import React, { Component } from 'react';
import ErrorBase from '../ErrorBase/ErrorBase';
const ErrorHandler = (WrappedComponent, axios) => {

 return class extends Component {
  state = {
   error: null
  }
  componentDidMount() {
   axios.interceptors.request.use(req => {
    this.setState({ error: null });
    return req;
   })
   axios.interceptors.response.use(res => res, error => {
    this.setState({ error: error })

   });
  }
  closeErrorDisplayHandler = () => {
   this.setState({ error: null })
  }

  render() {


   return (
    <>
     <ErrorBase closeErrorDisplay={this.closeErrorDisplayHandler} display={!this.state.error} />
     <WrappedComponent  {...this.props} />
    </>
   );
  }

 }
}

export default ErrorHandler;