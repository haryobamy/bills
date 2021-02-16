import React, { Component } from 'react';




class Profileheader extends Component {
    state = {  }
    render() { 
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
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/transaction">Transactions</a></li>
                    <li><a href="/sendmoney">Transfer</a></li>
                    <li><a href="/help">Help</a></li>
                  </ul>
                </div>
              </nav>
             
            </div>
            <div className="header-column justify-content-end"> 
             
              <nav className="login-signup navbar navbar-expand">
                <ul className="navbar-nav">
                <li className="align-items-center h-auto ml-sm-3"><a className="btn btn-success shadow-none d-none d-sm-block" href="/profile">Settings</a></li>
                  <li className="align-items-center h-auto ml-sm-3"><a className="btn btn-outline-primary shadow-none d-none d-sm-block" href="">Sign out</a></li>
                </ul>
              </nav>
              
            </div>
          </div>
        </div>
      </header>
     
      
      </div>
      
        );
    }
}
 
export default Profileheader;