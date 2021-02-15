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
              
              <div className="logo"> <a className="d-flex" href="index.html" title="Payyed - HTML Template"><img src="images/logo.png" alt="Payyed" /></a> </div>
             
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header-nav"> <span></span><span></span><span></span></button>
              {/* <!-- Collapse Button end -->  */}
              
              
              <nav className="primary-menu navbar navbar-expand-lg">
                <div id="header-nav" className="collapse navbar-collapse">
                  <ul className="navbar-nav mr-auto">
                    <li><a href="dashboard.html">Dashboard</a></li>
                    <li><a href="transactions.html">Transactions</a></li>
                    <li><a href="send-money.html">Send/Request</a></li>
                    <li><a href="help.html">Help</a></li>
                    <li className="dropdown"> <a className="dropdown-toggle" href="#">Features</a>
                      <ul className="dropdown-menu">
                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Headers</a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="index.html">Light Version (Default)</a></li>
                            <li><a className="dropdown-item" href="feature-header-dark.html">Dark Version</a></li>
                            <li><a className="dropdown-item" href="feature-header-primary.html">Primary Version</a></li>
                            <li><a className="dropdown-item" href="index-2.html">Transparent Version</a></li>
                          </ul>
                        </li>
                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Navigation DropDown</a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="index.html">Light Version (Default)</a></li>
                            <li><a className="dropdown-item" href="feature-navigation-dropdown-dark.html">Dark Version</a></li>
                            <li><a className="dropdown-item" href="feature-navigation-dropdown-primary.html">Primary Version</a></li>
                          </ul>
                        </li>
                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Second Navigation</a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="send-money.html">Default Version</a></li>
                            <li><a className="dropdown-item" href="deposit-money.html">Alternate Version</a></li>
                          </ul>
                        </li>
                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Page Headers</a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="feature-page-header-left-alignment.html">Left Alignment</a></li>
                            <li><a className="dropdown-item" href="feature-page-header-center-alignment.html">Center Alignment</a></li>
                            <li><a className="dropdown-item" href="feature-page-header-light.html">Light Version</a></li>
                            <li><a className="dropdown-item" href="feature-page-header-dark.html">Dark Version</a></li>
                            <li><a className="dropdown-item" href="feature-page-header-primary.html">Primary Version</a></li>
                            <li><a className="dropdown-item" href="feature-page-header-custom-background.html">Custom Background</a></li>
                            <li><a className="dropdown-item" href="feature-page-header-custom-background-with-transparent-header.html">Custom Background 2</a></li>
                          </ul>
                        </li>
                        <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Footer</a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="index.html">Light Version Default</a></li>
                            <li><a className="dropdown-item" href="index-2.html">Alternate Version</a></li>
                            <li><a className="dropdown-item" href="feature-footer-dark.html">Dark Version</a></li>
                            <li><a className="dropdown-item" href="feature-footer-primary.html">Primary Version</a></li>
                          </ul>
                        </li>
                        <li><a className="dropdown-item" href="feature-layout-boxed.html">Layout Boxed</a></li>
                      </ul>
                    </li>
                    <li className="dropdown dropdown-mega"> <a className="dropdown-toggle" href="#">Pages</a>
                      <ul className="dropdown-menu">
                        <li>
                          <div className="dropdown-mega-content">
                            <div className="row">
                              <div className="col-lg-3"> <span className="sub-title">Homepage</span>
                                <ul className="dropdown-mega-submenu">
                                  <li><a className="dropdown-item" href="index.html">Home Version 1</a></li>
                                  <li><a className="dropdown-item" href="index-2.html">Home Version 2</a></li>
                                  <li><a className="dropdown-item" href="landing-page-send.html">Landing Page - Send</a></li>
                                  <li><a className="dropdown-item" href="landing-page-receive.html">Landing Page - Receive</a></li>
                                </ul>
                              </div>
                              <div className="col-lg-3"> <span className="sub-title">Account</span>
                                <ul className="dropdown-mega-submenu">
                                  <li><a className="dropdown-item" href="profile.html">My Profile</a></li>
                                  <li><a className="dropdown-item" href="profile-cards-and-bank-accounts.html">Cards & Bank Accounts</a></li>
                                  <li><a className="dropdown-item" href="profile-notifications.html">Notifications</a></li>
                                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Login</a>
                                    <ul className="dropdown-menu">
                                      <li><a className="dropdown-item" href="login.html">Login Page 1</a></li>
                                      <li><a className="dropdown-item" href="login-2.html">Login Page 2</a></li>
                                      <li><a className="dropdown-item" href="login-3.html">Login Page 3</a></li>
                                    </ul>
                                  </li>
                                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Signup</a>
                                    <ul className="dropdown-menu">
                                      <li><a className="dropdown-item" href="signup.html">Signup Page 1</a></li>
                                      <li><a className="dropdown-item" href="signup-2.html">Signup Page 2 </a></li>
                                      <li><a className="dropdown-item" href="signup-3.html">Signup Page 3 </a></li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-3"> <span className="sub-title">Dashboard</span>
                                <ul className="dropdown-mega-submenu">
                                  <li><a className="dropdown-item" href="dashboard.html">Dashboard</a></li>
                                  <li><a className="dropdown-item" href="transactions.html">Transactions</a></li>
                                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Send Money</a>
                                    <ul className="dropdown-menu">
                                      <li><a className="dropdown-item" href="send-money.html">Send Money</a></li>
                                      <li><a className="dropdown-item" href="send-money-confirm.html">Send Money Confirm</a></li>
                                      <li><a className="dropdown-item" href="send-money-success.html">Send Money Success </a></li>
                                    </ul>
                                  </li>
                                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Request Money</a>
                                    <ul className="dropdown-menu">
                                      <li><a className="dropdown-item" href="request-money.html">Request Money</a></li>
                                      <li><a className="dropdown-item" href="request-money-confirm.html">Request Money Confirm</a></li>
                                      <li><a className="dropdown-item" href="request-money-success.html">Request Money Success </a></li>
                                    </ul>
                                  </li>
                                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Deposit Money</a>
                                    <ul className="dropdown-menu">
                                      <li><a className="dropdown-item" href="deposit-money.html">Deposit Money</a></li>
                                      <li><a className="dropdown-item" href="deposit-money-confirm.html">Deposit Money Confirm</a></li>
                                      <li><a className="dropdown-item" href="deposit-money-success.html">Deposit Money Success </a></li>
                                    </ul>
                                  </li>
                                  <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Withdraw Money</a>
                                    <ul className="dropdown-menu">
                                      <li><a className="dropdown-item" href="withdraw-money.html">Withdraw Money</a></li>
                                      <li><a className="dropdown-item" href="withdraw-money-confirm.html">Withdraw Money Confirm</a></li>
                                      <li><a className="dropdown-item" href="withdraw-money-success.html">Withdraw Money Success </a></li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-3"> <span className="sub-title">Others</span>
                                <ul className="dropdown-mega-submenu">
                                  <li><a className="dropdown-item" href="about-us.html">About Us</a></li>
                                  <li><a className="dropdown-item" href="fees.html">Fees</a></li>
                                  <li><a className="dropdown-item" href="help.html">Help</a></li>
                                  <li><a className="dropdown-item" href="contact-us.html">Contact Us</a></li>
                                  <li><a className="dropdown-item" href="elements.html">Elements</a></li>
                                  <li><a className="dropdown-item" href="elements-2.html">Elements 2</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
             
            </div>
            <div className="header-column justify-content-end"> 
             
              <nav className="login-signup navbar navbar-expand">
                <ul className="navbar-nav">
                <li className="align-items-center h-auto ml-sm-3"><a className="btn btn-success shadow-none d-none d-sm-block" href="">Settings</a></li>
                  <li className="align-items-center h-auto ml-sm-3"><a className="btn btn-outline-primary shadow-none d-none d-sm-block" href="">Sign out</a></li>
                </ul>
              </nav>
              
            </div>
          </div>
        </div>
      </header>
     
      <div className="bg-primary">
        <div className="container d-flex justify-content-center">
          <ul className="nav secondary-nav">
            <li className="nav-item"> <a className="nav-link active" href="profile.html">Account</a></li>
            <li className="nav-item"> <a className="nav-link" href="profile-cards-and-bank-accounts.html">Cards & Bank Accounts</a></li>
            <li className="nav-item"> <a className="nav-link" href="profile-notifications.html">Notifications</a></li>
          </ul>
        </div>
      </div>
      </div>
      
        );
    }
}
 
export default Profileheader;