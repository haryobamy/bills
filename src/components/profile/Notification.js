import React, { useState, useEffect } from 'react';
import Profileheader from './Pofileheader';
import axios from 'axios'
import Wallet from './Wallet';



const Notification = () =>  {
  const user = JSON.parse(localStorage.getItem('userInfo'));
  




 
     
        return (  
            <>
            


            <div>

            <div className="bg-secondary">
                
            <div className="container d-flex justify-content-center">
              <ul className="nav secondary-nav">
    
      
                <li className="nav-item"> <a className="nav-link " href="/profile">Profile</a></li>
                <li className="nav-item"> <a className="nav-link"   href="/addcard">Cards & Bank Accounts</a></li>
                <li className="nav-item"> <a className="nav-link active" href="/notification">Notifications</a></li>
                
              </ul>
             
            </div>
          </div>



            <div id="content" className="py-4">
    <div className="container">
      <div className="row"> 
        {/* <!-- Left Panel
        ============================================= --> */}
        <aside className="col-lg-3"> 
          
         <Wallet />
        </aside>
        {/* <!-- Left Panel End --> 
        
        <!-- Middle Panel
        ============================================= --> */}
        <div className="col-lg-9">
          
          {/* <!-- Notifications
          ============================================= --> */}
          <div className="bg-light shadow-sm rounded p-4 mb-4">
            <h3 className="text-5 font-weight-400">Notifications</h3>
            <p className="text-muted">Select subscriptions to be delivered to <span className="text-body">smithrhodes1982@gmail.com</span></p>
            <hr className="mx-n4"/>
            <form id="notifications" method="post">
              <div className="form-check custom-control custom-checkbox">
                <input id="announcements" name="notifications" className="custom-control-input" type="checkbox"/>
                <label className="custom-control-label text-3" for="announcements">Announcements</label>
                <p className="text-muted line-height-3 mt-2">Be the first to know about new features and other news.</p>
              </div>
              <hr className="mx-n4"/>
              <div className="form-check custom-control custom-checkbox">
                <input id="sendPayment" name="notifications" className="custom-control-input" type="checkbox"/>
                <label className="custom-control-label text-3" for="sendPayment">Send payment</label>
                <p className="text-muted line-height-3 mt-2">Send an email when I send a payment.</p>
              </div>
              <hr className="mx-n4"/>
              <div className="form-check custom-control custom-checkbox">
                <input id="receiveApayment" name="notifications" className="custom-control-input" type="checkbox"/>
                <label className="custom-control-label text-3" for="receiveApayment">Receive a payment</label>
                <p className="text-muted line-height-3 mt-2">Send me an email when I receive a payment.</p>
              </div>
              <hr className="mx-n4"/>
              <div className="form-check custom-control custom-checkbox">
                <input id="requestPayment" name="notifications" className="custom-control-input" type="checkbox"/>
                <label className="custom-control-label text-3" for="requestPayment">Request payment</label>
                <p className="text-muted line-height-3 mt-2">Send me an email when i request payment.</p>
              </div>
              <hr className="mx-n4"/>
              <div className="form-check custom-control custom-checkbox">
                <input id="problemWithPayment" name="notifications" className="custom-control-input" type="checkbox"/>
                <label className="custom-control-label text-3" for="problemWithPayment">Have a problem with a payment</label>
                <p className="text-muted line-height-3 mt-2">Send me an email when have a problem with a payment.</p>
              </div>
              <hr className="mx-n4"/>
              <div className="form-check custom-control custom-checkbox">
                <input id="specialOffers" name="notifications" className="custom-control-input" type="checkbox"/>
                <label className="custom-control-label text-3" for="specialOffers">Special Offers</label>
                <p className="text-muted line-height-3 mt-2">Receive last-minute offers from us.</p>
              </div>
              <hr className="mx-n4"/>
              <div className="form-check custom-control custom-checkbox">
                <input id="reviewSurveys" name="notifications" className="custom-control-input" type="checkbox"/>
                <label className="custom-control-label text-3" for="reviewSurveys">Review Surveys</label>
                <p className="text-muted line-height-3 mt-2">Share your payment experience to better inform users.</p>
              </div>
              <hr className="mx-n4"/>
              <button className="btn btn-primary mt-1" type="submit">Save Changes</button>
            </form>
          </div>
          {/* <!-- Notifications End -->  */}
          
        </div>
        {/* <!-- Middle Panel End -->  */}
      </div>
    </div>
  </div>
  </div>
  </>
        );
    }

 
export default Notification;