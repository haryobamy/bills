import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import axios from 'axios'
import Header from '../components/Header';
import { useHistory } from 'react-router-dom';





const Electricity = (props) => {
  const history = useHistory()
  const user = JSON.parse(localStorage.getItem('user'))
  const [ formData, setFormData] = useState({
    amount:'', 
    phoneNumber:"",
    meterNumber:'', 
     network:'',
     meterType:''

  })


  
  const handleChange = (e) => {
    const {name,value} = e.target
    setFormData({
      ...formData, 
      [name]:value
    })
    // console.log(name, value);
    
    console.log(e.target.value);

  }

  // VERIFY METER NUMBER
  const handleVerify = (e) => {
    const params = {
      billersCode:formData.meterNumber,
      serviceID:formData.network,
      type:formData.meterType
    }
    axios.post(`https://sandbox.vtpass.com/api/merchant-verify`, params)
    .then((response) => {
      //handle success
      const data = response.data
      console.log(data)
    
  })
  .catch((error) => {
    //handle error
    console.log(error)
  })
  }


  const handleSubmit = (e) => {
    if(!user){
      history.push('/login')
      return
    }
    
    const params = {
      request_id:'',
      billersCode:formData.meterNumber,
      serviceID:formData.network,
      phone:formData.phoneNumber,
      variation_code:formData.meterType,
      amount:formData.amount
    }
    axios.post(`https://sandbox.vtpass.com/api/pay`, params)
    .then((response) => {
      //handle success
      const data = response.data
      console.log(data)
    
  })
  .catch((error) => {
    //handle error
    console.log(error)
  })
  console.log(formData);
  }
        return ( 
          <>
          

            <div id="content">
    
    <div className="bg-secondary pt-4 pb-5">
      <div className="container">
      
      <ul className="nav primary-nav alternate">
          <li className="nav-item"> <a className="nav-link" href="/"><span><i className="fa fa-phone"></i></span> Airtime</a> </li>
          <li className="nav-item"> <a className="nav-link" href="/data"><span><i className="fa fa-wifi"></i></span> Internet Data</a> </li>
          <li className="nav-item"> <a className="nav-link active" href="/electricity"><span><i className="fa fa-lightbulb"></i></span>Electricity  Bill</a> </li>
          <li className="nav-item"> <a className="nav-link" href="/education"><span><i className="fa fa-phone"></i></span> Educational Payment </a> </li>
          <li className="nav-item"> <a className="nav-link" href="/cable"><span><i className="fa fa-plug"></i></span> TV Subscription
</a> </li>
          <li className="nav-item"> <a className="nav-link" href="#"><span><i className="fa fa-lightbulb"></i></span> Insurance Payment</a> </li>
          <li className="nav-item"> <a className="nav-link" href="/sendmoney"><span><i className="fa fa-bank"></i></span> Bank Transfer</a> </li>
        </ul> 
        
   
      <div className="bg-light shadow-md rounded px-4 pt-4 pb-3">
      <h2 class="text-4 mb-3">Pay Your Electricity Bill</h2>
            <form id="gasBill" method="post">
            <div className="mb-3">
              <div className="custom-control custom-radio custom-control-inline">
                <input id="ikeja-electric" name="network" value='ikeja-electric' className="custom-control-input" required type="radio" onChange={handleChange}   />
                  <label className="custom-control-label" for='ikeja-electric' >IKEDC</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                <input id="eko-electric" name="network" value='eko-electric' className="custom-control-input" required type="radio"  onChange={handleChange} />
                  <label className="custom-control-label" for="eko-electric" >EKEDC</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input id="kano-electric" name="network" className="custom-control-input" value='kano-electric' required type="radio"   onChange={handleChange} />
                  <label className="custom-control-label" for='kano-electric' >KEDCO</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input id="portharcourt-electric" name="network" value='portharcourt-electric' className="custom-control-input" required type="radio" onChange={handleChange}    />
                  <label className="custom-control-label" for='portharcourt-electric' >PHED</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                <input id="jos-electric" name="network" value='jos-electric' className="custom-control-input" required type="radio"  onChange={handleChange} />
                  <label className="custom-control-label" for='jos-electric' >JED</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                <input id="ibadan-electric" name="network" value='ibadan-electric' className="custom-control-input" required type="radio" onChange={handleChange}  />
                  <label className="custom-control-label" for="ibadan-electric" >IBEDC</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input id="kaduna-electric" name="network" className="custom-control-input" value='kaduna-electric' required type="radio" onChange={handleChange}  />
                  <label className="custom-control-label" for='kaduna-electric' >KAEDCO</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input id="abuja-electric" name="network" value='abuja-electric' className="custom-control-input" required type="radio" onChange={handleChange}   />
                  <label className="custom-control-label" for='abuja-electric' >AEDC</label>
                </div>
              </div>
              <div class="form-row">
              <div class="col-md-6 col-lg-3 form-group">
                  <select class="custom-select" id="meteType" required name='meterType' onChange={handleChange} value={formData.meterType} >
                    <option value="">Select Meter Type</option>
                    <option  >Postpaid</option>
                    <option>Prepaid</option>
                  </select>
              </div>
              <div class="col-md-6 col-lg-3 form-group">
                <input type="text" class="form-control" data-bv-field="number" id="meterNumber" name='meterNumber' value={formData.meterNumber} required placeholder="Enter Meter Number" onInput={handleVerify} onChange={handleChange} />
              </div>
              <div class="col-md-6 col-lg-3 form-group">
                <input class="form-control" id="amount" autoComplete='off' placeholder="Enter Amount" name='amount' value={formData.amount} onChange={handleChange} required type="text"/>
              </div>
              <div class="col-md-6 col-lg-3 form-group">
                <input class="form-control" id="phoneNumber" placeholder="Enter Phone Number " name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} required type="text"/>
              </div>
              <div class="col-md-6 col-lg-2 form-group">
              <button class="btn btn-success btn-block btn-lg" type="button" onClick={handleSubmit} >Continue</button>
              </div >
              <div class="col-md-6 col-lg-2 form-group" >
              <button class="btn btn-danger btn-block btn-lg" type="reset">Cancel</button>
              </div>
              </div>
            </form>            
      </div>
    </div>
    </div>
    
    <section className="py-5">
    <div className="container">
     <div className="row">
     	
        <div className="col-lg-5">
            <div className="accordion" id="accordionDefault">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0"> <a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Electricity Bill Payment</a> </h5>
                </div>
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionDefault">
                  <div className="card-body">
                    <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet.</p>
                    <p className="mb-0">Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Best Offers</a> </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionDefault">
                  <div className="card-body"> Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div>
                </div>
              </div>
            </div>
        </div>
        
     	<div className="col-lg-7">
          
          <div className="owl-carousel owl-theme slideshow single-slider">
        <div className="item"><a href="#"><img className="img-fluid rounded" src="images/slider/banner-6.jpg" alt="banner 6" /></a></div>
      </div>
        </div>
     </div>
      </div>
    </section>
    
    
      <section className="section bg-light shadow-md px-5">
      <div className="container">
        <h2 className="text-9 font-weight-600 text-center">Refer & Earn</h2>
        <p className="lead text-center mb-5">Refer your friends and earn up to $20.</p>
        <div className="row">
          <div className="col-md-4">
            <div className="featured-box style-4">
              <div className="featured-box-icon bg-primary text-light rounded-circle"> <i className="fas fa-bullhorn"></i> </div>
              <h3>You Refer Friends</h3>
              <p className="text-3">Share your referral link with friends. They get $10.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="featured-box style-4">
              <div className="featured-box-icon bg-primary text-light rounded-circle"> <i className="fas fa-sign-in-alt"></i> </div>
              <h3>Your Friends Register</h3>
              <p className="text-3">Your friends Register with using your referral link.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="featured-box style-4">
              <div className="featured-box-icon bg-primary text-light rounded-circle"> <i className="fas fa-dollar-sign"></i> </div>
              <h3>Earn You</h3>
              <p className="text-3">You get $20. You can use these credits to take recharge.</p>
            </div>
          </div>
        </div>
        <div className="text-center pt-4"> <a href="/Login" className="btn btn-outline-primary">Get Started Earn</a> </div>  
    </div>
    </section>
    
    
    <section className="section pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-center"> <img className="img-fluid" alt="" src="images/app-mobile-2.png"/> </div>
          <div className="col-lg-6 text-center text-lg-left">
            <h2 className="text-9 font-weight-600 my-4">Download Our Quickai </h2><br/> <h2 className="d-none d-lg-inline-block">
              Mobile App Now</h2>
            <p className="lead">Download our app for the fastest, most convenient way to Recharge & Bill Payment, Booking and more....</p>
            <div className="pt-3"> <a className="mr-4" href=""><img alt="" src="images/app-store.png"/></a><a href=""><img alt="" src="images/google-play-store.png"/></a> </div>
          </div>
        </div>
      </div>
    </section>
    
  </div>
  <Footer />
  </>
         );
    }

export default Electricity ;