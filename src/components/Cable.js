import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Footer from '../components/Footer';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import Header from '../components/Header';
import { v4 as uuidv4 } from 'uuid';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import tv from '../assests/images/bg/tv.jpg';
import ToggleButton from './ToggleButton';




const Cable = (props) => {
  const history = useHistory()
  const [meterName, setMeterName] = useState('')
  const [planAmount, setPlanAmount] = useState('')
  const [cables, setCables] = useState([]);
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const [selected, setSelected] = useState(false)
  const [smartError, setSmartError] = useState('')
  const [ formData, setFormData] = useState({
    amount:'', 
    phoneNumber:"", 
     network:'',
     cable:'',
     smartCardNumber:'',
     variation_code:''
     

  })

  const { user: {isAuthenticated} } = props;


  
    
  const handleInputChange = (e) => {
    const {name,value} = e.target
    setFormData({
      ...formData, 
      [name]:value
    })

 
    // console.log(e.target.value);
    // setPlanAmount(cables.find(v => v.variation_code === value)?.variation_amount )
  }
  const handleChange = (e) => {
    const {name,value} = e.target
    setFormData({
      ...formData, 
      [name]:value
    })

  console.log(e.target.value);
    setPlanAmount(cables.find(v => v.variation_code === value)?.variation_amount )
  }

  const handleNetworkSelect = (e) => {
    
    const {name,value} = e.target
    setFormData({
      ...formData, 
      [name]:value
    })
    console.log(name, value);
    
    // console.log(e.target.value);
    // setPlanAmount(cables.find(value => value.variation_code === value)?.variation_amount )
  }

  const dstv = async () => {
    try {
       await axios.get(`https://sandbox.vtpass.com/api/service-variations?serviceID=dstv`)
       .then((response) => {
              //handle success
             const data = response.data.content.varations
             setCables(data);
             console.log(data)
         })
    } catch (error) {
      //handle error
     console.log(error)
    }
  }
  const gotv = async () => {
    try {
       await axios.get(`https://sandbox.vtpass.com/api/service-variations?serviceID=gotv`)
       .then((response) => {
              //handle success
             const data = response.data.content.varations
             setCables(data);
             console.log(data)
         })
    } catch (error) {
      //handle error
     console.log(error)
    }
  }
  const startimes = async () => {
    try {
       await axios.get(`https://sandbox.vtpass.com/api/service-variations?serviceID=startimes`)
       .then((response) => {
              //handle success
             const data = response.data.content.varations
             setCables(data);
             console.log(data)
         })
    } catch (error) {
      //handle error
     console.log(error)
    }
  }
    

  useEffect(() => {
    dstv();
    startimes();
      gotv();
  }, [])

  useEffect(() => {

    setFormData({
      ...formData, 
      amount:planAmount
    })
     
   }, [planAmount])
 


  console.log(formData.amount)
 console.log(planAmount)

     // VERIFY SMART CARD NUMBER
  const handleVerify = (e) => {

    const username = "plus27solutions@gmail.com";
    const password =  "blessing1";
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')


    const params = {
      billersCode:formData.smartCardNumber,
      serviceID:formData.network
    }
    axios.post(`https://sandbox.vtpass.com/api/merchant-verify`, params,  {
      headers: {
        'Authorization': `Basic ${token}`
      },
    })
    .then((response) => {
      //handle success
      const err = response.data.content.error
      setSmartError(err)
     
      const meterName = response.data.content.Customer_Name
      setMeterName(meterName)
 console.log(meterName)
    
  })
  .catch((error) => {
    //handle error
    console.log(error)
  })
  }


  const deposit_hash =(params)=>
  {
      var serialize = JSON.stringify(params);
      var hash = btoa(serialize);
      return hash;
  }
  

 
    const handleDirectPay = (e) => {
       if(!isAuthenticated){
    history.push('/login')
    return
  }

      try {
       const params = {

        email:user.email,
        serviceID:formData.network,
        billersCode:formData.smartCardNumber,
        variation_code:formData.variation_code,
        amount:formData.amount,
       phone:formData.phoneNumber,
       service_type:"tv"
        
        // email:user.email,
        //       billersCode:formData.smartCardNumber,
        //       serviceID:formData.network,
        //       phone:formData.phoneNumber,
        //       variation_code:formData.variation_code,
        //       amount:formData.amount,
        //       service_type:'tv'
      }
      window.location.href= 'https://desolate-shore-36733.herokuapp.com/api/pay?h='+deposit_hash(params)
     return;
   } catch (error) {
     //handle error
    console.log(error)
   }
 }

 const handleSubmit = (e) => {
  if(selected){
   handleDirectPay();
    console.log("direct payment")
  }else{
    console.log("wallet payment")
  }

}








  //  const handleSubmit = (e) => {
  //   if(formData.phoneNumber && formData.network && formData.smartCardNumber && formData.variation_code){
  //     if(!user){
  //       history.push('/login')
  //       return
  //     }

  //     const username = "plus27solutions@gmail.com";
  //     const password =  "blessing1";
  //     const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
      
  //     const params = {
  //       request_id:uuidv4(),
  //       email:user.email,
  //       billersCode:formData.smartCardNumber,
  //       serviceID:formData.network,
  //       phone:formData.phoneNumber,
  //       variation_code:formData.variation_code,
  //       amount:formData.amount,
  //       service_type:'tv'
  //     }
  //     axios.post(`https://sandbox.vtpass.com/api/pay`, params,   {
  //       headers: {
  //         'Authorization': `Basic ${token}`
  //       },
  //     })
  //     .then((response) => {
  //       //handle success
  //       const data = response.data
  //       swal("Success!", "Your Payment was Successful", "success");
  //       setFormData({...formData, amount:"", phoneNumber:"", network:null, smartCardNumber:''})
  //       setPlanAmount('')
  //       setCables([])
  //       console.log(response)
      
  //   })
  //   .catch((error) => {
  //     //handle error
  //     swal("Error!", "Your Payment wasn't Successful", "warning");
  //     console.log(error)
  //   })
  //   }else{
  //     swal("Error!", "Ensure All details are Filled Correctly ", "error");
  //   }
    
  // }

  
  const handleReset = () => {
    setFormData({...formData, amount:"", phoneNumber:"", network:null, smartCardNumber:''})
    setCables([])
    setPlanAmount('')
  }

  const handleValidation =(e)=>{
       
    if(formData.meterNumber  && formData.phoneNumber && formData.network && formData.meterType && !isAuthenticated ){
      if(!isAuthenticated){
        history.push('/login')
        return 
      }}else{
        swal("Error!", "Ensure network is selected, phone number and amount are valid", "error");
      }
  
  }
    
     
        return ( 
          <>

        
        <div id="content">
    
        <div className="bg-secondary pt-4 pb-5" style={{backgroundImage:`url('${tv}')`}}>
          <div className="container">
          
          <ul className="nav primary-nav alternate">
          <li className="nav-item"> <a className="nav-link serviceNav" href="/"><span><i className="fa fa-phone"></i></span> Airtime</a> </li>
          <li className="nav-item"> <a className="nav-link serviceNav" href="/data"><span><i className="fa fa-wifi"></i></span> Internet Data</a> </li>
          <li className="nav-item"> <a className="nav-link serviceNav" href="/electricity"><span><i className="fa fa-lightbulb"></i></span>Electricity  Bill</a> </li>
          <li className="nav-item"> <a className="nav-link serviceNav" href="/education"><span><i className="fa fa-graduation-cap"></i></span> Educational Payment </a> </li>
          <li className="nav-item"> <a className="nav-link serviceNav  actives" href="/cable"><span><i className="fa fa-plug"></i></span> TV Subscription
</a> </li>
          <li className="nav-item"> <a className="nav-link serviceNav" href="#"><span><i className="fa fa-lightbulb"></i></span> Insurance Payment</a> </li>
          <li className="nav-item"> <a className="nav-link serviceNav" href="/sendmoney"><span><i className="fa fa-bank"></i></span> Bank Transfer</a> </li>
        </ul> 

          <div className=" shadow-md rounded px-4 pt-4 pb-3"  style={{color:'silver'}}>
              <h2 className="text-4 mb-3" style={{color:'silver'}}>CableTv Recharge</h2>
                <form id="cableTvRecharge" method="post">
                <div className="mb-3">
                <div className="custom-control custom-radio custom-control-inline">
                <input id="dstv" name="network" value='dstv' className="custom-control-input" required type="radio"  checked={formData.network === "dstv"} onClick={() => dstv()} onChange={handleNetworkSelect}  />
                  <label className="custom-control-label" for='dstv' >DSTV</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                <input id="gotv" name="network" value='gotv' className="custom-control-input" required type="radio"  checked={formData.network === "gotv"} onClick={() => gotv()} onChange={handleNetworkSelect}  />
                  <label className="custom-control-label" for="gotv" >GOTV</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input id="startimes" name="network" className="custom-control-input" value='startimes' required type="radio"  checked={formData.network === "startimes"} onClick={() => startimes()}  onChange={handleNetworkSelect}  />
                  <label className="custom-control-label" for='startimes' >STARTIMES</label>
                </div>
                 
                <div className="custom-control custom-radio custom-control-inline"  >
                  <label htmlFor="payment" className='mr-3' style={{ color:'#fff'}}>Payment Mode</label>
                <ToggleButton 
                selected={selected}
                toggleSelected={() => {
                  setSelected(!selected);}}
                
                  
                />
                
                
                </div>
              </div>
                <div className="form-row">
                  <div className="col-md-6 col-lg-3 form-group">
                      <select className="custom-select" id="variation_code" name='variation_code' required onChange={handleChange}  value={formData.variation_code} >
                        <option value="">Select Your Plan</option>
                        {
                               cables.map(cable =>  <option key={cable.variation_code} value={cable.variation_code} >{cable.name} </option>)
                             }
                      </select>
                    </div>
                  <div className="col-md-6 col-lg-3 form-group">
                    <input type="text" className="form-control" data-bv-field="number" id="smartCardNumber" name='smartCardNumber' value={formData.smartCardNumber} required placeholder="Enter Smart card Number" onChange={handleChange} onInput={handleVerify}/>
                    <p style={{color:'red'}}>{smartError}</p>
                    <p style={{color:'green', marginBottom:-20,marginTop:-20, textAlign:'center'}} >{meterName}</p>
                  </div>
                  <div className="col-md-6 col-lg-3 form-group">
                    <input type="text" className="form-control" data-bv-field="number" id="phoneNumber" name='phoneNumber' value={formData.phoneNumber} required placeholder="Enter Phone Number" onChange={handleChange}/>
                  </div>
                  <div className="col-md-6 col-lg-3 form-group">
                  
                    <input className="form-control" id="amount" placeholder="Enter Amount" required type="text" onChange={handleInputChange}  value={planAmount} />
                  </div>

                  <div className="col-md-6 col-lg-2 form-group">

                  { formData.smartCardNumber  && formData.phoneNumber && formData.network && formData.variation_code ?(
              <button className="btn btn-success btn-lg btn-block" type="button"  onClick={handleSubmit}>Pay Now</button>):
              (<button className="btn btn-secondary btn-lg btn-block" type="button" onClick={handleValidation} >Pay Now</button>)
              } 
                  </div>
                  <div className="col-md-6 col-lg-2 form-group">
                  <button className="btn btn-danger btn-lg btn-block" type="button" onClick={handleReset}>Cancel</button>
                  </div>
                  </div>
                </form>
                
          </div>
        </div>
        </div>
        
       
        <div className="bg-light shadow-md pt-5 pb-4">
          <div className="container">
            <div className="owl-carousel owl-theme banner">
              <div className="item"><a href="#"><img className="img-fluid rounded" src="images/slider/small-banner-1.jpg" alt="banner" /></a></div>
              <div className="item"><a href="#"><img className="img-fluid rounded" src="images/slider/small-banner-2.jpg" alt="banner" /></a></div>
              <div className="item"><a href="#"><img className="img-fluid rounded" src="images/slider/small-banner-3.jpg" alt="banner" /></a></div>
              <div className="item"><a href="#"><img className="img-fluid rounded" src="images/slider/small-banner-6.jpg" alt="banner" /></a></div>
            </div>
          </div>
        </div>

        <div className="section py-4">
          <div className="container">
            <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
              <li className="nav-item"> <a className="nav-link active" id="mobile-recharge-tab" data-toggle="tab" href="#mobile-recharge" role="tab" aria-controls="mobile-recharge" aria-selected="true">CableTv Bill Payment</a> </li>
              <li className="nav-item"> <a className="nav-link" id="billpayment-tab" data-toggle="tab" href="#billpayment" role="tab" aria-controls="billpayment" aria-selected="false">Best Offers</a> </li>
              <li className="nav-item"> <a className="nav-link" id="why-quickai-tab" data-toggle="tab" href="#why-quickai" role="tab" aria-controls="why-quickai" aria-selected="false">Pay Online</a> </li>
            </ul>
            <div className="tab-content my-3" id="myTabContent">
              <div className="tab-pane fade show active" id="mobile-recharge" role="tabpanel" aria-labelledby="mobile-recharge-tab">
                <p>Instant Online CableTv Bill Payment Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. Mediocrem qualisque in has. Enim utroque perfecto id mei, ad eam tritani labores facilisis, ullum sensibus no cum. Eius eleifend in quo. At mei alia iriure propriae.</p>
                <p>Partiendo voluptatibus ex cum, sed erat fuisset ne, cum ex meis volumus mentitum. Alienum pertinacia maiestatis ne eum, verear persequeris et vim. Mea cu dicit voluptua efficiantur, nullam labitur veritus sit cu. Eum denique omittantur te, in justo epicurei his, eu mei aeque populo. Cu pro facer sententiae, ne brute graece scripta duo. No placerat quaerendum nec, pri alia ceteros adipiscing ut. Quo in nobis nostrum intellegebat. Ius hinc decore erroribus eu, in case prima exerci pri. Id eum prima adipisci. Ius cu minim theophrastus, legendos pertinacia an nam.</p>
                </div>
              <div className="tab-pane fade" id="billpayment" role="tabpanel" aria-labelledby="billpayment-tab">
                <p>Partiendo voluptatibus ex cum, sed erat fuisset ne, cum ex meis volumus mentitum. Alienum pertinacia maiestatis ne eum, verear persequeris et vim. Mea cu dicit voluptua efficiantur, nullam labitur veritus sit cu. Eum denique omittantur te, in justo epicurei his, eu mei aeque populo. Cu pro facer sententiae, ne brute graece scripta duo. No placerat quaerendum nec, pri alia ceteros adipiscing ut. Quo in nobis nostrum intellegebat. Ius hinc decore erroribus eu, in case prima exerci pri. Id eum prima adipisci. Ius cu minim theophrastus, legendos pertinacia an nam.</p>
                <p>Instant Online mobile recharge Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. Mediocrem qualisque in has. Enim utroque perfecto id mei, ad eam tritani labores facilisis, ullum sensibus no cum. Eius eleifend in quo. At mei alia iriure propriae.</p>
              </div>
              <div className="tab-pane fade" id="why-quickai" role="tabpanel" aria-labelledby="why-quickai-tab">
                <p>Cu pro facer sententiae, ne brute graece scripta duo. No placerat quaerendum nec, pri alia ceteros adipiscing ut. Quo in nobis nostrum intellegebat. Ius hinc decore erroribus eu, in case prima exerci pri. Id eum prima adipisci. Ius cu minim theophrastus, legendos pertinacia an nam.</p>
                <p>Partiendo voluptatibus ex cum, sed erat fuisset ne, cum ex meis volumus mentitum. Alienum pertinacia maiestatis ne eum, verear persequeris et vim. Mea cu dicit voluptua efficiantur, nullam labitur veritus sit cu. Eum denique omittantur te, in justo epicurei his, eu mei aeque populo.</p>
                <p>Instant Online mobile recharge Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. Mediocrem qualisque in has. Enim utroque perfecto id mei, ad eam tritani labores facilisis, ullum sensibus no cum. Eius eleifend in quo. At mei alia iriure propriae.</p>
              </div>
            </div>
          </div>
        </div>
        
          <section className="section bg-light shadow-md px-5">
          <div className="container">
            <h2 className="text-9 font-weight-600 text-center">Refer & Earn</h2>
            <p className="lead text-center mb-5">Refer your friends and earn up to ₦20.</p>
            <div className="row">
              <div className="col-md-4">
                <div className="featured-box style-4">
                  <div className="featured-box-icon bg-secondary text-light rounded-circle"> <i className="fas fa-bullhorn"></i> </div>
                  <h3>You Refer Friends</h3>
                  <p className="text-3">Share your referral link with friends. They get ₦10.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="featured-box style-4">
                  <div className="featured-box-icon bg-secondary text-light rounded-circle"> <i className="fas fa-sign-in-alt"></i> </div>
                  <h3>Your Friends Register</h3>
                  <p className="text-3">Your friends Register with using your referral link.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="featured-box style-4">
                  <div className="featured-box-icon bg-secondary text-light rounded-circle"> <i className="fas fa-dollar-sign"></i> </div>
                  <h3>Earn You</h3>
                  <p className="text-3">You get ₦20. You can use these credits to take recharge.</p>
                </div>
              </div>
            </div>
            <div className="text-center pt-4"> <a href="#" className="btn btn-outline-primary">Get Started Earn</a> </div>  
        </div>
        </section>
        
        {/* <section className="section pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-center"> <img className="img-fluid" alt="" src="images/app-mobile-2.png"/> </div>
              <div className="col-lg-6 text-center text-lg-left">
                <h2 className="text-9 font-weight-600 my-4">Download Our Quickai</h2> <br/> <h2 className="d-none d-lg-inline-block">
                  Mobile App Now</h2>
                <p className="lead">Download our app for the fastest, most convenient way to Recharge & Bill Payment, Booking and more....</p>
                <div className="pt-3"> <a className="mr-4" href=""><img alt="" src="images/app-store.png"/></a><a href=""><img alt="" src="images/google-play-store.png"/></a> </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
      <Footer />
      </>
      
       );
    }

    Cable.propTypes = {
      user: PropTypes.object.isRequired,
    };

    const mapStateToProps = (state) => ({
      user: state.user
     });




    



export default  connect(mapStateToProps)(Cable);

 
