import React, { useState,useEffect } from 'react';
import Wallet from './Wallet';
import Profilefooter from './Profilefooter';
import moment from 'moment'
import ReactPaginate from 'react-paginate';
// import { addDays } from 'date-fns';
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { DateRange, DateRangePicker, Calendar, DefinedRange } from 'react-date-range';


import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { Switch } from 'react-router';
import TransactionMin from './TransactionMin';



const Transaction = () => {
  // const [startDate, setStartDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [historys, setHistorys] = useState('')
  const [amount, setAmount] = useState('')

 
 


  const handleDateChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };


  // const handlefilterSelect = (e) => {
    
  //   const {name,value} = e.target
  //   setFormData({
  //     ...formData, 
  //     [name]:value
  //   })
  //   console.log(name, value);
    
  //   console.log(e.target.value);
  //   setAmount(historys.filter(v => v.variation_code === value)?.variation_amount )

  // }


 


    
        return ( 

            <>
            
            

            <div id="content" className="py-4">
    <div className="container">
      <div className="row"> 
        
       
        <aside className="col-lg-3"> 
          
         <Wallet/>
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
                  {/* <div className="col-sm-6 col-md-5 form-group">
                    <input id="dateRange" type="text" className="form-control" placeholder="Date Range"/>
                    <span className="icon-inside"><i className="fa fa-calendar-alt"></i></span> 
                  </div> */}


                  <div className="col-sm-6 col-md-5 form-group">
                  <DatePicker
                          selected={startDate}
                          onChange={handleDateChange}
                          startDate={startDate}
                          endDate={endDate}
                          selectsRange
                          
                          width='40px'
                        /> 
                
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
            =============================== -->  */}
            <TransactionMin  />
           
          
              
            {/* <!-- Transaction Item Details Modal End -->
            
            <!-- Pagination
            ============================================= --> */}
            {/* <ul className="pagination justify-content-center mt-4 mb-0">
              <li className="page-item disabled"> <a className="page-link" href="#" tabindex="-1"><i className="fa fa-angle-left"></i></a> </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item active"> <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a> </li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item d-flex align-content-center flex-wrap text-muted text-5 mx-1">......</li>
              <li className="page-item"><a className="page-link" href="#">15</a></li>
              <li className="page-item"> <a className="page-link" href="#"><i className="fa fa-angle-right"></i></a> </li>
            </ul> */}

               
            {/* <!-- Paginations end -->  */}
            
          </div>
          {/* <!-- All Transactions End -->  */}
        </div>
        {/* <!-- Middle End -->  */}
      </div>
    </div>
  </div>
  
  <Profilefooter />
  </>
         );
    }
   
 
export default Transaction;