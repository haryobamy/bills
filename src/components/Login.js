import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';

import Header from '../components/Header';




class Login extends Component {
    constructor(props){
      super(props)
      this.state = {

        email:'',
        phonenumber:'',
        password:'',
        checked: false
      }
      this.handleChange = this.handleChange.bind(this)
      // this.changePhonenumber = this.changePhonenumber.bind(this)
      // this.changePassword = this.changePassword.bind(this)
      this.handleCheck = this.handleCheck.bind(this)
      this.signup = this.signup.bind(this)
      this.signin = this.signin.bind(this)
      console.log(props);
      console.log(this.state);
    }

    // changeEmail(event) {
    //   this.setState({
    //     email:event.target.value
    //   })
    // }

    // changePhonenumber(event) {
    //   this.setState({
    //     phonenumber:event.target.value
    //   })
    // }

    // changePassword(event) {
    //   this.setState({
    //     password:event.target.value
    //   })
    // }

    handleChange = e => {
      this.setState ({ [e.target.name]: e.target.value});
    
    }

    handleCheck = e  => {

      this.setState(() => ({
        checked: !this.state.checked
      }));
     console.log(this.state.checked,'checked');
    }



    signup = e => {
      e.preventDefault();

      const registered = {
        email:this.state.email,
        phonenumber:this.state.phonenumber,
        password:this.state.password
      }
      axios.post('http://localhost:4000/app/signup', registered)
      .then((response) => {
        //handle success
        console.log (response.data);
      window.location ='/profile'
    })
    .catch((error) => {
      //handle error
      console.log(error)
    })
    }

    signin = e => {
      e.preventDefault();
      const user =  {
        email:this.state.email,
        password:this.state.password
      }
      axios.post('http://localhost:4000/app/login', user)
      .then((response) => {
        //handle success
        console.log(response.data)
        window.location = '/dashboard'
      })
    }

    render() { 
        return ( 
          <>
          <Header />

                    <div>

            <section className="page-header page-header-text-light bg-secondary">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1>Login & Signup</h1>
          </div>
          <div className="col-md-4">
            
          </div>
        </div>
      </div>
    </section>

            <div className="container">
            <div id="login-signup-page" className="bg-light shadow-md rounded mx-auto p-4">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item"> <a id="login-page-tab" className="nav-link active text-4" data-toggle="tab" href="#loginPage" role="tab" aria-controls="login" aria-selected="true">Login</a> </li>
                <li className="nav-item"> <a id="signup-page-tab" className="nav-link text-4" data-toggle="tab" href="#signupPage" role="tab" aria-controls="signup" aria-selected="false">Sign Up</a> </li>
              </ul>
              <div className="tab-content pt-4">
                <div className="tab-pane fade show active" id="loginPage" role="tabpanel" aria-labelledby="login-page-tab">
                  <form id="loginForm" method="post" onSubmit = {this.signin}>
                    <div className="form-group">
                      <input type="email" className="form-control" id="loginMobile" name='email' required placeholder="Mobile or Email ID" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" id="loginPassword" name='password' required placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <div className="row mb-4">
                      <div className="col-sm">
                        <div className="form-check custom-control custom-checkbox">
                          <input id="remember-me" name="checked" className="custom-control-input" type="checkbox" onChange={this.handleCheck}
         value={this.state.checked}/>
                          <label className="custom-control-label" for="remember-me">Remember Me</label>
                        </div>
                      </div>
                      <div className="col-sm text-right"> <a className="justify-content-end" href="#">Forgot Password ?</a> </div>
                    </div>
                    <button className="btn btn-primary btn-block" type="submit" value='submit' >Login</button>
                  </form>
                </div>
                <div className="tab-pane fade" id="signupPage" role="tabpanel" aria-labelledby="signup-page-tab">
                  <form id="signupForm" method="post" onSubmit={this.signup} >
                    <div className="form-group">
                      <input type="text" className="form-control" data-bv-field="number" id="signupEmail" name='email' required placeholder="Email ID" value={this.state.email} onChange={this.handleChange}  />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" id="signupMobile" maxlength="10" required placeholder="Mobile Number" name='phonenumber' value={this.state.phonenumber} onChange={this.handleChange}  />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control" id="signuploginPassword" required placeholder="Password" name='password' value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <button className="btn btn-primary btn-block" type="submit" value='submit' >Signup</button>
                  </form>
                </div>
                <div className="d-flex align-items-center my-4">
                  <hr className="flex-grow-1"/>
                  <span className="mx-2">OR</span>
                  <hr className="flex-grow-1"/>
                </div>
                <div className="row">
                  <div className="col-12 mb-3">
                    <button type="button" className="btn btn-block btn-outline-primary">Login with Facebook</button>
                  </div>
                  <div className="col-12">
                    <button type="button" className="btn btn-block btn-outline-danger">Login with Google</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <Footer />
          </>
         );
    }
}
 
export default Login;