import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Pofileheader';
import eva from  '../../assests/images/eva.jpg';
import Profilefooter from './Profilefooter';
import db from "../../fire";


import PropTypes from 'prop-types';
import { connect, useSelector,useDispatch } from 'react-redux';
import {getUserData, getWalletBalance} from '../../redux/actions/dataAction';
import Wallet from './Wallet';
import TransactionMin from './TransactionMin';





const Dashboard = (props) => {

  const user = JSON.parse(localStorage.getItem('userInfo'));

  const dispatch = useDispatch();


  // const handleEditPicture = () => {
  //   const fileInput = document.getElementById('imageInput');
  //   fileInput.click();
  // };
  // const { handleImageChange, data:{walletBalance}  } = props;
   const { handleImageChange  } = props;


  // useEffect(() => {
  //   dispatch(getWalletBalance());
  // }, []);

  


 

  



        return ( 
            <>
            

            <div>
            <div className="bg-secondary">
                
                <div className="container d-flex justify-content-center">
                  <ul className="nav secondary-nav">
        
          
                    <li className="nav-item"> <a className="nav-link " href="/profile">Profile</a></li>
                    <li className="nav-item"> <a className="nav-link"   href="/addcard">Cards & Bank Accounts</a></li>
                    <li className="nav-item"> <a className="nav-link" href="/notification">Notifications</a></li>
                    
                  </ul>
                 
                </div>
              </div>
                

                <div id="content" className="py-4">
    <div className="container">
      <div className="row">
        {/* Left Panel */}
        
        <aside className="col-lg-3">
          
          

           <Wallet  handleImageChange={handleImageChange} />
         
         
        </aside>
         {/* Left Panel End  */}
        
        {/* Middle Panel */}
        
        <div className="col-lg-9">
          
          {/* Profile Completeness */}
         
          <div className=" bg-light shadow-sm rounded p-4 mb-4" >
            <h3 className="text-5 font-weight-400 d-flex align-items-center mb-3">Profile Completeness <span className="bg-light-4 text-success rounded px-2 py-1 font-weight-400 text-2 ml-2">50%</span></h3>
            <div className=" bg-light-4 row profile-completeness">
              <div className="col-sm-6 col-md-3 mb-4 mb-md-0">
                <div className=" border rounded p-3 text-center"> <span className=" d-block text-10 text-light mt-2 mb-3"><i className=" fa fa-mobile-alt"></i></span> <span className={`text-5 d-block text-${user.phone?'success' : 'danger'} mt-4 mb-3`}><i className={`fa fa-${user.phone != null? 'check' : 'times'}-circle`}></i></span>
                {user.phone != null? (<p className="mb-0"> Mobile Added </p>): (<a className="btn-link stretched-link" href="#edit-phone" data-toggle="modal"> Add Mobile</a>)}
                  
                </div>
              </div>
              <div className="col-sm-6 col-md-3 mb-4 mb-md-0">
                <div className="border rounded p-3 text-center"> <span className="d-block text-10 text-light mt-2 mb-3"><i className=" fa fa-envelope"></i></span> <span className="text-5 d-block text-success mt-4 mb-3"><i className="fa fa-check-circle"></i></span>
                  <p className="mb-0">Email Added</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 mb-4 mb-sm-0">
                <div className="border rounded p-3 text-center"> <span className="d-block text-10 text-light mt-2 mb-3"><i className="fa fa-credit-card"></i></span> <span className="text-5 d-block text-light mt-4 mb-3"><i className="fa fa-circle "></i></span>
                  <p className="mb-0"><a className="btn-link stretched-link" href="#add-new-card-details" data-toggle="modal">Add Card</a></p>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="border rounded p-3 text-center"> <span className="d-block text-10 text-light mt-2 mb-3"><i className="fa fa-university"></i></span> <span className="text-5 d-block text-light mt-4 mb-3"><i className="fa fa-circle "></i></span>
                  <p className="mb-0"><a className="btn-link stretched-link" href=""  >Add Bank Account</a></p>
                </div>
              </div>
            </div>
          </div>
          {/* Profile Completeness End 
          
           Recent Activity */}
        
          <div className="bg-light shadow-sm rounded py-4 mb-4">
            <h3 className="text-5 font-weight-400 d-flex align-items-center px-4 mb-3">Recent Activity</h3>
            
          
            {/* <!-- Title End -->
            
            <!-- Transaction List
            =============================== --> */}

            <TransactionMin />
          
            {/* <!-- Transaction Item Details Modal End -->
            
            <!-- View all Link
            =============================== --> */}
            <div className="text-center mt-4"><a href="/transaction" className="btn-link text-3">View all<i className=" fa fa-chevron-right text-2 ml-2"></i></a></div>
            {/* <!-- View all Link End --> */}
            
          </div>
          {/* <!-- Recent Activity End --> */}
        </div>
        {/* <!-- Middle Panel End --> */}
      </div>
    </div>
  </div>

  {/* modal section*/}

  {/* <!-- Edit Details Modal
          ================================== --> */}
          <div id="edit-phone" className="modal fade " role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title font-weight-400">Phone</h5>
                  <button type="button" className="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                </div>
                <div className="modal-body p-4">
                  <form id="phone" method="post">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label for="mobileNumber">Mobile <span className="text-muted font-weight-500">(Primary)</span></label>
                          <input type="text" value="+1 202-555-0125" className="form-control" data-bv-field="mobilenumber" id="mobileNumber" required placeholder="Mobile Number"/>
                        </div>
                      </div>
                    </div>
                    <a className="btn-link text-uppercase d-flex align-items-center text-1 float-right mb-3" href="#"><span className="text-3 mr-1"><i className="fa fa-plus-circle"></i></span>Add another Phone</a>
                    <button className="btn btn-primary btn-block" type="submit">Save Changes</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Phone End -->*/}

          
             {/* <!-- Add New Card Details Modal
                  ================================== --> */}
                  <div id="add-new-card-details" className="modal fade" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title font-weight-400">Add a Card</h5>
                          <button type="button" className="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                        </div>
                        <div className="modal-body p-4">
                          <form id="addCard" method="post">
                            <div className="btn-group d-flex btn-group-toggle mb-3" data-toggle="buttons">
                              <label className="btn btn-outline-secondary btn-sm shadow-none w-100 active">
                                <input type="radio" name="options" id="option1" checked/>
                                Debit </label>
                              <label className="btn btn-outline-secondary btn-sm shadow-none w-100">
                                <input type="radio" name="options" id="option2"/>
                                Credit </label>
                            </div>
                            <div className="form-group">
                              <label for="cardType">Card Type</label>
                              <select id="cardType" className="custom-select" required="">
                                <option value="">Card Type</option>
                                <option>Visa</option>
                                <option>MasterCard</option>
                                <option>American Express</option>
                                <option>Discover</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label for="cardNumber">Card Number</label>
                              <input type="text" className="form-control" data-bv-field="cardnumber" id="cardNumber" required value="" placeholder="Card Number"/>
                            </div>
                            <div className="form-row">
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label for="expiryDate">Expiry Date</label>
                                  <input id="expiryDate" type="text" className="form-control" data-bv-field="expiryDate" required value="" placeholder="MM/YY"/>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label for="cvvNumber">CVV <span className="text-info ml-1" data-toggle="tooltip" data-original-title="For Visa/Mastercard, the three-digit CVV number is printed on the signature panel on the back of the card immediately after the card's account number. For American Express, the four-digit CVV number is printed on the front of the card above the card account number."><i className="fas fa-question-circle"></i></span></label>
                                  <input id="cvvNumber" type="password" className="form-control" data-bv-field="cvvnumber" required value="" placeholder="CVV (3 digits)"/>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <label for="cardHolderName">Card Holder Name</label>
                              <input type="text" className="form-control" data-bv-field="cardholdername" id="cardHolderName" required value="" placeholder="Card Holder Name"/>
                            </div>
                            <button className="btn btn-primary btn-block" type="submit">Add Card</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            <Profilefooter />
            </>
         );
    }

    Dashboard.propTypes = {
      user: PropTypes.object.isRequired,
    };

    const mapStateToProps = (state) => ({
      data: state.data,
      user: state.user
     });



export default  connect(mapStateToProps)(Dashboard);
 
