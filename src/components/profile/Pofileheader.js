import React, { Component } from 'react';
import { Link } from 'react-router-dom';




const Profileheader = (props) => {
  const {handleLogout} = props;
        return ( 
            
            <div>
            <header id="header">
        <div className="container">
          <div className="header-row">
            <div className="header-column justify-content-start"> 
              
              <div className="logo"> <a className="d-flex" href="/" title=""><img src="images/logo.png" alt="Payyed" /></a> </div>
             
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header-nav"> <span></span><span></span><span></span></button>
              {/* <!-- Collapse Button end -->  */}
              
              
              <nav className="primary-menu navbar navbar-expand-lg">
                <div id="header-nav" className="collapse navbar-collapse">
                  <ul className="navbar-nav mr-auto">
                    <li> <Link to='/dashboard'> <a>Dashboard</a> </Link></li>
                    <li> <Link to='/transaction'><a>Transactions</a></Link></li>
                    <li> <Link to='/data'><a >Recharge & Bills Payments</a></Link></li>
                    <li> <Link to='/help'><a>Help</a></Link></li>
                  </ul>
                </div>
              </nav>
             
            </div>
            <div className="header-column justify-content-end"> 
             
              <nav className="login-signup navbar navbar-expand">
                <ul className="navbar-nav">
                <li className="align-items-center h-auto ml-sm-3"><a className="btn btn-success shadow-none d-none d-sm-block" href="/profile">Settings</a></li>
                  <li className="align-items-center h-auto ml-sm-3"><a className="btn btn-outline-primary shadow-none d-none d-sm-block" href="/" onClick={handleLogout}  >Sign out</a></li>
                </ul>
              </nav>
              
            </div>
          </div>
        </div>
      </header>
     
      
      </div>
      
        );
    }

 
export default Profileheader;