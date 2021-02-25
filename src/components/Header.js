import React, { Component } from 'react';










class Header extends Component {
  state = {  }
  render() { 
        return ( 

            <header id="header">
    <div className="container">
      <div className="header-row">
        <div className="header-column justify-content-start"> 
          
           {/* Logo */}
          <div className="logo"> <a href="index.html" title='bills'><img src="images/logo.png" alt="bills" width="127" height="29" /></a> </div>
           {/* Logo end */}
          
        </div>
        <div className="header-column justify-content-end"> 
          
         {/* Primary Navigation */}
          
          <nav className="primary-menu navbar navbar-expand-lg">
            <div id="header-nav" className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="dropdown active"> <a className="dropdown-toggle" href="/">Home</a>
                </li>
                <li className="dropdown"> <a className="dropdown-toggle" href="/mobile"> Recharge or Bill Payment</a>
                  
                </li>
                   
                <li className="login-signup ml-lg-2"><a className="pl-lg-4 pr-0" href="/login" title="Login / Sign up">Login / Sign up <span className="d-none d-lg-inline-block"><i className="fa fa-user"></i></span></a></li>
              </ul>
            </div>
          </nav>
          {/* <!-- Primary Navigation end -->  */}
          
        </div>
        
        {/* Collapse Button */}
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header-nav"> <span></span> <span></span> <span></span> </button>
      </div>
    </div>
  </header>
         );
    }
  }
 
export default Header;