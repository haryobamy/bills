import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import axios from 'axios'
import Header from '../components/Header';





const Education = (props) => {
  const [waec, setWaec] = useState([]);
  const [ formData, setFormData] = useState({
    amount:'', 
    phoneNumber:"", 
     network:'',
     quantity:'',
     variation_code:''
     

  })

  const waceReg = async () => {
    try {
       await axios.get(`https://sandbox.vtpass.com/api/service-variations?serviceID=waec-registration`)
       .then((response) => {
              //handle success
             const data = response.data.content.varations
           setWaec(data);
             console.log(data)
         })
    } catch (error) {
      //handle error
     console.log(error)
    }
  }

  const wacePin = async () => {
    try {
       await axios.get(`https://sandbox.vtpass.com/api/service-variations?serviceID=waec`)
       .then((response) => {
              //handle success
             const data = response.data.content.varations
           setWaec(data);
             console.log(data)
         })
    } catch (error) {
      //handle error
     console.log(error)
    }
  }


useEffect(() => {
  waceReg();
 
}, [])
  
useEffect(() => {
  wacePin();
 
}, [])
  

 
 


  // useEffect(() => {
  //    let Cable = 'waec-registration';
  //   // if (network === 'waec-registration')
  //   // {
  //   //   let Cable = 'waec-registration';
  //   // } else{
  //   //   let Cable = 'waec';
  //   // }

  //   const url = `service-variations?serviceID=${Cable}`;
  //   axios.get(`https://sandbox.vtpass.com/api/${url}`)
  //    .then((response) => {
  //      //handle success
  //      const data = response.data.content.varations
  //      setWaec(data);
  //      console.log(data)
  //  })
  //  .catch((error) => {
  //    //handle error
  //    console.log(error)
  //  })
  //    return () => {
  //     setWaec([])
  //    }
  //  }, [props])



      const handleChange = (e) => {
        const {name,value} = e.target
        setFormData({
          ...formData, 
          [name]:value
        })
        // console.log(name, value);
        
        console.log(e.target.value);
    
      }

      const handleSubmit = (e) => {
    
        const params = {
          request_id:'',
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
          
            <div id="content">
    

    <div className="bg-secondary">
      <div className="container">
      <ul className="nav primary-nav alternate">
          <li className="nav-item"> <a className="nav-link" href="/"><span><i className="fa fa-phone"></i></span> Airtime</a> </li>
          <li className="nav-item"> <a className="nav-link" href="/data"><span><i className="fa fa-wifi"></i></span> Internet Data</a> </li>
          <li className="nav-item"> <a className="nav-link" href="/electricity"><span><i className="fa fa-lightbulb"></i></span>Electricity  Bill</a> </li>
          <li className="nav-item"> <a className="nav-link active" href="/education"><span><i className="fa fa-phone"></i></span> Educational Payment </a> </li>
          <li className="nav-item"> <a className="nav-link active" href="/cable"><span><i className="fa fa-plug"></i></span> TV Subscription
</a> </li>
          <li className="nav-item"> <a className="nav-link" href="#"><span><i className="fa fa-lightbulb"></i></span> Insurance Payment</a> </li>
          <li className="nav-item"> <a className="nav-link" href="/sendmoney"><span><i className="fa fa-bank"></i></span> Bank Transfer</a> </li>
        </ul>  
      </div>
    </div>
    
    <section className="container">
      <div className="bg-light shadow-md rounded p-4">
        <div className="row d-flex justify-content-center">
          


          
        
          <div className="col-lg-10 mb-4 mb-lg-0 justify-content-center">
            <h2 className="text-center mb-3">
                        WAEC Result Checker PIN</h2>
                        
                        <h6 className='text-center mb-3'>WAEC Result Checking PIN / Scratch Card</h6>
            <form id="broadbanadBill" method="post">

            <div className="mb-3">
                <div className="custom-control custom-radio custom-control-inline">
                <input id="waec" name="network" value='waec' className="custom-control-input" required type="radio"  onClick={() => wacePin()} onChange={handleChange} />
                  <label className="custom-control-label" for='waec' >WAEC Result Checker PIN</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                <input id="waec-registration" name="network" value='waec-registration' className="custom-control-input" required type="radio" onClick={() => waceReg()} onChange={handleChange} />
                  <label className="custom-control-label" for="waec-registration" >WAEC Registration PIN</label>
                </div>
              </div>

              <div className="form-group">
              <select id="variation_code" name='variation_code' data-style="custom-select bg-transparent border-0" data-container="body" data-live-search="true" className="selectpicker form-control bg-transparent" required onChange={handleChange}  value={formData.variation_code} >
                    <option >Please Select Exam Type</option>
                    {
                               waec.map(waecs =>  <option key={waecs.variation_code} value={waecs.variation_code} >{waecs.name} </option>)
                             }
                  </select>
                </div>
              <div className="form-group">
              <label className="input-item-label" for="phone-number">Phone Number</label>
                <input type="text" className="form-control" data-bv-field="number" id="phoneNumber" name='phoneNumber' value={formData.phoneNumber} required placeholder="Enter Telephone Number" onChange={handleChange}/>
              </div>
              <label className="input-item-label" >Amount</label>
              <div className="form-group input-group">
                <div className="input-group-prepend"> <span className="input-group-text">&#8358;</span> </div>
                <input className="form-control" id="amount" placeholder="Enter Amount" name='amount' required type="text" value={formData.variation_code} onChange={handleChange}/>
              </div>
              <div className="form-group">
              <label className="input-item-label">Email</label>
                <input type="text" className="form-control" data-bv-field="number" id="email" onChange={handleChange} required placeholder="Enter  Your Email"/>
              </div>
              <label className="input-item-label" >Quantity</label>
              <div className="form-group input-group">
                <div className="input-group-prepend">  </div>
                <input className="form-control" id="quantity" placeholder="Enter Quantity" name='quantity' value={formData.quantity} onChange={handleChange} required type="text"/>
              </div>
              
              <button className="btn btn-success btn-block btn-lg" type="button" onClick={handleSubmit}>Continue to Pay Bill</button>
              <button className="btn btn-danger btn-block btn-lg" type="reset">Cancel</button>
            </form>
          </div>


          

          
          
        
          
        </div>
      </div>
    </section>
    
    
    <div className="section pt-4 pb-3">
      <div className="container">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item"> <a className="nav-link active" id="mobile-recharge-tab" data-toggle="tab" href="#mobile-recharge" role="tab" aria-controls="mobile-recharge" aria-selected="true">Broadband Bill Payment</a> </li>
          <li className="nav-item"> <a className="nav-link" id="billpayment-tab" data-toggle="tab" href="#billpayment" role="tab" aria-controls="billpayment" aria-selected="false">Best Offers</a> </li>
          <li className="nav-item"> <a className="nav-link" id="why-quickai-tab" data-toggle="tab" href="#why-quickai" role="tab" aria-controls="why-quickai" aria-selected="false">Pay Online</a> </li>
        </ul>
        <div className="tab-content my-3" id="myTabContent">
          <div className="tab-pane fade show active" id="mobile-recharge" role="tabpanel" aria-labelledby="mobile-recharge-tab">
            <p>Instant Online mobile recharge Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. Mediocrem qualisque in has. Enim utroque perfecto id mei, ad eam tritani labores facilisis, ullum sensibus no cum. Eius eleifend in quo. At mei alia iriure propriae.</p>
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


    <div className="container">
      <section className="section bg-light shadow-md rounded px-5">
        <h2 className="text-9 font-weight-600 text-center">Refer & Earn</h2>
        <p className="lead text-center mb-5">Refer your friends and earn up to $20.</p>
        <div className="row">
          <div className="col-md-4">
            <div className="featured-box style-4">
              <div className="featured-box-icon bg-light-4 text-primary rounded-circle"> <i className="fas fa-bullhorn"></i> </div>
              <h3>You Refer Friends</h3>
              <p className="text-3">Share your referral link with friends. They get $10.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="featured-box style-4">
              <div className="featured-box-icon bg-light-4 text-primary rounded-circle"> <i className="fas fa-sign-in-alt"></i> </div>
              <h3>Your Friends Register</h3>
              <p className="text-3">Your friends Register with using your referral link.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="featured-box style-4">
              <div className="featured-box-icon bg-light-4 text-primary rounded-circle"> <i className="fas fa-dollar-sign"></i> </div>
              <h3>Earn You</h3>
              <p className="text-3">You get $20. You can use these credits to take recharge.</p>
            </div>
          </div>
        </div>
        <div className="text-center pt-4"> <a href="#" className="btn btn-primary">Get Started Earn</a> </div>
      </section>
    </div>
    
    <section className="section pb-0">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-lg-6 text-center"> <img className="img-fluid" alt="" src="images/app-mobile.png"/> </div>
          <div className="col-md-7 col-lg-6">
            <h2 className="text-9 font-weight-600 my-4">Download Our Quickai </h2><br/> <h2 className="d-none d-lg-inline-block">
              Mobile App Now</h2>
            <p className="lead">Download our app for the fastest, most convenient way to send Recharge.</p>
            <p>Ridens mediocritatem ius an, eu nec magna imperdiet. Mediocrem qualisque in has. Enim utroque perfecto id mei, ad eam tritani labores facilisis, ullum sensibus no cum. Eius eleifend in quo.</p>
            <ul>
              <li>Recharge</li>
              <li>Bill Payment</li>
              <li>Booking Online</li>
              <li>and much more.....</li>
            </ul>
            <div className="d-flex flex-wrap pt-2"> <a className="mr-4" href=""><img alt="" src="images/app-store.png"/></a><a href=""><img alt="" src="images/google-play-store.png"/></a> </div>
          </div>
        </div>
      </div>
    </section>
    
  </div>
  <Footer />
  </>
        );
    }

 
export default Education;