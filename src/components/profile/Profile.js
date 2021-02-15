import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link ,Redirect} from 'react-router-dom';
import Dashboard from '../profile/Dashboard';
import Myprofile from '../profile/Myprofile'



class Profile extends Component {
    state = {  }
    render() { 
        return ( 

                         <React.Fragment>
                      
                  <Router>
          
                    <div className="auth-wrapper">
                      <div className="auth-inner">
                        <Switch>
                          <Route exact path='/' component={Myprofile} />
                          <Route path="/dashboard" component={Dashboard} />
                          
                          {/* 
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
 
export default Profile;