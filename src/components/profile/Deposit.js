import React, { useState, useEffect } from 'react';





const Deposit = () => {

    return(
        <>

<div class="bg-white">
    <div class="container d-flex justify-content-center">
      <ul class="nav secondary-nav alternate">
        <li class="nav-item"> <a class="nav-link active" href="/deposit">Deposit</a></li>
        <li class="nav-item"> <a class="nav-link" href="/withdraw">Withdraw</a></li>
      </ul>
    </div>
  </div>
        <div id="content" class="py-4">
    <div class="container">
      <h2 class="font-weight-400 text-center mt-3 mb-4">Deposit Money</h2>
      <div class="row">
        <div class="col-md-8 col-lg-6 col-xl-5 mx-auto">              
          <div class="bg-light shadow-sm rounded p-3 p-sm-4 mb-4"> 
        
        <form id="form-send-money" method="post">
          <div className="form-group">
            <label for="youSend">Amount</label>
            <div className="input-group">
              <div className="input-group-prepend"> <span className="input-group-text">₦</span> </div>
              <input type="text" className="form-control" data-bv-field="youSend" id="youSend" value="34,000" placeholder=""/>
            </div>
          </div>
          <div className="form-group">
            <label for="paymentMethod">Payment Method</label>
            <select id="cardType" className="custom-select" required="">
              <option value="">Select Payment Method</option>
              <option>Credit or Debit Cards</option>
              <option>Bank Accounts</option>
            </select>
          </div>
          <p className="text-muted mt-4">Transactions fees <span className="float-right d-flex align-items-center"><del>1.00 USD</del> <span className="bg-success text-1 text-white font-weight-500 rounded d-inline-block px-2 line-height-4 ml-2">Free</span></span></p>
          <hr/>
          <p className="font-weight-500">You'll deposit <span className="text-3 float-right">1,000.00 USD</span></p>
          <button className="btn btn-primary btn-block">Continue</button>
        </form>
        </div>
        </div>
      </div>
    </div>
  </div>
        </>



    );
}

export default Deposit;