import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Pofileheader';
import eva from  '../../assests/images/eva.jpg';
import Profilefooter from './Profilefooter';
import db from "../../fire";


import PropTypes from 'prop-types';
import { connect, useSelector,useDispatch } from 'react-redux';
import {getUserData, uploadImage} from '../../redux/actions/userAction';





const Dashboard = (props) => {

  const user = JSON.parse(localStorage.getItem('userInfo'));

  const [walletBalance, setWalletBalance] = useState('')


  const handleEditPicture = () => {
    const fileInput = document.getElementById('imageInput');
    fileInput.click();
  };
  const { handleImageChange  } = props;



  const getWalletBalance = () => {
    const params = {
      id : user.id
    }
    axios.get('https://desolate-shore-36733.herokuapp.com/api/get-wallet', params)
    .then(res => {
      const data = res.data.amount
      console.log(data)
      setWalletBalance(data)
      
    })
    .catch((err) => {
      // const data = err.response.data
      console.log(err)
    })
  }

console.log(walletBalance)



  useEffect(() => {
    getWalletBalance();
  }, [])

  


  // const  handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   const formData = new FormData();
  //   formData.append('image', file);
  //  props.uploadImage(formData);
  // };

  



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
          
           {/* Profile Details */}
         
          <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
            <div className="profile-thumb mt-3 mb-4"> <img className="rounded-circle" src={eva} alt=""/>
            <div className="profile-thumb-edit custom-file bg-secondary text-white" data-toggle="tooltip" title="Edit profile picture"> <i className="fa fa-camera position-absolute" onClick={handleEditPicture}  ></i>
                <input type="file" className="custom-file-input" id="imageInput" name="image" accept="image/*" multiple={false}  onChange={handleImageChange}/>
              </div>
            </div>
         
            <p className="text-3 font-weight-500 mb-2">Hello,{user.username} </p>
            <p className="mb-2"><a href="/profile" className="text-5 text-light" data-toggle="tooltip" title="Edit Profile"><i className=" fa fa-edit"></i></a></p>
            
          </div>
           {/* Profile Details End  */}
          
          {/* Available Balance */}
          
          <div className="bg-secondary shadow-sm rounded text-center p-3 mb-4">
            <div className="text-17 text-light my-3"><i className=" fa fa-wallet"></i></div>
           { walletBalance != '' ?( <h3 className="text-9 font-weight-400">₦ {walletBalance}</h3>):( <h3 className="text-9 font-weight-400">₦ 13.00</h3>) }
            <p className="mb-2 text-muted opacity-8">Available Balance</p>
            <hr className="mx-n3"/>
            <div className="d-flex"><a href="#" className="btn-link mr-auto">Withdraw</a> <a href="/deposit" className="btn-link ml-auto">Deposit</a></div>
          </div>
          {/* Available Balance End */}
          
         {/* Need Help? */}
          
          <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
            <div className="text-17 text-light my-3"><i className="fa fa-comments"></i></div>
            <h3 className="text-3 font-weight-400 my-4">Need Help?</h3>
            <p className="text-muted opacity-8 mb-4">Have questions or concerns regrading your account?<br/>
              Our experts are here to help!.</p>
            <a href="#" className="btn btn-primary btn-block">Contact Us</a> 
          </div>
           {/* Need Help? End */}
          
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
            
             {/* Title */}
            
            <div className="transaction-title py-2 px-4">
              <div className="row">
                <div className="col-2 col-sm-1 text-center"><span className="">Date</span></div>
                <div className="col col-sm-7">Description</div>
                <div className="col-auto col-sm-2 d-none d-sm-block text-center">Status</div>
                <div className="col-3 col-sm-2 text-right">Amount</div>
              </div>
            </div>
            {/* <!-- Title End -->
            
            <!-- Transaction List
            =============================== --> */}
            <div className="transaction-list">
              <div className="transaction-item px-4 py-3" data-toggle="modal" data-target="#transaction-detail">
                <div className="row align-items-center flex-row">
                  <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 font-weight-300">16</span> <span className="d-block text-1 font-weight-300 text-uppercase">APR</span> </div>
                  <div className="col col-sm-7"> <span className="d-block text-4">HDFC Bank</span> <span className="text-muted">Withdraw to Bank account</span> </div>
                  <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-warning" data-toggle="tooltip" data-original-title="In Progress"><i className="fa fa-ellipsis-h"></i></span> </div>
                  <div className="col-3 col-sm-2 text-right text-4"> <span className="text-nowrap">- $562</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                </div>
              </div>
              <div className="transaction-item px-4 py-3" data-toggle="modal" data-target="#transaction-detail">
                <div className="row align-items-center flex-row">
                  <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 font-weight-300">15</span> <span className="d-block text-1 font-weight-300 text-uppercase">APR</span> </div>
                  <div className="col col-sm-7"> <span className="d-block text-4">Envato Pty Ltd</span> <span className="text-muted">Payment Received</span> </div>
                  <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-success" data-toggle="tooltip" data-original-title="Completed"><i className="fa fa-check-circle"></i></span> </div>
                  <div className="col-3 col-sm-2 text-right text-4"> <span className="text-nowrap">+ $562</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                </div>
              </div>
              <div className="transaction-item px-4 py-3" data-toggle="modal" data-target="#transaction-detail">
                <div className="row align-items-center flex-row">
                  <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 font-weight-300">04</span> <span className="d-block text-1 font-weight-300 text-uppercase">APR</span> </div>
                  <div className="col col-sm-7"> <span className="d-block text-4">HDFC Bank</span> <span className="text-muted">Withdraw to Bank account</span> </div>
                  <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-success" data-toggle="tooltip" data-original-title="Completed"><i className="fa fa-check-circle"></i></span> </div>
                  <div className="col-3 col-sm-2 text-right text-4"> <span className="text-nowrap">- $106</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                </div>
              </div>
              <div className="transaction-item px-4 py-3" data-toggle="modal" data-target="#transaction-detail">
                <div className="row align-items-center flex-row">
                  <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 font-weight-300">28</span> <span className="d-block text-1 font-weight-300 text-uppercase">MAR</span> </div>
                  <div className="col col-sm-7"> <span className="d-block text-4">Patrick Cary</span> <span className="text-muted">Refund</span> </div>
                  <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-success" data-toggle="tooltip" data-original-title="Completed"><i className="fa fa-check-circle"></i></span> </div>
                  <div className="col-3 col-sm-2 text-right text-4"> <span className="text-nowrap">+ $60</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                </div>
              </div>
              <div className="transaction-item px-4 py-3" data-toggle="modal" data-target="#transaction-detail">
                <div className="row align-items-center flex-row">
                  <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 font-weight-300">28</span> <span className="d-block text-1 font-weight-300 text-uppercase">MAR</span> </div>
                  <div className="col col-sm-7"> <span className="d-block text-4">Patrick Cary</span> <span className="text-muted">Payment Sent</span> </div>
                  <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-danger" data-toggle="tooltip" data-original-title="Cancelled"><i className="fa fa-times-circle"></i></span> </div>
                  <div className="col-3 col-sm-2 text-right text-4"> <span className="text-nowrap">- $60</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                </div>
              </div>
              <div className="transaction-item px-4 py-3" data-toggle="modal" data-target="#transaction-detail">
                <div className="row align-items-center flex-row">
                  <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 font-weight-300">16</span> <span className="d-block text-1 font-weight-300 text-uppercase">FEB</span> </div>
                  <div className="col col-sm-7"> <span className="d-block text-4">HDFC Bank</span> <span className="text-muted">Withdraw to Bank account</span> </div>
                  <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-success" data-toggle="tooltip" data-original-title="Completed"><i className="fa fa-check-circle"></i></span> </div>
                  <div className="col-3 col-sm-2 text-right text-4"> <span className="text-nowrap">- $1498</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                </div>
              </div>
              <div className="transaction-item px-4 py-3" data-toggle="modal" data-target="#transaction-detail">
                <div className="row align-items-center flex-row">
                  <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 font-weight-300">15</span> <span className="d-block text-1 font-weight-300 text-uppercase">FEB</span> </div>
                  <div className="col col-sm-7"> <span className="d-block text-4">Envato Pty Ltd</span> <span className="text-muted">Payment Received</span> </div>
                  <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-success" data-toggle="tooltip" data-original-title="Completed"><i className="fa fa-check-circle"></i></span> </div>
                  <div className="col-3 col-sm-2 text-right text-4"> <span className="text-nowrap">+ $1498</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                </div>
              </div>
            </div>

            {/* <!-- Transaction List End -->


            <!-- Transaction Item Details Modal
            =========================================== --> */}
            <div id="transaction-detail" className="modal fade" role="dialog" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered transaction-details" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="row no-gutters">
                      <div className="col-sm-5 d-flex justify-content-center bg-primary rounded-left py-4">
                        <div className="my-auto text-center">
                          <div className="text-17 text-white my-3"><i className="fa fa-building"></i></div>
                          <h3 className="text-4 text-white font-weight-400 my-3">Envato Pty Ltd</h3>
                          <div className="text-8 font-weight-500 text-white my-4">$557.20</div>
                          <p className="text-white">15 March 2019</p>
                        </div>
                      </div>
                      <div className="col-sm-7">
                        <h5 className="text-5 font-weight-400 m-3">Transaction Details
                          <button type="button" className="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                        </h5>
                        <hr/>
                        <div className="px-3">
                          <ul className="list-unstyled">
                            <li className="mb-2">Payment Amount <span className="float-right text-3">$562.00</span></li>
                            <li className="mb-2">Fee <span className="float-right text-3">-$4.80</span></li>
                          </ul>
                          <hr className="mb-2"/>
                          <p className="d-flex align-items-center font-weight-500 mb-4">Total Amount <span className="text-3 ml-auto">$557.20</span></p>
                          <ul className="list-unstyled">
                            <li className="font-weight-500">Paid By:</li>
                            <li className="text-muted">Envato Pty Ltd</li>
                          </ul>
                          <ul className="list-unstyled">
                            <li className="font-weight-500">Transaction ID:</li>
                            <li className="text-muted">26566689645685976589</li>
                          </ul>
                          <ul className="list-unstyled">
                            <li className="font-weight-500">Description:</li>
                            <li className="text-muted">Envato March 2019 Member Payment</li>
                          </ul>
                          <ul className="list-unstyled">
                            <li className="font-weight-500">Status:</li>
                            <li className="text-muted">Completed</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Transaction Item Details Modal End -->
            
            <!-- View all Link
            =============================== --> */}
            <div className="text-center mt-4"><a href="transactions.html" className="btn-link text-3">View all<i className="fa fa-chevron-right text-2 ml-2"></i></a></div>
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
      user: state.user
     });



export default  connect(mapStateToProps)(Dashboard);
 
