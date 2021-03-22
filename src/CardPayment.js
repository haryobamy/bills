import React, { useEffect, useState } from 'react';



const CardPayment = () =>{

    return(
        
        <section className="page-header page-header-text-light bg-secondary">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h1>Payment</h1>
              </div>
              <div className="col-md-4">
                <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                  <li><a href="index.html">Home</a></li>
                  <li className="active">Payment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
      <
      <div id="content">
        <div className="container">
          <div className="bg-light shadow-md rounded">
            <div className="row align-items-center p-4">
              <div className="col-md-6">
                <h2 className="text-primary d-flex align-items-center m-0"><span className="text-3 text-dark mr-1">Total Payable Amount: </span> $150</h2>
              </div>
              <div className="col-md-6">
                <p className="text-md-right pb-0 mb-0">Transaction ID: <span className="text-body">25246584</span></p>
              </div>
            </div>
            <hr className="m-0">
            <div className="p-4">
              <h3 className="text-6 mb-4">How would you like to pay?</h3>
              <div className="row">
                <div className="col-md-4 col-lg-3">
                  <ul className="nav nav-tabs flex-column" id="myTab" role="tablist">
                    <li className="nav-item"> <a className="nav-link active" id="first-tab" data-toggle="tab" href="#firstTab" role="tab" aria-controls="firstTab" aria-selected="true">Credit/Debit Card</a> </li>
                    <li className="nav-item"> <a className="nav-link" id="second-tab" data-toggle="tab" href="#secondTab" role="tab" aria-controls="secondTab" aria-selected="false">PayPal</a> </li>
                  </ul>
                </div>
                <div className="col-md-8 col-lg-9">
                  <div className="tab-content my-3" id="myTabContentVertical">
                    <div className="tab-pane fade show active" id="firstTab" role="tabpanel" aria-labelledby="first-tab">
                      <div className="row">
                        <div className="col-lg-8">
                          <form id="payment" method="post">
                            <div className="form-group">
                              <input type="text" className="form-control" data-bv-field="cardnumber" id="cardNumber" required placeholder="Card Number">
                            </div>
                            <div className="form-row">
                              <div className="col-lg-4">
                                <div className="form-group">
                                  <select className="custom-select" required="">
                                    <option value="">Expiry Month</option>
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="form-group">
                                  <select className="custom-select" required="">
                                    <option value="">Expiry Year</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                    <option>2020</option>
                                    <option>2021</option>
                                    <option>2022</option>
                                    <option>2023</option>
                                    <option>2024</option>
                                    <option>2025</option>
                                    <option>2026</option>
                                    <option>2027</option>
                                    <option>2028</option>
                                    <option>2029</option>
                                    <option>2030</option>
                                    <option>2031</option>
                                    <option>2032</option>
                                    <option>2033</option>
                                    <option>2034</option>
                                    <option>2035</option>
                                    <option>2036</option>
                                    <option>2037</option>
                                    <option>2038</option>
                                    <option>2039</option>
                                    <option>2040</option>
                                    <option>2041</option>
                                    <option>2042</option>
                                    <option>2043</option>
                                    <option>2044</option>
                                    <option>2045</option>
                                    <option>2046</option>
                                    <option>2047</option>
                                    <option>2048</option>
                                    <option>2049</option>
                                    <option>2050</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="form-group">
                                  <input type="text" className="form-control" data-bv-field="cvvnumber" id="cvvNumber" required placeholder="CVV Number">
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <input type="text" className="form-control" data-bv-field="cardholdername" id="cardHolderName" required placeholder="Card Holder Name">
                            </div>
                            <div className="form-group custom-control custom-checkbox">
                              <input id="save-card" name="savecard" className="custom-control-input" type="checkbox">
                              <label className="custom-control-label" for="save-card">Save my card Details.</label>
                            </div>
                            <button className="btn btn-primary" type="submit">Proceed to Payment</button>
                          </form>
                        </div>
                        <div className="col-lg-4 mt-lg-0 mt-4">
                          <p>We Accept:</p>
                          <ul className="payments-types mb-3">
                            <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="images/payment/visa.png" alt="visa" title="Visa"></a></li>
                            <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="images/payment/discover.png" alt="discover" title="Discover"></a></li>
                            <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="images/payment/american.png" alt="american express" title="American Express"></a></li>
                            <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="images/payment/mastercard.png" alt="discover" title="Discover"></a></li>
                          </ul>
                          <div className="card bg-light-3 p-3">
                            <p className="mb-2">We value your Privacy.</p>
                            <p className="text-1 mb-0">We will not sell or distribute your contact information. Read our <a href="#">Privacy Policy</a>.</p>
                            <hr>
                            <p className="mb-2">Billing Enquiries</p>
                            <p className="text-1 mb-0">Do not hesitate to reach our <a href="#">support team</a> if you have any queries.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="secondTab" role="tabpanel" aria-labelledby="second-tab">
                      <div className="row">
                        <div className="col-md-8"> <img className="img-fluid" src="images/paypal-logo.png" alt="Paypal Logo" title="Pay easily, fast and secure with PayPal.">
                          <p className="lead">Pay easily, fast and secure with PayPal.</p>
                          <p className="text-info mb-4"><i className="fas fa-info-circle"></i> You will be redirected to PayPal to complete your payment securely.</p>
                          <button className="btn btn-primary d-flex align-items-center" type="submit"><i className="fab fa-paypal fa-2x mr-2"></i> Pay via PayPal</button>
                        </div>
                        <div className="col-md-4 mt-md-0 mt-4">
                          <div className="card bg-light-3 p-3">
                            <p className="mb-2">We value your Privacy.</p>
                            <p className="text-1 mb-0">We will not sell or distribute your contact information. Read our <a href="#">Privacy Policy</a>.</p>
                            <hr>
                            <p className="mb-2">Billing Enquiries</p>
                            <p className="text-1 mb-0">Do not hesitate to reach our <a href="#">support team</a> if you have any queries.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    );
}

export default CardPayment;