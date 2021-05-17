import React, { useEffect, useState, useContext } from 'react';
import eva from  '../../assests/images/team/leader.jpg';
// import Datetime from "react-datetime";
import {storage} from '../../firebase';
import firebase from 'firebase'
import db from "../../fire";
import PropTypes from 'prop-types';
import { connect, useSelector,useDispatch } from 'react-redux';
import {uploadImage, editUserDetails} from '../../redux/actions/userAction';
import {store} from 'react-notifications-component';
import 'animate.css';
import 'react-notifications-component/dist/theme.css'
import Wallet from './Wallet';





import './Myprofile.css';
import Profilefooter from './Profilefooter';
import { phoneAlert, profileAlert } from '../../util/AlertMessage';


const Myprofile = (props) =>{
  const [image, setImage] = useState(null)
  const user = JSON.parse(localStorage.getItem('userInfo'));
  
  // const token =JSON.parse(localStorage.getItem('jwtToken'))
  const [formData, setFormData] = useState({
    first_name:"",
    last_name:"",
    address:"",
    city:"",
    state:"",
    zipCode:"",
    phone:"",
    account_status:""
  })
 


  const handleProfileSave = (e) => {
    e.preventDefault();
    
    const userDetails  = {
      first_name:formData.first_name,
      last_name:formData.last_name,
      address:formData.address,
      city:formData.city,
      zip_code:formData.zipCode,
      state:formData.state,
      phone:user.phone,
      account_status:user.account_status

    }
    props.editUserDetails(userDetails)
    profileAlert();
    
    
 }
 
  const handlePhoneUpdate = (e) => {
    e.preventDefault();
    
    const userDetails  = {
      first_name:user .first_name,
      last_name:user.last_name,
      address:user.address,
      city:user.city,
      zip_code:user.zipCode,
      phone:formData.phone,
      account_status:user.account_status

    }
    props.editUserDetails(userDetails)
    phoneAlert()
    
 }
  const handleStatusUpdate = (e) => {
    e.preventDefault();
    
    const userDetails  = {
      first_name:user.first_name,
      last_name:user.last_name,
      address:user.address,
      city:user.city,
      zip_code:user.zipCode,
      phone:user.phone,
      account_status:formData.account_status

    }
    props.editUserDetails(userDetails)
    
 }

 const  mapUserDetailsToState = (userData) => {
  setFormData({
    ...formData,
    first_name: userData.first_name ? userData.first_name : '',
    last_name: userData.last_name ? userData.last_name : '',
    address: userData.address ? userData.address : '',
    city: userData.city ? userData.city : '',
    zip_code: userData.zip_code ? userData.zip_code : '',
    phone: userData.phone ? userData.phone : '',
    account_status: userData.account_status ? userData.account_status : ""
  });
};

 useEffect(() => {
  const { userData } = props;
  mapUserDetailsToState(userData);
 }, [])

  

const { handleImageChange, user: { userData: { first_name, last_name, address, city, state, zip_code }, loading }} = props;

  

  
  const handleEditPicture = () => {
    const fileInput = document.getElementById('imageInput');
    fileInput.click();
  };
  


  
  const handleChange = (e) => {
    const {name,value} = e.target
    setFormData({
      ...formData, 
      [name]:value
    })
  } 



        return ( 
            <>

            
            <div className="bg-secondary">
                
                <div className="container d-flex justify-content-center">
                  <ul className="nav secondary-nav">
        
          
                    <li className="nav-item"> <a className="nav-link active"  href="/profile">Profile</a></li>
                    <li className="nav-item"> <a className="nav-link"   href="/addcard">Cards & Bank Accounts</a></li>
                    <li className="nav-item"> <a className="nav-link" href="/notification">Notifications</a></li>
                    
                  </ul>
                 
                </div>
              </div>
            <div>
                <div id="content" className="py-4">
    <div className="container">
      <div className="row"> 
        
        
        <aside className="col-lg-3"> 

        <Wallet  handleImageChange={handleImageChange} />


          
         
          
        </aside>
        {/* <!-- Left Panel End --> 
        
        <!-- Middle Panel
        ============================================= --> */}
        <div className="col-lg-9">
          
          {/* <!-- Personal Details
          ============================================= --> */}
          <div className="bg-light shadow-sm rounded p-4 mb-4">
        
            <>
            <h3 className="text-5 font-weight-400 mb-3">Personal Details <a href="#edit-personal-details" data-toggle="modal" className="float-right text-1 text-uppercase text-muted btn-link"><i className="fa fa-edit mr-1"></i>Edit</a></h3>
            <div className="row">
              <p className="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Name</p>
              {user.first_name || user.last_name !=null?(<p className="col-sm-9" style={{textTransform:"capitalize"}}> {user.first_name}  {user.last_name}</p>): (<p className="col-sm-9" style={{textTransform:"capitalize"}}>enter your name Here  </p>) }
              
            </div>
            {/* <div className="row">
              <p className="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Date of Birth</p>
              <p className="col-sm-9">nil</p>
            </div> */}
            <div className="row">
              <p className="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Address</p>
              
               {user.address !=null?(<p className="col-sm-9" style={{textTransform:"capitalize"}}>{user.address}<br/>
                {user.city},<br/>
                {user.state} - {user.zip_code},<br/>
                Nigeria.</p>):(<p class="col-sm-9" style={{textTransform:"capitalize"}}>4th Floor, Plot No.22, Above Public Park, 145 Murphy Canyon Rd,  Suite 100-18,<br/>
                your city,<br/>
                your state - your zip code,<br/>
                Nigeria.</p>)}
            </div>
            </>
            </div>
          {/* <!-- Edit Details Modal
          ================================== --> */}
          <div id="edit-personal-details" className="modal fade " role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title font-weight-400">Personal Details</h5>
                  <button type="button" className="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                </div>
                <div className="modal-body p-4">
                  <form id="personaldetails" method="post">
                    <div className="row">
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <label for="firstName">First Name</label>
                          <input type="text"  className="form-control" data-bv-field="firstName" name="first_name" id="firstName" required placeholder="First Name" onChange={handleChange} value={formData.first_name} />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <label for="lastName">Last Name</label>
                          <input type="text"  className="form-control" data-bv-field="lastName" name="last_name" id="lastName" value={formData.last_name} required placeholder="Last Name"  onChange={handleChange}  />
                        </div>
                      </div>
                      {/* <div className="col-12">
                        <div className="form-group">
                          <label for="birthDate">Date of Birth</label>
                          <div className="position-relative">
                            <input id="DOB"  type="text" className="form-control" Name='DOB'  required placeholder="Date of Birth"/>
                            <Datetime
                        timeFormat={false}
                        inputProps={{ placeholder: "Datetime Picker Here" }}
                      />
                            <span className="icon-inside"><i className="fa fa-calendar-alt"></i></span> </div>
                        </div>
                      </div> */}
                      <div className="col-12">
                        <h3 className="text-5 font-weight-400 mt-3">Address</h3>
                        <hr/>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label for="address">Address</label>
                          <input type="text"  name='address' className="form-control" data-bv-field="address" id="address" value={formData.address} required placeholder="Address 1" onChange={handleChange}/>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <label for="city">City</label>
                          <input id="city"  name='city' type="text" className="form-control" required placeholder="City" onChange={handleChange} value={formData.city} />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <label for="input-zone">State</label>
                          <input id="state"  name='state' type="text" className="form-control" required placeholder="state" onChange={handleChange} value={formData.state} />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <label for="zipCode">Zip Code</label>
                          <input id="zipCode"  name='zipCode' type="text" className="form-control" required placeholder="100343" onChange={handleChange} value={formData.zipCode} />
                        </div>
                      </div>
                      {/* <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <label for="inputCountry">Country</label>
                          <select className="custom-select" id="inputCountry" name="country"    onChange={handleChange} >
                            <option value=""> --- Please Select --- </option>
                            <option value='nigeria' >Nigeria</option>
                            <option value='ghana' >Ghana</option>
                            
                           
                          </select>
                        </div>
                      </div> */}
                    </div>
                    <button className="btn btn-primary btn-block mt-2" type="button" onClick={handleProfileSave} data-dismiss="modal" aria-label="Close" >Save Changes</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Personal Details End  */}
          
          {/* Account Settings */}
          
          <div className="bg-light shadow-sm rounded p-4 mb-4">
         
            <h3 className="text-5 font-weight-400 mb-3">Account Settings <a href="#edit-account-settings" data-toggle="modal" className="float-right text-1 text-uppercase text-muted btn-link"><i className="fa fa-edit mr-1"></i>Edit</a></h3>
            <div className="row">
              <p className="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Language</p>
              <p className="col-sm-9">English (United States)</p>
            </div>
            <div className="row">
              <p className="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Time Zone</p>
              <p className="col-sm-9">(GMT+01:00) West Central Africa</p>
            </div>
            <div className="row">
              <p className="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Account Status</p>
             
              <p className="col-sm-9">
                <span className={`bg-${user.account_status != 1 ? 'danger' :'success' } text-white rounded-pill d-inline-block px-2 mb-0`}>
                <i className={`fa fa-${user.account_status != 1 ?  'times':'check' }-circle`}></i></span> {user.account_status != 1? "Inactive":  "Active" } </p> 
                
                
                
            </div>
          </div>
          {/* <!-- Edit Details Modal
          ================================== --> */}
          <div id="edit-account-settings" className="modal fade " role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title font-weight-400">Account Settings</h5>
                  <button type="button" className="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                </div>
                <div className="modal-body p-4">
                  <form id="accountSettings" method="post">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label for="language">Language</label>
                          <select className="custom-select" id="language" name="language_id">
                            <option value="1">English (United States)</option>
                          </select>
                        </div>
                      </div>
                    
                      <div className="col-12">
                        <div className="form-group">
                          <label for="accountStatus">Account Status</label>
                          <select className="custom-select" id="account_status" name="account_status" value={formData.account_status} onChange={handleChange} >
                            <option value=""></option>
                            <option value="1">Active</option>
                            <option value="2">In Active</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-block mt-2" type="button" data-dismiss="modal" aria-label="Close" onClick={handleStatusUpdate}>Save Changes</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Account Settings End -->
          
          <!-- Email Addresses
          ============================================= --> */}
           
          <div className="bg-light shadow-sm rounded p-4 mb-4">
            <h3 className="text-5 font-weight-400 mb-3">Email Addresses <a href="#edit-email" data-toggle="modal" className="float-right text-1 text-uppercase text-muted btn-link"><i className="fa fa-edit mr-1"></i>Edit</a></h3>
            <div className="row">
              <p className="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Email ID <span className="text-muted font-weight-500">(Primary)</span></p>
              <p className="col-sm-9">{user.email}  </p>
            </div>
          </div>
          
          {/* <!-- Edit Details Modal
          ================================== --> */}
          <div id="edit-email" className="modal fade " role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title font-weight-400">Email Addresses</h5>
                  <button type="button" className="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                </div>
                <div className="modal-body p-4">
                  <form id="emailAddresses" method="post">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label for="emailID">Email ID <span className="text-muted font-weight-500">(Primary)</span></label>
                          <input type="text" value="smithrhodes1982@gmail.com" className="form-control" data-bv-field="emailid" id="emailID" required placeholder="Email ID"/>
                        </div>
                      </div>
                    </div>
                    <a className="btn-link text-uppercase d-flex align-items-center text-1 float-right mb-3" href="#"><span className="text-3 mr-1"><i className="fa fa-plus-circle"></i></span>Add another email</a>
                    <button className="btn btn-primary btn-block" type="submit">Save Changes</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Email Addresses End -->
          
          <!-- Phone
          ============================================= --> */}
          
          <div className="bg-light shadow-sm rounded p-4 mb-4">
            <h3 className="text-5 font-weight-400 mb-3">Phone <a href="#edit-phone" data-toggle="modal" className="float-right text-1 text-uppercase text-muted btn-link"><i className="fa fa-edit mr-1"></i>Edit</a></h3>
            <div className="row">
              <p className="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Mobile <span className="text-muted font-weight-500">(Primary)</span></p>
              <p className="col-sm-9">{user.phone}</p>
            </div>
          </div>
         
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
                          <input type="tel" value={formData.phone} className="form-control" data-bv-field="mobilenumber" name="phone" id="mobileNumber" required placeholder="Mobile Number" onChange={handleChange} />
                        </div>
                      </div>
                    </div>
                    <a className="btn-link text-uppercase d-flex align-items-center text-1 float-right mb-3"><span className="text-3 mr-1"><i className="fa fa-plus-circle"></i></span>Add another Phone</a>
                    <button className="btn btn-primary btn-block" data-dismiss="modal" aria-label="Close" type="button" onClick={handlePhoneUpdate} >Save Changes</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Phone End -->
          
          <!-- Security
          ============================================= --> */}
          <div className="bg-light shadow-sm rounded p-4">
            <h3 className="text-5 font-weight-400 mb-3">Security <a href="#change-password" data-toggle="modal" className="float-right text-1 text-uppercase text-muted btn-link"><i className="fa fa-edit mr-1"></i>Edit</a></h3>
            <div className="row">
              <p className="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">
                <label className="col-form-label">Password</label>
              </p>
              <p className="col-sm-9">
                <input type="password" className="form-control-plaintext" data-bv-field="password" id="password" value="EnterPassword"/>
              </p>
            </div>
          </div>
          {/* <!-- Edit Details Modal
          ================================== --> */}
          <div id="change-password" className="modal fade " role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title font-weight-400">Change Password</h5>
                  <button type="button" className="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                </div>
                <div className="modal-body p-4">
                  <form id="changePassword" method="post">
                    <div className="form-group">
                      <label for="existingPassword">Confirm Current Password</label>
                      <input type="text" className="form-control" data-bv-field="existingpassword" id="existingPassword" required placeholder="Enter Current Password"/>
                    </div>
                    <div className="form-group">
                      <label for="newPassword">New Password</label>
                      <input type="text" className="form-control" data-bv-field="newpassword" id="newPassword" required placeholder="Enter New Password"/>
                    </div>
                    <div className="form-group">
                      <label for="confirmPassword">Confirm New Password</label>
                      <input type="text" className="form-control" data-bv-field="confirmgpassword" id="confirmPassword" required placeholder="Enter Confirm New Password"/>
                    </div>
                    <button className="btn btn-primary btn-block mt-4" type="submit">Update Password</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Security End --> */}
          
        </div>
        {/* <!-- Middle Panel End -->  */}
      </div>
    </div>
  </div>
            </div>
            <Profilefooter />
            </>
         );
    }
    Myprofile.propTypes = {
      user: PropTypes.object.isRequired,
      uploadImage: PropTypes.func.isRequired,
      editUserDetails: PropTypes.func.isRequired,
    };

    const mapStateToProps = (state) => ({
      userData: state.user.userData,
      user: state.user
     });

     const mapActionToProps = {
      editUserDetails
    }



export default  connect(mapStateToProps, mapActionToProps)(Myprofile);
 
