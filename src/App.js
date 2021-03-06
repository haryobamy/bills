import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link ,Redirect} from 'react-router-dom';
import fire from './fire';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import axios from 'axios';



import Home from './components/Home';
import Recharge from './components/Recharge';
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
import AllNav from './components/AllNav';
import Profileheader from './components/profile/Pofileheader';
import Header from './components/Header';


import { signInWithGoogle } from './fire';
import { auth } from './fire';


const App = () => {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasPassword, setHasPassword] = useState('');
  const [hasAcount, setHasAcount] = useState(false);
  const [currentUser, setCurrentUser] = useState(null)



  // const  unsubscribeFromAuth = null;

  const clearInputs = () =>{
    setEmail('');
    setPassword('');
  }
  const clearErrors = () =>{
    setEmailError('');
    setPasswordError('');
  }

  // useEffect(() => {
  //    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
  //     setCurrentUser({ user });
  //   });
  //   return () => {
  //     unsubscribeFromAuth();
  //   }
  // }, [])


 

  const handleLogin = () => {
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code){
        case "auth/invalid-email":
          case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
              case "auth/wrong-password":
                setPasswordError(err.message);
                break;
      }
    })
  }

  const handleSignup = () =>{
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code){
        case "auth/email-already-in-use":
          case "auth/invalid-email":
              setEmailError(err.message);
              break;
              case "auth/weak-password":
                setPasswordError(err.message);
                break;
      }
    })
  }
  const handleLogout = () => {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        clearInputs();
      
        setUser(user);
      } else{
        setUser("");
      }
    })
  }

  useEffect(() => {
      authListener();
  },[]);







   
    return ( 

      
  
           <React.Fragment>
             {user ? (
               <Profileheader handleLogout={handleLogout}/>
             ):(
               <Header/>
             )}
             {/* <AllNav  /> */} 
              
    <Router>

    <div className="auth-wrapper">
        <div className="auth-inner">
        <Switch>

    {user ? (
      <>
               <Route exact path='/' component={ () => <Home user={user} />} />
               {/* <Route path="/mobile" component={Recharge} /> */}
               <Route path="/data" component={Data} />
               <Route path="/electricity" component={Electricity} />
               <Route path="/cable" component={Cable} />
               <Route path="/education" component={Education} />
               
               <Route path="/about" component={About} />
               <Route path="/faq" component={Faq} />
               <Route path="/support" component={Support} />
               <Route path="/contact" component={Contact} />
               <Route path="/profile" component={Myprofile} />
               <Route path="/dashboard" component={ Dashboard} />
               <Route path="/transaction" component={Transaction} />
               <Route path="/sendmoney" component={Sendmoney} />
               <Route path="/addcard" component={Addcard} />
               <Route path="/notification" component={Notification} />
               <Route path="/sent" component={Sent} />
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
              <Route path="/login" component=  {() => <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} handleSignup={handleSignup} hasAcount={hasAcount} setHasAcount={setHasAcount} emailError={emailError} passwordError={passwordError}  signInWithGoogle={signInWithGoogle} />} />
              </>
             )}

      
          
            

            {/* 
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/verification" component={Verification} />
            {/* <Route path="/welcome" component={Welcome} /> */}
            
          </Switch>
        </div>
      </div>
     
    </Router>
            
    </React.Fragment>
    
  );
    }


export default App;
