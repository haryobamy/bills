import React, { Component } from 'react';
import Profileheader from './Pofileheader';



class Sendmoney extends Component {
    state = {  }
    render() { 
        return ( 


            <>
            <Profileheader/>

                
            <div id="content" className="py-4">
            <div className="container">
              <h2 className="font-weight-400 text-center mt-3">Send Money</h2>
              <p className="text-4 text-center mb-4">Send your money on anytime, anywhere in the world.</p>
              <div className="row">
                <div className="col-md-8 col-lg-6 col-xl-5 mx-auto">
                  <div className="bg-light shadow-sm rounded p-3 p-sm-4 mb-4">
                    <h3 className="text-5 font-weight-400 mb-3">Personal Details</h3>
                    {/* <!-- Send Money Form
                    ============================================= --> */}
                    <form id="form-send-money" method="post">
                      <div className="form-group">
                      <label for="firstName">Recipient</label>
                          <input type="text"  className="form-control" data-bv-field="firstName" id="firstName" required placeholder="Description e.g Ayo's Account"/>
                        </div>
                      <div className="form-group">
                        <label for="account">Account Number</label>
                        <div className="input-group">
                        <input type="text" name="1613401561050" id="accountNumber" class="form-control float__input" required  placeholder="Account Number" autocomplete="off" maxlength="10" data-parsley-required="true" data-parsley-minlength="10" data-parsley-minlength-message="Please enter a valid account number" data-parsley-required-message="Please enter an account number" data-safe="true"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="bank">Bank</label>
                        <div className="input-group">
                            <select id="bank" data-style="custom-select bg-transparent border-0" data-container="body" data-live-search="true" className="selectpicker form-control bg-transparent" required="">
                             
                            </select>
                            </div>
                        </div>

                        <div className="form-group">
                        <label for="beneficiaryName">Beneficiary's Name</label>
                        <div className="input-group"></div>
                        <input type="text" name="1613403426923" id="receipient" class="form-control float__input required__warning" placeholder="Beneficiary's Name" autocomplete="off" value="" data-parsley-required="true" data-parsley-required-message="Please enter beneficiary's name" data-safe="true"/>
                        </div>

                    
        `
                        <div class="form-group">
                            <label for="amount">Amount</label>
                            <div class="input-group">
                            <div class="input-group-prepend"> <span class="input-group-text">₦</span> </div>
                            <input type="text" name="1613403871374" id="amount" class="form-control float__input" placeholder="Amount" autocomplete="off"  maxlength="13" data-icon="₦" data-safe="true"/>
                            </div>
                            </div>

                            <div className="form-group">
                        <label for="beneficiaryMobile">Beneficiary's Mobile Number</label>
                        <div className="input-group"></div>
                      <input type="text" className="form-control" id="signupMobile" maxlength="10" required placeholder="Mobile Number"  />
                    </div>
                        
                      <button className="btn btn-success btn-block" type="submit" value='submit'>Continue</button>
                    </form>
                    <button className="btn btn-secondary btn-block my-3" ><a className='text-white' href='/dashboard'>Back</a></button>
                    
                    {/* <!-- Send Money Form end -->  */}
                  </div>
                </div>
              </div>
            </div>
          
          </div>
          </>
         );
    }
}
 
export default Sendmoney;