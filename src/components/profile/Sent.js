import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import Profileheader from './Pofileheader';
import Profilefooter from './Profilefooter';

import ReactNotification from 'react-notifications-component';
import {store} from 'react-notifications-component';
import 'animate.css';
import 'react-notifications-component/dist/theme.css'
// import { NotifyHandler, NotifyComponent } from 'react-notification-component';



const Sent =()=> {

      const notification = () => {
        store.addNotification({
          title: "Wonderful!",
          message: "teodosii@react-notifications-component",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        })
      }
    
        return ( 
          <>

          
            <div>

            <div className="bg-primary">
            <div className="container d-flex justify-content-center">
              <ul className="nav secondary-nav">
                <li className="nav-item"> <a className="nav-link active" href="send-money.html">Send</a></li>
              </ul>
            </div>
          </div>
        
          <div id="content" className="py-4">
            <div className="container">
              <h2 className="font-weight-400 text-center mt-3 mb-4">Send Money</h2>
              <div className="row">
                <div className="col-md-8 col-lg-6 col-xl-5 mx-auto">
                  
                  <div className="bg-light shadow-sm rounded p-3 p-sm-4 mb-4">
                  <div className="text-center my-5">
                  <p className="text-center text-success text-20 line-height-07"><i className="fas fa-check-circle"></i></p>
                  <p className="text-center text-success text-8 line-height-07">Success!</p>
                  <p className="text-center text-4">Transactions Complete</p>
                  </div>
                  <p className="text-center text-3 mb-4">You've Succesfully sent <span className="text-4 font-weight-500">$1000</span> to <span className="font-weight-500">demo@gmail.com</span>, See transaction details under <a href="#">Activity</a>.</p>
                    <button className="btn btn-primary btn-block" onClick={notification}>Send Money Again</button>
                    <button className="btn btn-link btn-block"><i className="fas fa-print"></i> Print</button> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <Profilefooter />
          </>
         );
    }

 
export default Sent;