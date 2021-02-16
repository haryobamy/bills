import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";



class SecNav extends Component {
    state = {  }
    render() { 
        return ( 

            <div className="bg-primary">
                
        <div className="container d-flex justify-content-center">
          <ul className="nav secondary-nav">

  
            <li className="nav-item"> <a className="nav-link active" href="/profile">Account</a></li>
            <li className="nav-item"> <a className="nav-link"   href="/addcard">Cards & Bank Accounts</a></li>
            <li className="nav-item"> <a className="nav-link" href="profile-notifications.html">Notifications</a></li>
            
          </ul>
         
        </div>
      </div>
         );
    }
}
 
export default SecNav;