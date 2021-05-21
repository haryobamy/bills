import React, { useState,useEffect } from 'react';

import moment from 'moment'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

const TransactionMin = (props) => {

    const [historys, setHistorys] = useState('');
    const [offset, setOffset] = useState(0);
    const [perPage, setPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState([]);
    const [pageCount, setPageCount] = useState('');
    const [product_name, setProduct_name] = useState('');
    const [amount, setAmount] = useState('')
    

    const {   } = props;



    const handleTranscation = (e) => {
  
        const url = 'https://desolate-shore-36733.herokuapp.com/api/get-history'
       
        axios.get( url)
        .then((response) => {
          //handle success
          const data = response.data.transaction
       
                  const slice = data.slice(offset, offset + perPage)

                   setHistorys(slice)
          
        setPageCount(Math.ceil(data.length / perPage))
          console.table(slice)
          console.table(data)
        
      })
      .catch((error) => {
        //handle error
        
        console.log(error)
      })
    
    }


   


    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * perPage;
    
        setCurrentPage(selectedPage);
        setOffset(offset);
        
         handleTranscation();
    
    };
   
    
    useEffect(() => {
      handleTranscation();  
    }, [])

    return (
        <>
        <TransactionWrapper >
           <div className="transaction-list">
            {
               historys && historys.map(history =>  <div className="transaction-item px-4 py-3" data-toggle="modal" data-target="#transaction-detail" key={history.id} value={history.id} >
            
            {/* <div className="transaction-item px-4 py-3" data-toggle="modal" data-target="#transaction-detail"> */}
            <div className="row align-items-center flex-row">
            <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 font-weight-300"></span>
            {moment(history.created_at).format("Do MMMM YYYY")}
            
        {/* <span className="d-block text-1 font-weight-300 text-uppercase">APR</span>  */}
        </div>
            <div className="col col-sm-7"> <span className="d-block text-4">HDFC Bank  </span> <span className="text-muted">{history.product_name}</span> </div>
           <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> {history.status = 'delivered' ? (<span className="text-success" data-toggle="tooltip" data-original-title="Completed"><i className="fa fa-check-circle"></i></span>) : (<span className="text-danger" data-toggle="tooltip" data-original-title="Cancelled"><i className="fa fa-times-circle"></i></span>)}  </div>
                  <div className="col-3 col-sm-2 text-right text-4"> <span className="text-nowrap">-  {new Intl.NumberFormat("en-US", { style: "currency",
                      currency: "NGN"}).format(history.amount)}</span>  </div>
            </div>
             </div>
            )
            }
            </div>
            {/* <div className="transaction-list">
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
            </div> */}
            {/* <!-- Transaction List End -->
            
            <!-- Transaction Item Details Modal
            =========================================== --> */}
                {historys && historys.map(history => <div id="transaction-detail" key={history.id} value={history.id} className="modal fade" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered transaction-details" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="row no-gutters">
                    <div className="col-sm-5 d-flex justify-content-center bg-primary rounded-left py-4">
                        <div className="my-auto text-center">
                        <div className="text-17 text-white my-3"><i className="fa fa-building"></i></div>
                        <h3 className="text-4 text-white font-weight-400 my-3" >{history.product_name}</h3>
                        <div className="text-8 font-weight-500 text-white my-4">{history.amount}</div>
                        <p className="text-white"> {moment(history.created_at).format("Do MMMM YYYY")}</p>
                          </div>
                          </div>
                          <div className="col-sm-7">
                        <h5 className="text-5 font-weight-400 m-3">Transaction Details
                          <button type="button" className="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                        </h5>
                        <hr/>
                        <div className="px-3">
                          <ul className="list-unstyled">
                            <li className="mb-2">Payment Amount <span className="float-right text-3">₦ {history.amount}</span></li>
                            <li className="mb-2">Fee <span className="float-right text-3">₦ 0.00</span></li>
                          </ul>
                          <hr className="mb-2"/>
                          <p className="d-flex align-items-center font-weight-500 mb-4">Total Amount <span className="text-3 ml-auto">₦ {history.amount}</span></p>
                          <ul className="list-unstyled">
                            <li className="font-weight-500">Paid By:</li>
                            <li className="text-muted">Envato Pty Ltd</li>
                          </ul>
                          <ul className="list-unstyled">
                            <li className="font-weight-500">Transaction ID:</li>
                            <li className="text-muted">{history.transactionId}</li>
                          </ul>
                          <ul className="list-unstyled">
                            <li className="font-weight-500">Description:</li>
                            <li className="text-muted">{history.product_name} Purchased On The {moment(history.created_at).format("Do MMMM YYYY")}</li>
                          </ul>
                          <ul className="list-unstyled">
                            <li className="font-weight-500">Status:</li>
                          {history.status = 'delivered' ? (<li className="text-muted">Completed</li>) : (<li className="text-muted">Uncompleted</li>)}
                            
                          </ul>
                        </div>
                      </div>
                          
                      </div>
                      </div>
                      </div>
                  </div>
                </div>
                )} 


                <ReactPaginate
                 
                 previousLabel={<i className="fa fa-angle-left"></i>}
                 nextLabel={<i className="fa fa-angle-right"></i>}
                 breakLabel={"..."}
                 breakClassName={"break-me"}
                 pageCount={pageCount}
                 marginPagesDisplayed={1}
                 pageRangeDisplayed={3}
                 onPageChange={handlePageClick}
                 containerClassName={"pagination"}
                 subContainerClassName={"pages pagination"}
                 activeClassName={"active"}/>

</TransactionWrapper>
        </>
    )
}

const TransactionWrapper = styled.div`
    
.pagination {
  margin-top: 40px;
  display: flex;
  list-style: none;
  
  outline: none;
  justify-content:center
}
.pagination > .active > a{
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
}
.pagination > li > a{
  // border: 1px solid #007bff;
  border: none;
  border-radius: 0.25rem;
  margin: 0 0.22rem;
  padding: 5px 10px;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  
}
.pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus{
  background-color: #007bff;
  border-color: #007bff;
  outline: none ;
}
.pagination > li > a, .pagination > li > span{
  color: #007bff
}
.pagination > li:first-child > a, .pagination > li:first-child > span, .pagination > li:last-child > a, .pagination > li:last-child > span{
  border-radius: unset
}
`


export default TransactionMin
