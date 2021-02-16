import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link ,Redirect} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';



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



class App extends Component {
  state = {  }
  render()
   { 
    return ( 

      
  
           <React.Fragment>

              
    <Router>

   

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/mobile" component={Recharge} />
            <Route path="/data" component={Data} />
            <Route path="/electricity" component={Electricity} />
            <Route path="/cable" component={Cable} />
            <Route path="/education" component={Education} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route path="/faq" component={Faq} />
            <Route path="/support" component={Support} />
            <Route path="/contact" component={Contact} />
            <Route path="/profile" component={Myprofile} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/transaction" component={Transaction} />
            <Route path="/sendmoney" component={Sendmoney} />
            <Route path="/addcard" component={Addcard} />

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
}

export default App;
