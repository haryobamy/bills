// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';

// // import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import {BrowserRouter as  Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

import {SET_AUTHENTICATED, } from './redux/types'
import { getUserData, logoutUser, setCurrentUser} from './redux/actions/userAction';
import jwt_decode from 'jwt-decode';
import setAuthToken from './util/setAuthToken';



// const token = localStorage.FBIdToken;
//   if(token){
//     const decodedToken = jwtDecode(token)
    
//     console.log(decodedToken)
//     if(decodedToken.exp * 1000 < Date.now()){
//       window.location.href ='/login'
//      store.dispatch(logoutUser())
//     }else {
//       store.dispatch({ type : SET_AUTHENTICATED});
//       axios.defaults.headers.common['Authorization']=token
//       store.dispatch(getUserData())
//     }
//   }

// Check for token to keep user logged in
if (localStorage.jwtToken && localStorage.userInfo) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  const user = localStorage.userInfo;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  store.dispatch((getUserData(user)))
 
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "/login";
  }
}

 if(localStorage.user){
   const user = localStorage.userInfo;
    // getting user data
  store.dispatch((getUserData(user)))
 }








ReactDOM.render(

  <Provider store={store} >
  
    <Router >
    <App />
    </Router>
    </Provider>,
    
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
