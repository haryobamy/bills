import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link ,Redirect} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import bootstrap from "bootstrap";
import './App.css';



import Home from './components/Home';
import Footer from './components/Footer';
import Recharge from './components/Recharge';
import Header from './components/Header';
import Data from './components/Data';
import Electricity from './components/Electricity';
import Cable from './components/Cable';
import Education from './components/Education';
import Login from './components/Login';
import About from './components/About';
import Faq from './components/Faq';
import Support from './components/Support';
import Contact from './components/Contact';



class App extends Component {
  state = {  }
  render()
   { 
    return ( 

      
  
           <React.Fragment>

              <Header />
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
            <Footer />
    </React.Fragment>
    
  );
    }
}

export default App;
