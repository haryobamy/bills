import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Footer from '../components/Footer';

import Header from '../components/Header';




const Cable = (props) => {
  const [cables, setCables] = useState([]);
  const [ formData, setFormData] = useState({
    amount:'', 
    phoneNumber:"", 
     network:'',
     cable:'',
     smartCardNumber:'',
     variation_code:''
     

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
  }, [])
  useEffect(() => {
    gotv();
  }, [])
  useEffect(() => {
    startimes();
  }, [])


  // useEffect(() => {


  //   let Cable = formData.network;
  //   Cable =+ ( formData.network === formData.network) ? 'gotv' : 'startimes'
    
  //   const url = `service-variations?serviceID=${Cable}`;
    
  //   axios.get(`https://sandbox.vtpass.com/api/${url}`)
  //    .then((response) => {
  //      //handle success
  //      const data = response.data.content.varations
  //      setCables(data);
  //      console.log(data)
     
  //  })
  //  .catch((error) => {
  //    //handle error
  //    console.log(error)
  //  })

  //    return () => {
  //     setCables([])
  //    }
  //  }, [props])


     // VERIFY SMART CARD NUMBER
  const handleVerify = (e) => {
    const params = {
      billersCode:formData.smartCardNumber,
      serviceID:formData.network
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
    
    const params = {
      request_id:'',
      billersCode:formData.smartCardNumber,
      serviceID:formData.network,
      phone:formData.phoneNumber,
      variation_code:formData.variation_code,
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
          <Header />
        
        <div id="content">
    
        <div className="bg-secondary pt-4 pb-5">
          <div className="container">
          
          <ul className="nav primary-nav alternate">
          <li className="nav-item"> <a className="nav-link" href="/mobile"><span><i className="fa fa-phone"></i></span> Airtime</a> </li>
          <li className="nav-item"> <a className="nav-link" href="/data"><span><i className="fa fa-wifi"></i></span> Internet Data</a> </li>
          <li className="nav-item"> <a className="nav-link" href="/electricity"><span><i className="fa fa-lightbulb"></i></span>Electricity  Bill</a> </li>
          <li className="nav-item"> <a className="nav-link" href="/education"><span><i className="fa fa-phone"></i></span> Educational Payment </a> </li>
          <li className="nav-item"> <a className="nav-link active" href="/cable"><span><i className="fa fa-plug"></i></span> TV Subscription
</a> </li>
          <li className="nav-item"> <a className="nav-link" href="#"><span><i className="fa fa-lightbulb"></i></span> Insurance Payment</a> </li>
          <li className="nav-item"> <a className="nav-link" href="/sendmoney"><span><i className="fa fa-bank"></i></span> Bank Transfer</a> </li>
        </ul> 

          <div className="bg-light shadow-md rounded px-4 pt-4 pb-3">
              <h2 className="text-4 mb-3">CableTv Recharge</h2>
                <form id="cableTvRecharge" method="post">
                <div className="mb-3">
                <div className="custom-control custom-radio custom-control-inline">
                <input id="dstv" name="network" value='dstv' className="custom-control-input" required type="radio"  onClick={() => dstv()} onChange={handleChange} />
                  <label className="custom-control-label" for='dstv' >DSTV</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                <input id="gotv" name="network" value='gotv' className="custom-control-input" required type="radio" onClick={() => gotv()} onChange={handleChange} />
                  <label className="custom-control-label" for="gotv" >GOTV</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input id="startimes" name="network" className="custom-control-input" value='startimes' required type="radio" onClick={() => startimes()}  onChange={handleChange} />
                  <label className="custom-control-label" for='startimes' >STARTIMES</label>
                </div>
              </div>
                <div className="form-row">
                  <div className="col-md-6 col-lg-3 form-group">
                      <select className="custom-select" id="variation_code" name='variation_code' required onChange={handleChange}  value={formData.variation_code} >
                        <option value="">Select Your Operator</option>
                        {
                               cables.map(cable =>  <option key={cable.variation_code} value={cable.variation_code} >{cable.name} </option>)
                             }
                      </select>
                    </div>
                  <div className="col-md-6 col-lg-3 form-group">
                    <input type="text" className="form-control" data-bv-field="number" id="smartCardNumber" name='smartCardNumber' value={formData.smartCardNumber} required placeholder="Enter Smart card Number" onChange={handleChange} onInput={handleVerify}/>
                  </div>
                  <div className="col-md-6 col-lg-3 form-group">
                    <input type="text" className="form-control" data-bv-field="number" id="phoneNumber" name='phoneNumber' value={formData.phoneNumber} required placeholder="Enter Phone Number" onChange={handleChange}/>
                  </div>
                  <div className="col-md-6 col-lg-3 form-group">
                  
                    <input className="form-control" id="amount" placeholder="Enter Amount" required type="text"  value={formData.variation_code} />
                  </div>

                  <div className="col-md-6 col-lg-2 form-group">
                  <button className="btn btn-success btn-block" type="button" onClick={handleSubmit}>Continue</button>
                  </div>
                  <div className="col-md-6 col-lg-2 form-group">
                  <button className="btn btn-danger btn-block" type="reset">Cancel</button>
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
            <div className="text-center pt-4"> <a href="#" className="btn btn-outline-primary">Get Started Earn</a> </div>  
        </div>
        </section>
        
        <section className="section pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-center"> <img className="img-fluid" alt="" src="images/app-mobile-2.png"/> </div>
              <div className="col-lg-6 text-center text-lg-left">
                <h2 className="text-9 font-weight-600 my-4">Download Our Quickai</h2> <br/> <h2>className="d-none d-lg-inline-block">
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

 
export default Cable;