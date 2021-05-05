import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link ,Redirect, useHistory} from 'react-router-dom';
import fire from './fire';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import 'firebase/auth';

import Home from './components/Home';

import Data from './components/Data';
import Electricity from './components/Electricity';
import Cable from './components/Cable';
import Education from './components/Education';
import Login from './components/Login';
import About from './components/About';
import Faq from './components/Faq';
import Support from './components/Support';
import Contact from './components/Contact';
import Myprofile from './components/profile/Myprofile';
import Dashboard from './components/profile/Dashboard';
import Transaction from './components/profile/Transaction';
import Sendmoney from './components/profile/Sendmoney';
import Addcard from './components/profile/Addcard';
import Notification from './components/profile/Notification';
import Sent from './components/profile/Sent';
import Deposit from './components/profile/Deposit';
import AllNav from './components/AllNav';
import Profileheader from './components/profile/Pofileheader';
import Header from './components/Header';



import { signInWithGoogle } from './fire';
import AuthRoute from './util/AuthRoute';


import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import axios from 'axios';




const App = (props) => {
 
const history = useHistory()


const  handleImageChange = (event) =>{
  const image = event.target.files[0];
  const formData = new FormData();
  formData.append('image', image, image.name);

  console.log(formData)

  console.log(image)

  const token= localStorage.getItem('jwtToken');

  axios.post( "https://desolate-shore-36733.herokuapp.com/api/pic", formData,   {
    headers: {
      'Authorization': `Bearer ${token}`
    },
  })
  .then((res) => {
    const {user} = res.data;
    localStorage.setItem('userInfo', JSON.stringify(user));

    console.log(user)
    
  })
  .catch((err) => console.log(err));
}
  
 

  const { user: {isAuthenticated}  } = props;

 
   
    return ( 
       <>
       
       {
         isAuthenticated?(< Profileheader />):(<Header />)
       }
    
    <div className="auth-wrapper" id="main-wrapper" >
        <div className="auth-inner" >
        <Switch>

    { isAuthenticated? (
      <>
               <Route exact path='/' component={Home} />
               <Route path="/data" component={Data} />
               <Route path="/electricity" component={Electricity} />
               <Route path="/cable" component={Cable} />
               <Route path="/education" component={Education} />
               
               <Route path="/about" component={About} />
               <Route path="/faq" component={Faq} />
               <Route path="/support" component={Support} />
               <Route path="/contact" component={Contact} />
               
               <Route path="/profile" component=  {() => <Myprofile handleImageChange={handleImageChange}  />} />
               <Route path="/dashboard" component=  {() => <Dashboard  handleImageChange={handleImageChange}  />} />
               <Route path="/transaction" component={Transaction} />
               <Route path="/sendmoney" component={Sendmoney} />
               <Route path="/addcard" component={Addcard} />
               <Route path="/notification" component={Notification} />
               <Route path="/sent" component={Sent} />
               <Route path="/deposit" component={Deposit} />
               </>
             ):(
               <>

              <Route exact path='/' component={Home} />
               {/* <Route path="/mobile" component={Recharge} /> */}
               <Route path="/data" component={Data} />
               <Route path="/electricity" component={Electricity} />
               <Route path="/cable" component={Cable} />
               <Route path="/education" component={Education} />
               <Route path="/sendmoney" component={Sendmoney} />
               <Route path="/about" component={About} />
               <Route path="/faq" component={Faq} />
               <Route path="/support" component={Support} />
               <Route path="/contact" component={Contact} />
              <  Route path="/login" component=  {Login}   />
              {/* <Route path="/login" component=  {() => <Dashboard  handleLogin={handleLogin} }  />} /> */}
              {/* <Route path="/login" component=  {() => <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} handleSignup={handleSignup} hasAcount={hasAcount} setHasAcount={setHasAcount} emailError={emailError} passwordError={passwordError}  signInWithGoogle={signInWithGoogle} />} /> */}

              </>
             )}

          </Switch>
        </div>
      </div>
     
                
            
    </>
    
  );
    }



    App.propTypes = {
      user: PropTypes.object.isRequired,
    };

    const mapStateToProps = (state) => ({
      user: state.user
     });

export default  connect(mapStateToProps)(App);




  // const [emailError, setEmailError] = useState('');
  // const [passwordError, setPasswordError] = useState('');
  // const [hasPassword, setHasPassword] = useState('');
  // const [hasAcount, setHasAcount] = useState(false);
  // const [currentUser, setCurrentUser] = useState(null)



  // const  unsubscribeFromAuth = null;

  // const clearInputs = () =>{
  //   setEmail('');
  //   setPassword('');
  // }
  // const clearErrors = () =>{
  //   setEmailError('');
  //   setPasswordError('');
  // }

  // useEffect(() => {
  //    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
  //     setCurrentUser({ user });
  //   });
  //   return () => {
  //     unsubscribeFromAuth();
  //   }
  // }, [])




  
  

  // const { user: authenticated } = props;

  


 

  // const handleLogin = ({email, password}) => {
  //   // clearErrors();
  //   firebase
  //   .auth()
  //   .signInWithEmailAndPassword(email,password)
  //   .then(() => {
  //     history.push('/dashboard')
  //   } )
  //   .catch(err => {
  //     switch(err.code){
  //       case "auth/invalid-email":
  //         case "auth/user-disabled":
  //           case "auth/user-not-found":
  //             setEmailError(err.message);
  //             break;
  //             case "auth/wrong-password":
  //               setPasswordError(err.message);
  //               break;
  //     }
  //   })
  // }

  // const handleSignup = ({email, password}) =>{
  //   // clearErrors();
  //   firebase
  //   .auth()
  //   .createUserWithEmailAndPassword(email,password)
  //   .then(() => {
  //     history.push('/dashboard')
  //   } )
  //   .catch(err => {
  //     switch(err.code){
  //       case "auth/email-already-in-use":
  //         case "auth/invalid-email":
  //             setEmailError(err.message);
  //             break;
  //             case "auth/weak-password":
  //               setPasswordError(err.message);
  //               break;
  //     }
  //   })
  // }
  // const handleLogout = () => {
  //   firebase.auth().signOut().then(() => localStorage.clear() )

  // }


  

  // const authListener = () => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if(user){

  //       localStorage.setItem("user", JSON.stringify(user))
        
  //         // history.push('/dashboard')
      
  //       // clearInputs();
      
  //       setUser(user);
  //     } else{
  //       setUser("");
  //     }
  //   })
  // }
  // useEffect(() => {
  //     authListener();
  // },[]);
 
  

 