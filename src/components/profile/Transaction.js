import React, { Component } from 'react';
import Profileheader from './Pofileheader';


class Transaction extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Profileheader />

            <div id="content" className="py-4">
    <div className="container">
      <div className="row"> 
        
       
        <aside className="col-lg-3"> 
          
          {/* <!-- Profile Details
          =============================== --> */}
          <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
            <div className="profile-thumb mt-3 mb-4"> <img className="rounded-circle" src="images/profile-thumb.jpg" alt=""/>
              <div className="profile-thumb-edit custom-file bg-primary text-white" data-toggle="tooltip" title="Change Profile Picture"> <i className="fa fa-camera position-absolute"></i>
                <input type="file" className="custom-file-input" id="customFile"/>
              </div>
            </div>
            <p className="text-3 font-weight-500 mb-2">Hello, Smith Rhodes</p>
            <p className="mb-2"><a href="profile.html" className="text-5 text-light" data-toggle="tooltip" title="Edit Profile"><i className="fa fa-edit"></i></a></p>
          </div>
          {/* <!-- Profile Details End --> 
          
          <!-- Available Balance
          =============================== --> */}
          <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
            <div className="text-17 text-light my-3"><i className="fa fa-wallet"></i></div>
            <h3 className="text-9 font-weight-400">$2956.00</h3>
            <p className="mb-2 text-muted opacity-8">Available Balance</p>
            <hr className="mx-n3"/>
            <div className="d-flex"><a href="#" className="btn-link mr-auto">Withdraw</a> <a href="#" className="btn-link ml-auto">Deposit</a></div>
          </div>
          {/* <!-- Available Balance End --> 
          
          <!-- Need Help?
          =============================== --> */}
          <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
            <div className="text-17 text-light my-3"><i className="fa fa-comments"></i></div>
            <h3 className="text-3 font-weight-400 my-4">Need Help?</h3>
            <p className="text-muted opacity-8 mb-4">Have questions or concerns regrading your account?<br/>
              Our experts are here to help!.</p>
            <a href="#" className="btn btn-primary btn-block">Chate with Us</a> </div>
          {/* <!-- Need Help? End --> */}
          
        </aside>
        {/* <!-- Left Panel End -->
        
        <!-- Middle Panel
        ============================================= --> */}
        <div className="col-lg-9">
          
          <h2 className="font-weight-400 mb-3">Transactions</h2>
          
          {/* <!-- Filter
          ============================================= --> */}
          <div className="row">
            <div className="col mb-2">
              <form id="filterTransactions" method="post">
                <div className="form-row">
                  {/* <!-- Date Range
                  ========================= --> */}
                  <div className="col-sm-6 col-md-5 form-group">
                    <input id="dateRange" type="text" className="form-control" placeholder="Date Range"/>
                    <span className="icon-inside"><i className="fa fa-calendar-alt"></i></span> 
                  </div>
                  {/* <!-- All Filters Link
                  ========================= --> */}
                  <div className="col-auto d-flex align-items-center mr-auto form-group" data-toggle="collapse"> <a className="btn-link" data-toggle="collapse" href="#allFilters" aria-expanded="false" aria-controls="allFilters">All Filters<i className="fa fa-sliders-h text-3 ml-1"></i></a> </div>
                  {/* <!-- Statements Link
                  ========================= --> */}
                  <div className="col-auto d-flex align-items-center ml-auto form-group">
                    <div className="dropdown"> <a className="text-muted btn-link" href="#" role="button" id="statements" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-file-download text-3 mr-1"></i>Statements</a>
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="statements"> <a className="dropdown-item" href="#">CSV</a> <a className="dropdown-item" href="#">PDF</a> </div>
                    </div>
                  </div>
                  
                  {/* <!-- All Filters collapse
                  ================================ --> */}
                  <div className="col-12 collapse mb-3" id="allFilters">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="allTransactions" name="allFilters" className="custom-control-input" checked/>
                      <label className="custom-control-label" for="allTransactions">All Transactions</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="paymentsSend" name="allFilters" className="custom-control-input"/>
                      <label className="custom-control-label" for="paymentsSend">Payments Send</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="paymentsReceived" name="allFilters" className="custom-control-input"/>
                      <label className="custom-control-label" for="paymentsReceived">Payments Received</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="refunds" name="allFilters" className="custom-control-input"/>
                      <label className="custom-control-label" for="refunds">Refunds</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="withdrawal" name="allFilters" className="custom-control-input"/>
                      <label className="custom-control-label" for="withdrawal">Withdrawal</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio" id="deposit" name="allFilters" className="custom-control-input"/>
                      <label className="custom-control-label" for="deposit">Deposit</label>
                    </div>
                  </div>
                  {/* <!-- All Filters collapse End --> */}
                </div>
              </form>
            </div>
          </div>
          {/* <!-- Filter End -->
          
          <!-- All Transactions
          ============================================= --> */}
          <div className="bg-light shadow-sm rounded py-4 mb-4">
            <h3 className="text-5 font-weight-400 d-flex align-items-center px-4 mb-3">All Transactions</h3>
            {/* <!-- Title
            =============================== --> */}
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
            
            <!-- Pagination
            ============================================= --> */}
            <ul className="pagination justify-content-center mt-4 mb-0">
              <li className="page-item disabled"> <a className="page-link" href="#" tabindex="-1"><i className="fa fa-angle-left"></i></a> </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item active"> <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a> </li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item d-flex align-content-center flex-wrap text-muted text-5 mx-1">......</li>
              <li className="page-item"><a className="page-link" href="#">15</a></li>
              <li className="page-item"> <a className="page-link" href="#"><i className="fa fa-angle-right"></i></a> </li>
            </ul>
            {/* <!-- Paginations end -->  */}
            
          </div>
          {/* <!-- All Transactions End -->  */}
        </div>
        {/* <!-- Middle End -->  */}
      </div>
    </div>
  </div>
  </>
         );
    }
}
 
export default Transaction;