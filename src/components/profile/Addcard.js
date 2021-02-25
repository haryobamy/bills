import React, { Component } from 'react';
import SecNav from './Sent';
import Profileheader from './Pofileheader';
import Profilefooter from './Profilefooter';


class Addcard extends Component {
    state = {  }
    render() { 
        return ( 

            <>
            <Profileheader />
            <div className="bg-primary">
                
                <div className="container d-flex justify-content-center">
                  <ul className="nav secondary-nav">
        
          
                    <li className="nav-item"> <a className="nav-link " href="/profile">Account</a></li>
                    <li className="nav-item"> <a className="nav-link active"   href="/addcard">Cards & Bank Accounts</a></li>
                    <li className="nav-item"> <a className="nav-link" href="/notification">Notifications</a></li>
                    
                  </ul>
                 
                </div>
              </div>

            <div id="content" className="py-4">
            <div className="container">
              <div className="row"> 
                {/* <!-- Left Panel
                ============================================= --> */}
                <aside className="col-lg-3"> 
                  
                  {/* <!-- Profile Details
                  =============================== --> */}
                  <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
                    <div className="profile-thumb mt-3 mb-4"> <img className="rounded-circle" src="images/profile-thumb.jpg" alt=""/>
                      <div className="profile-thumb-edit custom-file bg-primary text-white" data-toggle="tooltip" title="Change Profile Picture"> <i className="fas fa-camera position-absolute"></i>
                        <input type="file" className="custom-file-input" id="customFile"/>
                      </div>
                    </div>
                    <p className="text-3 font-weight-500 mb-2">Hello, Smith Rhodes</p>
                    <p className="mb-2"><a href="profile.html" className="text-5 text-light" data-toggle="tooltip" title="Edit Profile"><i className="fas fa-edit"></i></a></p>
                  </div>
                  {/* <!-- Profile Details End --> 
                  
                  <!-- Available Balance
                  =============================== --> */}
                  <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
                    <div className="text-17 text-light my-3"><i className="fas fa-wallet"></i></div>
                    <h3 className="text-9 font-weight-400">$2956.00</h3>
                    <p className="mb-2 text-muted opacity-8">Available Balance</p>
                    <hr className="mx-n3"/>
                    <div className="d-flex"><a href="withdraw-money.html" className="btn-link mr-auto">Withdraw</a> <a href="deposit-money.html" className="btn-link ml-auto">Deposit</a></div>
                  </div>
                  {/* <!-- Available Balance End --> 
                  
                  <!-- Need Help?
                  =============================== --> */}
                  <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
                    <div className="text-17 text-light my-3"><i className="fas fa-comments"></i></div>
                    <h3 className="text-3 font-weight-400 my-4">Need Help?</h3>
                    <p className="text-muted opacity-8 mb-4">Have questions or concerns regrading your account?<br/>
                      Our experts are here to help!.</p>
                    <a href="#" className="btn btn-primary btn-block">Chate with Us</a> </div>
                  {/* <!-- Need Help? End -->  */}
                  
                </aside>
                {/* <!-- Left Panel End -->
                
                <!-- Middle Panel
                ============================================= --> */}
                <div className="col-lg-9">
                  
                  {/* <!-- Credit or Debit Cards
                  ============================================= --> */}
                  <div className="bg-light shadow-sm rounded p-4 mb-4">
                    <h3 className="text-5 font-weight-400 mb-4">Credit or Debit Cards <span className="text-muted text-4">(for payments)</span></h3>
                    <div className="row">
                      <div className="col-12 col-sm-6 col-lg-4">
                        <div className="account-card account-card-primary text-white rounded p-3 mb-4 mb-lg-0">
                          <p className="text-4">XXXX-XXXX-XXXX-4151</p>
                          <p className="d-flex align-items-center"> <span className="account-card-expire text-uppercase d-inline-block opacity-6 mr-2">Valid<br/>
                            thru<br/>
                            </span> <span className="text-4 opacity-9">07/24</span> <span className="bg-light text-0 text-body font-weight-500 rounded-pill d-inline-block px-2 line-height-4 opacity-8 ml-auto">Primary</span> </p>
                          <p className="d-flex align-items-center m-0"> <span className="text-uppercase font-weight-500">Smith Rhodes</span> 
                          <img className="ml-auto" src="images/payment/visa.png" alt="visa" title=""/> </p>
                          <div className="account-card-overlay rounded"> <a href="#" data-target="#edit-card-details" data-toggle="modal" className="text-light btn-link mx-2"><span className="mr-1"><i className="fas fa-edit"></i></span>Edit</a> <a href="#" className="text-light btn-link mx-2"><span className="mr-1"><i className="fas fa-minus-circle"></i></span>Delete</a> </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-lg-4">
                        <div className="account-card text-white rounded p-3 mb-4 mb-lg-0">
                          <p className="text-4">XXXX-XXXX-XXXX-6296</p>
                          <p className="d-flex align-items-center"> <span className="account-card-expire text-uppercase d-inline-block opacity-6 mr-2">Valid<br/>
                            thru<br/>
                            </span> <span className="text-4 opacity-9">07/23</span> </p>
                          <p className="d-flex align-items-center m-0"> <span className="text-uppercase font-weight-500">Smith Rhodes</span> 
                          <img className="ml-auto" src="images/payment/mastercard.png" alt="mastercard" title=""/>
                           </p>
                          <div className="account-card-overlay rounded"> <a href="#" data-target="#edit-card-details" data-toggle="modal" className="text-light btn-link mx-2"><span className="mr-1"><i className="fas fa-edit"></i></span>Edit</a> <a href="#" className="text-light btn-link mx-2"><span className="mr-1"><i className="fas fa-minus-circle"></i></span>Delete</a> </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-lg-4"> <a href="" data-target="#add-new-card-details" data-toggle="modal" className="account-card-new d-flex align-items-center rounded h-100 p-3 mb-4 mb-lg-0">
                        <p className="w-100 text-center line-height-4 m-0"> <span className="text-3"><i className="fas fa-plus-circle"></i></span> <span className="d-block text-body text-3">Add New Card</span> </p>
                        </a> </div>
                    </div>
                  </div>
                  {/* <!-- Edit Card Details Modal
                  ================================== --> */}
                  <div id="edit-card-details" className="modal fade" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title font-weight-400">Update Card</h5>
                          <button type="button" className="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                        </div>
                        <div className="modal-body p-4">
                          <form id="updateCard" method="post">
                            <div className="form-group">
                              <label for="edircardNumber">Card Number</label>
                              <div className="input-group">
                                <div className="input-group-prepend"> <span className="input-group-text">
                                    <img className="ml-auto" src="images/payment/visa.png" alt="visa" title=""/></span> 
                                    </div>
                                <input type="text" className="form-control" data-bv-field="edircardNumber" id="edircardNumber" disabled value="XXXXXXXXXXXX4151" placeholder="Card Number"/>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label for="editexpiryDate">Expiry Date</label>
                                  <input id="editexpiryDate" type="text" className="form-control" data-bv-field="editexpiryDate" required value="07/24" placeholder="MM/YY"/>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label for="editcvvNumber">CVV <span className="text-info ml-1" data-toggle="tooltip" data-original-title="For Visa/Mastercard, the three-digit CVV number is printed on the signature panel on the back of the card immediately after the card's account number. For American Express, the four-digit CVV number is printed on the front of the card above the card account number."><i className="fas fa-question-circle"></i></span></label>
                                  <input id="editcvvNumber" type="password" className="form-control" data-bv-field="editcvvNumber" required value="321" placeholder="CVV (3 digits)"/>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <label for="editcardHolderName">Card Holder Name</label>
                              <input type="text" className="form-control" data-bv-field="editcardHolderName" id="editcardHolderName" required value="Smith Rhodes" placeholder="Card Holder Name"/>
                            </div>
                            <button className="btn btn-primary btn-block" type="submit">Update Card</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  {/* <!-- Credit or Debit Cards End -->
                  
                  <!-- Bank Accounts
                  ============================================= --> */}
                  <div className="bg-light shadow-sm rounded p-4 mb-4">
                    <h3 className="text-5 font-weight-400 mb-4">Bank Accounts <span className="text-muted text-4">(for withdrawal)</span></h3>
                    <div className="row">
                      <div className="col-12 col-sm-6">
                        <div className="account-card account-card-primary text-white rounded mb-4 mb-lg-0">
                          <div className="row no-gutters">
                            <div className="col-3 d-flex justify-content-center p-3">
                              <div className="my-auto text-center text-13"> <i className="fas fa-university"></i>
                                <p className="bg-light text-0 text-body font-weight-500 rounded-pill d-inline-block px-2 line-height-4 opacity-8 mb-0">Primary</p>
                              </div>
                            </div>
                            <div className="col-9 border-left">
                              <div className="py-4 my-2 pl-4">
                                <p className="text-4 font-weight-500 mb-1">HDFC Bank</p>
                                <p className="text-4 opacity-9 mb-1">XXXXXXXXXXXX-9025</p>
                                <p className="m-0">Approved <span className="text-3"><i className="fas fa-check-circle"></i></span></p>
                              </div>
                            </div>
                          </div>
                          <div className="account-card-overlay rounded"> <a href="#" data-target="#bank-account-details" data-toggle="modal" className="text-light btn-link mx-2"><span className="mr-1"><i className="fas fa-share"></i></span>More Details</a> <a href="#" className="text-light btn-link mx-2"><span className="mr-1"><i className="fas fa-minus-circle"></i></span>Delete</a> </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6"> <a href="" data-target="#add-new-bank-account" data-toggle="modal" className="account-card-new d-flex align-items-center rounded h-100 p-3 mb-4 mb-lg-0">
                        <p className="w-100 text-center line-height-4 m-0"> <span className="text-3"><i className="fas fa-plus-circle"></i></span> <span className="d-block text-body text-3">Add New Bank Account</span> </p>
                        </a> </div>
                    </div>
                  </div>
                  {/* <!-- Edit Bank Account Details Modal
                  ======================================== --> */}
                  <div id="bank-account-details" className="modal fade" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered transaction-details" role="document">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="row no-gutters">
                            <div className="col-sm-5 d-flex justify-content-center bg-primary rounded-left py-4">
                              <div className="my-auto text-center">
                                <div className="text-17 text-white mb-3"><i className="fas fa-university"></i></div>
                                <h3 className="text-6 text-white my-3">HDFC Bank</h3>
                                <div className="text-4 text-white my-4">XXX-9027 | INR</div>
                                <p className="bg-light text-0 text-body font-weight-500 rounded-pill d-inline-block px-2 line-height-4 mb-0">Primary</p>
                              </div>
                            </div>
                            <div className="col-sm-7">
                              <h5 className="text-5 font-weight-400 m-3">Bank Account Details
                                <button type="button" className="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                              </h5>
                              <hr/>
                              <div className="px-3">
                                <ul className="list-unstyled">
                                  <li className="font-weight-500">Account Type:</li>
                                  <li className="text-muted">Personal</li>
                                </ul>
                                <ul className="list-unstyled">
                                  <li className="font-weight-500">Account Name:</li>
                                  <li className="text-muted">Smith Rhodes</li>
                                </ul>
                                <ul className="list-unstyled">
                                  <li className="font-weight-500">Account Number:</li>
                                  <li className="text-muted">XXXXXXXXXXXX-9025</li>
                                </ul>
                                <ul className="list-unstyled">
                                  <li className="font-weight-500">Bank Country:</li>
                                  <li className="text-muted">India</li>
                                </ul>
                                <ul className="list-unstyled">
                                  <li className="font-weight-500">Status:</li>
                                  <li className="text-muted">Approved <span className="text-success text-3"><i className="fas fa-check-circle"></i></span></li>
                                </ul>
                                <p><a href="#" className="btn btn-sm btn-outline-danger btn-block shadow-none"><span className="mr-1"><i className="fas fa-minus-circle"></i></span>Delete Account</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Add New Bank Account Details Modal
                  ======================================== --> */}
                  <div id="add-new-bank-account" className="modal fade" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title font-weight-400">Add bank account</h5>
                          <button type="button" className="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                        </div>
                        <div className="modal-body p-4">
                          <form id="addbankaccount" method="post">
                            <div className="mb-3">
                              <div className="custom-control custom-radio custom-control-inline">
                                <input id="personal" name="bankAccountType" className="custom-control-input" checked="" required type="radio"/>
                                <label className="custom-control-label" for="personal">Personal</label>
                              </div>
                              <div className="custom-control custom-radio custom-control-inline">
                                <input id="business" name="bankAccountType" className="custom-control-input" required type="radio"/>
                                <label className="custom-control-label" for="business">Business</label>
                              </div>
                            </div>
                            <div className="form-group">
                              <label for="inputCountry">Bank Country</label>
                              <select className="custom-select" id="inputCountry" disabled name="country_id">
                                <option value=""> --- Please Select --- </option>
                                <option value="244">Aaland Islands</option>
                                <option value="1">Afghanistan</option>
                                <option value="2">Albania</option>
                                <option value="3">Algeria</option>
                                <option value="4">American Samoa</option>
                                <option value="5">Andorra</option>
                                <option value="6">Angola</option>
                                <option value="7">Anguilla</option>
                                <option value="8">Antarctica</option>
                                <option value="9">Antigua and Barbuda</option>
                                <option value="10">Argentina</option>
                                <option value="11">Armenia</option>
                                <option value="12">Aruba</option>
                                <option value="252">Ascension Island (British)</option>
                                <option value="13">Australia</option>
                                <option value="14">Austria</option>
                                <option value="15">Azerbaijan</option>
                                <option value="16">Bahamas</option>
                                <option value="17">Bahrain</option>
                                <option value="18">Bangladesh</option>
                                <option value="19">Barbados</option>
                                <option value="20">Belarus</option>
                                <option value="21">Belgium</option>
                                <option value="22">Belize</option>
                                <option value="23">Benin</option>
                                <option value="24">Bermuda</option>
                                <option value="25">Bhutan</option>
                                <option value="26">Bolivia</option>
                                <option value="245">Bonaire, Sint Eustatius and Saba</option>
                                <option value="27">Bosnia and Herzegovina</option>
                                <option value="28">Botswana</option>
                                <option value="29">Bouvet Island</option>
                                <option value="30">Brazil</option>
                                <option value="31">British Indian Ocean Territory</option>
                                <option value="32">Brunei Darussalam</option>
                                <option value="33">Bulgaria</option>
                                <option value="34">Burkina Faso</option>
                                <option value="35">Burundi</option>
                                <option value="36">Cambodia</option>
                                <option value="37">Cameroon</option>
                                <option value="38">Canada</option>
                                <option value="251">Canary Islands</option>
                                <option value="39">Cape Verde</option>
                                <option value="40">Cayman Islands</option>
                                <option value="41">Central African Republic</option>
                                <option value="42">Chad</option>
                                <option value="43">Chile</option>
                                <option value="44">China</option>
                                <option value="45">Christmas Island</option>
                                <option value="46">Cocos (Keeling) Islands</option>
                                <option value="47">Colombia</option>
                                <option value="48">Comoros</option>
                                <option value="49">Congo</option>
                                <option value="50">Cook Islands</option>
                                <option value="51">Costa Rica</option>
                                <option value="52">Cote D'Ivoire</option>
                                <option value="53">Croatia</option>
                                <option value="54">Cuba</option>
                                <option value="246">Curacao</option>
                                <option value="55">Cyprus</option>
                                <option value="56">Czech Republic</option>
                                <option value="237">Democratic Republic of Congo</option>
                                <option value="57">Denmark</option>
                                <option value="58">Djibouti</option>
                                <option value="59">Dominica</option>
                                <option value="60">Dominican Republic</option>
                                <option value="61">East Timor</option>
                                <option value="62">Ecuador</option>
                                <option value="63">Egypt</option>
                                <option value="64">El Salvador</option>
                                <option value="65">Equatorial Guinea</option>
                                <option value="66">Eritrea</option>
                                <option value="67">Estonia</option>
                                <option value="68">Ethiopia</option>
                                <option value="69">Falkland Islands (Malvinas)</option>
                                <option value="70">Faroe Islands</option>
                                <option value="71">Fiji</option>
                                <option value="72">Finland</option>
                                <option value="74">France, Metropolitan</option>
                                <option value="75">French Guiana</option>
                                <option value="76">French Polynesia</option>
                                <option value="77">French Southern Territories</option>
                                <option value="126">FYROM</option>
                                <option value="78">Gabon</option>
                                <option value="79">Gambia</option>
                                <option value="80">Georgia</option>
                                <option value="81">Germany</option>
                                <option value="82">Ghana</option>
                                <option value="83">Gibraltar</option>
                                <option value="84">Greece</option>
                                <option value="85">Greenland</option>
                                <option value="86">Grenada</option>
                                <option value="87">Guadeloupe</option>
                                <option value="88">Guam</option>
                                <option value="89">Guatemala</option>
                                <option value="256">Guernsey</option>
                                <option value="90">Guinea</option>
                                <option value="91">Guinea-Bissau</option>
                                <option value="92">Guyana</option>
                                <option value="93">Haiti</option>
                                <option value="94">Heard and Mc Donald Islands</option>
                                <option value="95">Honduras</option>
                                <option value="96">Hong Kong</option>
                                <option value="97">Hungary</option>
                                <option value="98">Iceland</option>
                                <option selected="selected" value="99">India</option>
                                <option value="100">Indonesia</option>
                                <option value="101">Iran (Islamic Republic of)</option>
                                <option value="102">Iraq</option>
                                <option value="103">Ireland</option>
                                <option value="254">Isle of Man</option>
                                <option value="104">Israel</option>
                                <option value="105">Italy</option>
                                <option value="106">Jamaica</option>
                                <option value="107">Japan</option>
                                <option value="257">Jersey</option>
                                <option value="108">Jordan</option>
                                <option value="109">Kazakhstan</option>
                                <option value="110">Kenya</option>
                                <option value="111">Kiribati</option>
                                <option value="113">Korea, Republic of</option>
                                <option value="253">Kosovo, Republic of</option>
                                <option value="114">Kuwait</option>
                                <option value="115">Kyrgyzstan</option>
                                <option value="116">Lao People's Democratic Republic</option>
                                <option value="117">Latvia</option>
                                <option value="118">Lebanon</option>
                                <option value="119">Lesotho</option>
                                <option value="120">Liberia</option>
                                <option value="121">Libyan Arab Jamahiriya</option>
                                <option value="122">Liechtenstein</option>
                                <option value="123">Lithuania</option>
                                <option value="124">Luxembourg</option>
                                <option value="125">Macau</option>
                                <option value="127">Madagascar</option>
                                <option value="128">Malawi</option>
                                <option value="129">Malaysia</option>
                                <option value="130">Maldives</option>
                                <option value="131">Mali</option>
                                <option value="132">Malta</option>
                                <option value="133">Marshall Islands</option>
                                <option value="134">Martinique</option>
                                <option value="135">Mauritania</option>
                                <option value="136">Mauritius</option>
                                <option value="137">Mayotte</option>
                                <option value="138">Mexico</option>
                                <option value="139">Micronesia, Federated States of</option>
                                <option value="140">Moldova, Republic of</option>
                                <option value="141">Monaco</option>
                                <option value="142">Mongolia</option>
                                <option value="242">Montenegro</option>
                                <option value="143">Montserrat</option>
                                <option value="144">Morocco</option>
                                <option value="145">Mozambique</option>
                                <option value="146">Myanmar</option>
                                <option value="147">Namibia</option>
                                <option value="148">Nauru</option>
                                <option value="149">Nepal</option>
                                <option value="150">Netherlands</option>
                                <option value="151">Netherlands Antilles</option>
                                <option value="152">New Caledonia</option>
                                <option value="153">New Zealand</option>
                                <option value="154">Nicaragua</option>
                                <option value="155">Niger</option>
                                <option value="156">Nigeria</option>
                                <option value="157">Niue</option>
                                <option value="158">Norfolk Island</option>
                                <option value="112">North Korea</option>
                                <option value="159">Northern Mariana Islands</option>
                                <option value="160">Norway</option>
                                <option value="161">Oman</option>
                                <option value="162">Pakistan</option>
                                <option value="163">Palau</option>
                                <option value="247">Palestinian Territory, Occupied</option>
                                <option value="164">Panama</option>
                                <option value="165">Papua New Guinea</option>
                                <option value="166">Paraguay</option>
                                <option value="167">Peru</option>
                                <option value="168">Philippines</option>
                                <option value="169">Pitcairn</option>
                                <option value="170">Poland</option>
                                <option value="171">Portugal</option>
                                <option value="172">Puerto Rico</option>
                                <option value="173">Qatar</option>
                                <option value="174">Reunion</option>
                                <option value="175">Romania</option>
                                <option value="176">Russian Federation</option>
                                <option value="177">Rwanda</option>
                                <option value="178">Saint Kitts and Nevis</option>
                                <option value="179">Saint Lucia</option>
                                <option value="180">Saint Vincent and the Grenadines</option>
                                <option value="181">Samoa</option>
                                <option value="182">San Marino</option>
                                <option value="183">Sao Tome and Principe</option>
                                <option value="184">Saudi Arabia</option>
                                <option value="185">Senegal</option>
                                <option value="243">Serbia</option>
                                <option value="186">Seychelles</option>
                                <option value="187">Sierra Leone</option>
                                <option value="188">Singapore</option>
                                <option value="189">Slovak Republic</option>
                                <option value="190">Slovenia</option>
                                <option value="191">Solomon Islands</option>
                                <option value="192">Somalia</option>
                                <option value="193">South Africa</option>
                                <option value="194">South Georgia &amp; South Sandwich Islands</option>
                                <option value="248">South Sudan</option>
                                <option value="195">Spain</option>
                                <option value="196">Sri Lanka</option>
                                <option value="249">St. Barthelemy</option>
                                <option value="197">St. Helena</option>
                                <option value="250">St. Martin (French part)</option>
                                <option value="198">St. Pierre and Miquelon</option>
                                <option value="199">Sudan</option>
                                <option value="200">Suriname</option>
                                <option value="201">Svalbard and Jan Mayen Islands</option>
                                <option value="202">Swaziland</option>
                                <option value="203">Sweden</option>
                                <option value="204">Switzerland</option>
                                <option value="205">Syrian Arab Republic</option>
                                <option value="206">Taiwan</option>
                                <option value="207">Tajikistan</option>
                                <option value="208">Tanzania, United Republic of</option>
                                <option value="209">Thailand</option>
                                <option value="210">Togo</option>
                                <option value="211">Tokelau</option>
                                <option value="212">Tonga</option>
                                <option value="213">Trinidad and Tobago</option>
                                <option value="255">Tristan da Cunha</option>
                                <option value="214">Tunisia</option>
                                <option value="215">Turkey</option>
                                <option value="216">Turkmenistan</option>
                                <option value="217">Turks and Caicos Islands</option>
                                <option value="218">Tuvalu</option>
                                <option value="219">Uganda</option>
                                <option value="220">Ukraine</option>
                                <option value="221">United Arab Emirates</option>
                                <option value="222">United Kingdom</option>
                                <option value="223">United States</option>
                                <option value="224">United States Minor Outlying Islands</option>
                                <option value="225">Uruguay</option>
                                <option value="226">Uzbekistan</option>
                                <option value="227">Vanuatu</option>
                                <option value="228">Vatican City State (Holy See)</option>
                                <option value="229">Venezuela</option>
                                <option value="230">Viet Nam</option>
                                <option value="231">Virgin Islands (British)</option>
                                <option value="232">Virgin Islands (U.S.)</option>
                                <option value="233">Wallis and Futuna Islands</option>
                                <option value="234">Western Sahara</option>
                                <option value="235">Yemen</option>
                                <option value="238">Zambia</option>
                                <option value="239">Zimbabwe</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label for="bankName">Bank Name</label>
                              <select className="custom-select" id="bankName" name="bankName">
                                <option value=""> Please Select </option>
                                <option value="1">Bank Name 1</option>
                                <option value="2">Bank Name 2</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label for="accountName">Account Name</label>
                              <input type="text" className="form-control" data-bv-field="accountName" id="accountName" required value="" placeholder="e.g. Smith Rhodes"/>
                            </div>
                            <div className="form-group">
                              <label for="accountNumber">Account Number</label>
                              <input type="text" className="form-control" data-bv-field="accountNumber" id="accountNumber" required value="" placeholder="e.g. 12346678900001"/>
                            </div>
                            <div className="form-group">
                              <label for="ifscCode">NEFT IFSC Code</label>
                              <input type="text" className="form-control" data-bv-field="ifscCode" id="ifscCode" required value="" placeholder="e.g. ABCDE12345"/>
                            </div>
                            <div className="form-check custom-control custom-checkbox mb-3">
                              <input id="remember-me" name="remember" className="custom-control-input" type="checkbox"/>
                              <label className="custom-control-label" for="remember-me">I confirm the bank account details above</label>
                            </div>
                            <button className="btn btn-primary btn-block" type="submit">Add Bank Account</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Bank Accounts End --> */}
                  
                </div>
                {/* <!-- Middle Panel End -->  */}
              </div>
            </div>
          </div>
          <Profilefooter />
          </>
         );
    }
}
 
export default Addcard;