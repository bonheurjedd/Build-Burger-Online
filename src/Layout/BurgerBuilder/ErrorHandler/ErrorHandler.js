
import React, { Component } from 'react';
import ErrorBase from '../ErrorBase/ErrorBase';
const ErrorHandler = (WrappedComponent, axios) => {

 return class extends Component {
  state = {
   error: null
  }


  componentDidMount() {
   this.reqInterceptor = axios.interceptors.request.use(req => {
    this.setState({ error: null });

    return req;
   })
   this.resInterceptor = axios.interceptors.response.use(res => res, error => {
    this.setState({ error: error })

    console.log(error + " if its there ")
   });
  }

  componentWillUnmount() {
   axios.interceptors.request.eject(this.reqInterceptor)
   axios.interceptors.response.eject(this.resInterceptor)
  }
  closeErrorDisplayHandler = () => {
   this.setState({ error: null })
  }

  render() {


   console.log(this.state.error + " if its there ")
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