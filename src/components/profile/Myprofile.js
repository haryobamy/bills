import React, { useEffect, useState, useContext } from 'react';
import eva from  '../../assests/images/team/leader.jpg';
// import Datetime from "react-datetime";
import {storage} from '../../firebase';
import firebase from 'firebase'
import db from "../../fire";
import PropTypes from 'prop-types';
import { connect, useSelector,useDispatch } from 'react-redux';
import {getUserData} from '../../redux/actions/userAction';




import './Myprofile.css';
import Profilefooter from './Profilefooter';


const Myprofile = (props) =>{
  const [image, setImage] = useState(null)
  // const [users, setUsers] = useState([]);
  
  const user = JSON.parse(localStorage.getItem('userInfo'));

  // const user = useSelector(state => state.user)

//   const dispatch = useDispatch();


//  useEffect(() => {
//    dispatch(getUserData(user))
//  }, [])

  


// const { user: { userdata: { username, createdAt, imageUrl, bio, website, location },loading,authenticated
//   }
// } = props;

//  console.log(username)


  
  const [ formData, setFormData] = useState({
    firstName:'', 
    lastName:"", 
     DOB:'',
     address:'',
     country:'',
     zipCode:'',
     city:'',
     state:'',

  })

  const handleFileChange = e => {
    if (e.target.file[0]) {
      setImage(e.target.file[0])

    }
  }

  const handleUpload = e => {

  


      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        'state_changed',
        snapshot => {},
        error => {
          console.log(error);
        },
        () => {
          storage
          .ref('images')
          .child(image.name)
          .getDownLoadUrl()
          .then(url => {
            //console.log(url)
          });
        }
      )
  }


  const handleInputChange = e => {
    const {name,value} = e.target
    setFormData({
      ...formData, 
      [name]:value
    })
    console.log(name, value);
  }

 
  // var name, email, photoUrl, uid, emailVerified;
  
  // if (user != null) {
  //   name = user.displayName;
  //   email = user.email;
  //   photoUrl = user.photoURL;
  //   emailVerified = user.emailVerified;
  //   uid = user.uid; 
    
  // }


  


  const handleSave = () => {

   

    // const profile ={
    //   firstName:formData.firstName, 
    //   lastName:formData.lastName, 
    //    address:formData.address,
    //    country:formData.country,
    //    zipCode:formData.zipCode,
    //    city:formData.city,
    //    state:formData.state,
    // }

    
  //   if (profile) {
  //     // updating and adding user profile
  //     db.collection('users').add({
  //         name:profile
  //     })
  //  }
    

  }



 

//   const fetchUsers=async()=>{
//     const response=db.collection('users');
//     const data=await response.get();
//     data.docs.forEach(item=>{
//      setUsers([...users,item.data()])
//     })
// }

// useEffect(() => {
//   fetchUsers();
// }, [])





        return ( 
            <>

            
            <div className="bg-primary">
                
                <div className="container d-flex justify-content-center">
                  <ul className="nav secondary-nav">
        
          
                    <li className="nav-item"> <a className="nav-link active" href="/profile">Profile</a></li>
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
          
         {/* Profile Details */}
         
         <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
           
        
            <div className="profile-thumb mt-3 mb-4"> <img className="rounded-circle" src={eva} width='120' alt=""/>
              <div className="profile-thumb-edit custom-file bg-primary text-white" data-toggle="tooltip" title="Change Profile Picture"> <i className="fa fa-camera position-absolute" onChange={handleUpload} ></i>
                <input type="file" className="custom-file-input" id="customFile"  />
              </div>
            </div>
           
       
            
            <p className="text-3 font-weight-500 mb-2" >Hello,{user.username}  </p>
            <p className="mb-2"><a href="profile.html" className="text-5 text-light" data-toggle="tooltip" title="Edit Profile"><i className="fa fa-edit"></i></a></p>
           
          
          </div>
           {/* Profile Details End  */}
          
           {/* Available Balance */}
         
          <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
            <div className="text-17 text-light my-3"><i className="fa fa-wallet"></i></div>
            <h3 className="text-9 font-weight-400">₦2956.00</h3>
            <p className="mb-2 text-muted opacity-8">Available Balance</p>
            <hr className="mx-n3" />
            <div className="d-flex"><a href="/withdraw" className="btn-link mr-auto">Withdraw</a> <a href="/deposit" className="btn-link ml-auto">Deposit</a></div>
          </div>
           {/* Available Balance End  */}
          
          {/* Need Help? */}
          
          <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
            <div className="text-17 text-light my-3"><i className="fa fa-comments"></i></div>
            <h3 className="text-3 font-weight-400 my-4">Need Help?</h3>
            <p className="text-muted opacity-8 mb-4">Have questions or concerns regrading your account?<br/>
              Our experts are here to help!.</p>
            <a href="#" className="btn btn-primary btn-block">Contact Us</a> </div>
          {/* <!-- Need Help? End -->  */}
          
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
              {user?(<p className="col-sm-9"> fix this </p>): (<p className="col-sm-9"> Ciroma adeola  </p>) }
              
            </div>
            {/* <div className="row">
              <p className="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Date of Birth</p>
              <p className="col-sm-9">nil</p>
            </div> */}
            <div className="row">
              <p className="col-sm-3 text-muted text-sm-right mb-0 mb-sm-3">Address</p>
              
              <p className="col-sm-9"> <p>{user.address?("uuuuu"):('block  sos osososos')}</p> <br/>
                {user.city},<br/>
                {user.state} - {user.zipcode},<br/>
                {user.country}.</p>
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
                          <input type="text"  className="form-control" data-bv-field="firstName" id="firstName" required placeholder="First Name" onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <label for="lastName">Last Name</label>
                          <input type="text"  className="form-control" data-bv-field="lastName" id="lastName" required placeholder="Last Name"  onChange={handleInputChange} />
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
                          <input type="text"  name='address' className="form-control" data-bv-field="address" id="address" value={formData.address} required placeholder="Address 1" onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <label for="city">City</label>
                          <input id="city"  name='city' type="text" className="form-control" required placeholder="City" onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <label for="input-zone">State</label>
                          <select className="custom-select" id="input-zone" name="zone_id" onChange={handleInputChange} >
                            <option value=""> --- Please Select --- </option>
                            <option value="3613">Alabama</option>
                           
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <label for="zipCode">Zip Code</label>
                          <input id="zipCode"  name='zipCode' type="text" className="form-control" required placeholder="100343" onChange={handleInputChange}/>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <label for="inputCountry">Country</label>
                          <select className="custom-select" id="inputCountry" name="country"    onChange={handleInputChange} >
                            <option value=""> --- Please Select --- </option>
                            <option value='nigeria' >Nigeria</option>
                            <option value='ghana' >Ghana</option>
                            
                           
                          </select>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-block mt-2" type="button" onClick={handleSave}  >Save Changes</button>
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
                <span className={`bg-${user.accountStatus ?'success' : 'danger'} text-white rounded-pill d-inline-block px-2 mb-0`}>
                <i className={`fa fa-${user.accountStatus ? 'check' : 'times'}-circle`}></i></span> {user.accountStatus ? "Active" : "Inactive"} </p> 
                
                
                
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
                      {/* <div className="col-12">
                        <div className="form-group">
                          <label for="input-timezone">Time Zone</label>
                          <select className="custom-select" id="input-timezone" name="timezone_id">
                            <option value="-12">(GMT-12:00) International Date Line West</option>
                            <option value="-11">(GMT-11:00) Midway Island, Samoa</option>
                            <option value="-10">(GMT-10:00) Hawaii</option>
                            <option value="-9">(GMT-09:00) Alaska</option>
                            <option value="-8">(GMT-08:00) Pacific Time (US & Canada)</option>
                            <option value="-8">(GMT-08:00) Tijuana, Baja California</option>
                            <option value="-7">(GMT-07:00) Arizona</option>
                            <option value="-7">(GMT-07:00) Chihuahua, La Paz, Mazatlan</option>
                            <option value="-7">(GMT-07:00) Mountain Time (US & Canada)</option>
                            <option selected="selected" value="-6">(GMT-06:00) Central America</option>
                            <option value="-6">(GMT-06:00) Central Time (US & Canada)</option>
                            <option value="-6">(GMT-06:00) Guadalajara, Mexico City, Monterrey</option>
                            <option value="-6">(GMT-06:00) Saskatchewan</option>
                            <option value="-5">(GMT-05:00) Bogota, Lima, Quito, Rio Branco</option>
                            <option value="-5">(GMT-05:00) Eastern Time (US & Canada)</option>
                            <option value="-5">(GMT-05:00) Indiana (East)</option>
                            <option value="-4">(GMT-04:00) Atlantic Time (Canada)</option>
                            <option value="-4">(GMT-04:00) Caracas, La Paz</option>
                            <option value="-4">(GMT-04:00) Manaus</option>
                            <option value="-4">(GMT-04:00) Santiago</option>
                            <option value="-3.5">(GMT-03:30) Newfoundland</option>
                            <option value="-3">(GMT-03:00) Brasilia</option>
                            <option value="-3">(GMT-03:00) Buenos Aires, Georgetown</option>
                            <option value="-3">(GMT-03:00) Greenland</option>
                            <option value="-3">(GMT-03:00) Montevideo</option>
                            <option value="-2">(GMT-02:00) Mid-Atlantic</option>
                            <option value="-1">(GMT-01:00) Cape Verde Is.</option>
                            <option value="-1">(GMT-01:00) Azores</option>
                            <option value="0">(GMT+00:00) Casablanca, Monrovia, Reykjavik</option>
                            <option value="0">(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London</option>
                            <option value="1">(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</option>
                            <option value="1">(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</option>
                            <option value="1">(GMT+01:00) Brussels, Copenhagen, Madrid, Paris</option>
                            <option value="1">(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb</option>
                            <option value="1">(GMT+01:00) West Central Africa</option>
                            <option value="2">(GMT+02:00) Amman</option>
                            <option value="2">(GMT+02:00) Athens, Bucharest, Istanbul</option>
                            <option value="2">(GMT+02:00) Beirut</option>
                            <option value="2">(GMT+02:00) Cairo</option>
                            <option value="2">(GMT+02:00) Harare, Pretoria</option>
                            <option value="2">(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius</option>
                            <option value="2">(GMT+02:00) Jerusalem</option>
                            <option value="2">(GMT+02:00) Minsk</option>
                            <option value="2">(GMT+02:00) Windhoek</option>
                            <option value="3">(GMT+03:00) Kuwait, Riyadh, Baghdad</option>
                            <option value="3">(GMT+03:00) Moscow, St. Petersburg, Volgograd</option>
                            <option value="3">(GMT+03:00) Nairobi</option>
                            <option value="3">(GMT+03:00) Tbilisi</option>
                            <option value="3.5">(GMT+03:30) Tehran</option>
                            <option value="4">(GMT+04:00) Abu Dhabi, Muscat</option>
                            <option value="4">(GMT+04:00) Baku</option>
                            <option value="4">(GMT+04:00) Yerevan</option>
                            <option value="4.5">(GMT+04:30) Kabul</option>
                            <option value="5">(GMT+05:00) Yekaterinburg</option>
                            <option value="5">(GMT+05:00) Islamabad, Karachi, Tashkent</option>
                            <option value="5.5">(GMT+05:30) Sri Jayawardenapura</option>
                            <option value="5.5">(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
                            <option value="5.75">(GMT+05:45) Kathmandu</option>
                            <option value="6">(GMT+06:00) Almaty, Novosibirsk</option>
                            <option value="6">(GMT+06:00) Astana, Dhaka</option>
                            <option value="6.5">(GMT+06:30) Yangon (Rangoon)</option>
                            <option value="7">(GMT+07:00) Bangkok, Hanoi, Jakarta</option>
                            <option value="7">(GMT+07:00) Krasnoyarsk</option>
                            <option value="8">(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi</option>
                            <option value="8">(GMT+08:00) Kuala Lumpur, Singapore</option>
                            <option value="8">(GMT+08:00) Irkutsk, Ulaan Bataar</option>
                            <option value="8">(GMT+08:00) Perth</option>
                            <option value="8">(GMT+08:00) Taipei</option>
                            <option value="9">(GMT+09:00) Osaka, Sapporo, Tokyo</option>
                            <option value="9">(GMT+09:00) Seoul</option>
                            <option value="9">(GMT+09:00) Yakutsk</option>
                            <option value="9.5">(GMT+09:30) Adelaide</option>
                            <option value="9.5">(GMT+09:30) Darwin</option>
                            <option value="10">(GMT+10:00) Brisbane</option>
                            <option value="10">(GMT+10:00) Canberra, Melbourne, Sydney</option>
                            <option value="10">(GMT+10:00) Hobart</option>
                            <option value="10">(GMT+10:00) Guam, Port Moresby</option>
                            <option value="10">(GMT+10:00) Vladivostok</option>
                            <option value="11">(GMT+11:00) Magadan, Solomon Is., New Caledonia</option>
                            <option value="12">(GMT+12:00) Auckland, Wellington</option>
                            <option value="12">(GMT+12:00) Fiji, Kamchatka, Marshall Is.</option>
                            <option value="13">(GMT+13:00) Nuku'alofa</option>
                          </select>
                        </div>
                      </div> */}
                      <div className="col-12">
                        <div className="form-group">
                          <label for="accountStatus">Account Status</label>
                          <select className="custom-select" id="accountStatus" name="language_id">
                            <option value="1">Active</option>
                            <option value="2">In Active</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-block mt-2" type="submit">Save Changes</button>
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
              <p className="col-sm-9">{user.mobile}</p>
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
    };

    const mapStateToProps = (state) => ({
      user: state.user
     });



export default  connect(mapStateToProps)(Myprofile);
 
