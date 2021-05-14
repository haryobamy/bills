import axios from 'axios';
import React, { useEffect, useRef, useState, Component} from 'react';
import Footer from '../components/Footer';
import { useHistory, withRouter } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core';

// redux 
import { connect } from 'react-redux';
import { loginUser, signupUser} from '../redux/actions/userAction';
import PropTypes from 'prop-types';

import {useDispatch, useSelector} from "react-redux";
// import { validateLoginData } from '../util/Validators';





class Login extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      usermame : "",
      email: "",
      password: "",
      confirm_password: "",
      errors: {},
      messages:{}
      
    };
    
  }
 

  
 
  handleSignup = (e) => {
    e.preventDefault();
    
    const newUserData = {
      username:this.state.username,
      email: this.state.email,
      password: this.state.password,
      confirm_password:this.state.confirm_password,
      account_status:"1"
    }
    this.props.signupUser(newUserData, this.props.history)
    
 }

  handleLogin = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    // const {valid, messages} = validateLoginData(userData);
    // if(!valid) return (
    //   <div className="alert alert-danger" role="alert">
    //    {messages}
    //   </div>
    // );



      this.props.loginUser(userData, this.props.history)
      // window.location.reload(); // check functionaliy

  
 }



  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

  
    
    this.setState({[name] : value })
       
    // this.setState({[name] : value },
    //    () => { this.validateField([name], value) });
    
}


componentWillReceiveProps(nextProps) {
  // if (nextProps.user.isAuthenticated) {
  //   this.props.history.push("/profile"); // push user to dashboard when they login
  // }
if (nextProps.errors) {
    this.setState({
      errors: nextProps.errors
    });
  }
}







// componentDidMount() {
//   // If logged in and user navigates to Login page, should redirect them to dashboard
//   if (this.props.auth.isAuthenticated) {
//     this.props.history.push("/dashboard");
//   }
// }



  




// class Login extends Component {
//     constructor(props){
//       super(props)
//       this.state = {

//         email:'',
//         phonenumber:'',
//         password:'',
//         checked: false
//       }
//       this.handleChange = this.handleChange.bind(this)
//       // this.changePhonenumber = this.changePhonenumber.bind(this)
//       // this.changePassword = this.changePassword.bind(this)
//       this.handleCheck = this.handleCheck.bind(this)
//       this.signup = this.signup.bind(this)
//       this.signin = this.signin.bind(this)
//       console.log(props);
//       console.log(this.state);
//     }

   

    // handleChange = e => {
    //   this.setState ({ [e.target.name]: e.target.value});
    //   console.log({ [e.target.name]: e.target.value})
    
    // }

    // handleCheck = e  => {

    //   this.setState(() => ({
    //     checked: !this.state.checked
    //   }));
    //  console.log(this.state.checked,'checked');
    // }



    // signup = e => {
    //   e.preventDefault();

    //   const registered = {
    //     email:this.state.email,
    //     phonenumber:this.state.phonenumber,
    //     password:this.state.password
    //   }
    //   axios.post('http://localhost:4000/app/signup', registered)
    //   .then((response) => {
    //     //handle success
    //     console.log (response.data);
    //   window.location ='/profile'
    // })
    // .catch((error) => {
    //   //handle error
    //   console.log(error)
    // })
    // }

    // signin = e => {
    //   e.preventDefault();
    //   const userData =  {
    //     email:this.state.email,
    //     password:this.state.password
    //   }
    //   axios.post(`http://localhost:4000/app/login`, userData)
    //   .then((response) => {

    //     localStorage.setItem('token', response.userData.token);
    //     //handle success
    //     const data = response.data
    //     console.log(data)
      
    //     console.log(response.data)
    //     window.location = '/dashboard'
    //   })
    //   .catch((error) => {
    //     //handle error
    //     console.log(error)
    //   })
    // }

    render() { 

      const { user: { loading } } = this.props;

      const { errors } = this.state;
        return ( 
          <>
          

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
                  <form id="loginForm" >
                  <div className="panel panel-default">
                        
                      </div>
                    <div className='form-group'>
                    <label htmlFor="email">Email address</label>
                      <input type="email" className="form-control"  required id="email"  name='email'  placeholder="Mobile or Email ID" value={this.state.email} onChange={this.handleChange}/>
                      <p className='errorMsg ' style={{color:'red', textTransform:'capitalize'}}>{errors.email}</p>
                      <p className='errorMsg ' style={{color:'red', textTransform:'capitalize'}}>{errors.error}</p>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                      <input type="password" className="form-control" id="Password"  name='password' placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                      <p className='errorMsg' style={{color:'red',textTransform:'capitalize'}}>{errors.message}</p>
                    </div>
                    <div className="row mb-4">
                      <div className="col-sm">
                        <div className="form-check custom-control custom-checkbox">
                          <input id="remember-me" name="checked" className="custom-control-input" type="checkbox" />
                          <label className="custom-control-label" htmlFor="remember-me">Remember Me</label>
                        </div>
                      </div>
                      <div className="col-sm text-right"> <a className="justify-content-end" href="#">Forgot Password ?</a> </div>

                    </div>
                    {errors.message && errors (<p style={{color:'red', fontWeight:'bold',fontSize:'20px', textAlign:'center',textTransform:'capitalize'}} >{errors.message}</p>)}
                    <button className={`btn btn-${loading? "success":"primary" } btn-block` } type="button" onClick={this.handleLogin} >  {loading? (
                <CircularProgress size={20} />):"Login"}</button>
                    
                  </form>
                </div>
               
                <div className="tab-pane fade" id="signupPage" role="tabpanel" aria-labelledby="signup-page-tab">
                  <form id="signupForm" >

                  <div className="form-group">
                      <input type="text" className="form-control" id="username" required placeholder=" Enter a username" value={this.state.username} name='username'  onChange={this.handleChange} />
                      <p className='errorMsg ' style={{color:'red', textTransform:'capitalize'}}>{errors.username}</p>
                    </div>

                    <div className="form-group">
                      <input type="text" className="form-control" data-bv-field="number" id="signupEmail" name='email' required placeholder="Email " value={this.state.email} onChange={this.handleChange}  />
                      <p className='errorMsg ' style={{color:'red', textTransform:'capitalize'}}>{errors.email}</p>
                    </div>
                    
                    <div className="form-group">
                      <input type="password" className="form-control" id="signuploginPassword" required placeholder="Password" name='password' value={this.state.password} onChange={this.handleChange}  />
                      <p className='errorMsg ' style={{color:'red', textTransform:'capitalize'}}>{errors.password}</p>
                    </div>

                    <div className="form-group">
                      <input type="password" className="form-control" id="signuploginconfirm_password" required placeholder="Confirm Password" name='confirm_password' value={this.state.confirm_password} onChange={this.handleChange}  />
                      <p className='errorMsg ' style={{color:'red', textTransform:'capitalize'}}>{errors.confirm_password}</p>
                    </div>
                    <button className="btn btn-primary btn-block" disabled={loading} type="button" onClick={this.handleSignup}  > {loading? (
                <CircularProgress size={20} />):"Signup"}</button>
                  </form>
                </div>
                {/* </>
                 )} */}
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
                    <button type="button" className="btn btn-block btn-outline-danger"  >Login with Google</button>
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

    Login.propTypes = {
          // classes:PropTypes.object.isRequired
          loginUser: PropTypes.func.isRequired,
          user: PropTypes.object.isRequired,
          UI: PropTypes.object.isRequired,
          signupUser: PropTypes.func.isRequired,
    
        };


    const mapStateToProps = (state) => ({
      user: state.user,
      errors: state.errors
    });

    const mapActionToProps = {
      loginUser,
      signupUser
    }


    
 
export default connect(mapStateToProps, mapActionToProps)(withRouter(Login));