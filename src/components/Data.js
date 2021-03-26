import React, {useState, useEffect } from 'react';
import Footer from '../components/Footer';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';




const Data = (props) => {
  const history = useHistory()
  const user = JSON.parse(localStorage.getItem('user'))
  const [planAmount, setPlanAmount] = useState('')
  const [service, setService] = useState([])
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  const [ formData, setFormData] = useState({
    amount:'', 
    phoneNumber:"", 
     network:'',
     variation_code:'',
     

  })

 

  
    // setUsername('plus27solutions@gmail.com');
    // setPassword('blessing1');
  




  const mtnData = async () => {
    try {
       await axios.get(`https://sandbox.vtpass.com/api/service-variations?serviceID=mtn-data`)
       .then((response) => {
              //handle success
             const data = response.data.content.varations
             setService(data);
             console.log(data)
         })
    } catch (error) {
      //handle error
     console.log(error)
    }
  }
  const airtelData = async () => {
    try {
       await axios.get(`https://sandbox.vtpass.com/api/service-variations?serviceID=airtel-data`)
       .then((response) => {
              //handle success
             const data = response.data.content.varations
             setService(data);
             console.log(data)
         })
    } catch (error) {
      //handle error
     console.log(error)
    }
  }
  const gloData = async () => {
    try {
       await axios.get(`https://sandbox.vtpass.com/api/service-variations?serviceID=glo-data`)
       .then((response) => {
              //handle success
             const data = response.data.content.varations
             setService(data);
             console.log(data)
         })
    } catch (error) {
      //handle error
     console.log(error)
    }
  }
  const etisalatData = async () => {
    try {
       await axios.get(`https://sandbox.vtpass.com/api/service-variations?serviceID=etisalat-data`)
       .then((response) => {
              //handle success
             const data = response.data.content.varations
             setService(data);
             console.log(data)
         })
    } catch (error) {
      //handle error
     console.log(error)
    }
  }
  const smileData = async () => {
    try {
       await axios.get(`https://sandbox.vtpass.com/api/service-variations?serviceID=smile-direct`)
       .then((response) => {
              //handle success
             const data = response.data.content.varations
             setService(data);
             console.log(data)
         })
    } catch (error) {
      //handle error
     console.log(error)
    }
  }

  useEffect(() => {
    mtnData();
    airtelData();
    gloData();
    etisalatData();
    smileData();
  }, [])

 
  

  useEffect(() => {

    setFormData({
      ...formData, 
      amount:planAmount
    })
  
     
   }, [planAmount])

   const handleChange = (e) => {
    const {name,value} = e.target
    setFormData({
      ...formData, 
      [name]:value
    })
    console.log(name, value);
  }


  const handleNetworkSelect = (e) => {
    
    const {name,value} = e.target
    setFormData({
      ...formData, 
      [name]:value
    })
    console.log(name, value);
    
    console.log(e.target.value);
    setPlanAmount(service.find(v => v.variation_code === value)?.variation_amount )

  }
  // const handlePlanSelect = (e) => {

  //   const {name,value} = e.target
  //   setService({
  //     [name]:value
  //   })
    
  //   console.log('plan selected')
  // }


  
  


  const handleSubmit = (e) => {
    if(!user){
      history.push('/login')
      return
    }

    const username = 'plus27solutions@gmail.com'
    const password = 'blessing1'
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    
    const url = 'https://sandbox.vtpass.com/api/pay/'
      const params = {

        request_id:'',
        billersCode:formData.phoneNumber,
        serviceID:formData.network,
        phone:formData.phoneNumber,
        variation_code:formData.variation_code,
        amount:formData.variation_amount
      }
      axios.post( url, params)
      .then((response) => {
        //handle success
        const data = response.data
        swal("Success!", "Your Payment was Successful", "success");
        console.log(data)
      
    })
    .catch((error) => {
      //handle error
      swal("Error!", "Your Payment wasn't Successful", "warning");
      console.log(error)
    })
    console.log(formData);
    }
      
    


   

  //  const handleCheck = (e) => {
  //   setChecked(!checked)
  //    console.log('plan selected');
  //  }
 

  


  
        return (
           
          

         <>
        
        
    <div>
    <div className="bg-secondary pt-4 pb-5">
      <div className="container">
      
      <ul className="nav primary-nav alternate">
          <li className="nav-item"> <a className="nav-link serviceNav" href="/"><span><i className="fa fa-phone"></i></span> Airtime</a> </li>
          <li className="nav-item"> <a className="nav-link serviceNav actives" href="/data"><span><i className="fa fa-wifi"></i></span> Internet Data</a> </li>
          <li className="nav-item"> <a className="nav-link serviceNav" href="/electricity"><span><i className="fa fa-lightbulb"></i></span>Electricity  Bill</a> </li>
          <li className="nav-item"> <a className="nav-link serviceNav" href="/education"><span><i className="fa fa-graduation-cap"></i></span> Educational Payment </a> </li>
          <li className="nav-item"> <a className="nav-link serviceNav" href="/cable"><span><i className="fa fa-plug"></i></span> TV Subscription
</a> </li>
          <li className="nav-item"> <a className="nav-link serviceNav" href="#"><span><i className="fa fa-lightbulb"></i></span> Insurance Payment</a> </li>
          <li className="nav-item"> <a className="nav-link serviceNav" href="/sendmoney"><span><i className="fa fa-bank"></i></span> Bank Transfer</a> </li>
        </ul> 


      <div className="bg-light shadow-md rounded px-4 pt-4 pb-3">
          <h2 className="text-4 mb-3">Pay your Broadbanad Bill</h2>
            <form id="form-data" method="post">
            <div className="mb-3">
                <div className="custom-control custom-radio custom-control-inline">
                <input id="mtn-data" name="network" value='mtn-data' className="custom-control-input" required type="radio" onClick={ () => mtnData()}  onChange={handleNetworkSelect} />
                  <label className="custom-control-label" for='mtn-data' >MTN</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                <input id="airtel-data" name="network" value='airtel-data' className="custom-control-input" required type="radio" onClick={ () => airtelData()}  onChange={handleNetworkSelect} />
                  <label className="custom-control-label" for="airtel-data" >AIRTEL</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input id="9mobile-data" name="network" className="custom-control-input" value='9mobile-data' required type="radio" onClick={ () => etisalatData()} onChange={handleNetworkSelect} />
                  <label className="custom-control-label" for='9mobile-data' >9MObile</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input id="glo-data" name="network" value='glo-data' className="custom-control-input" required type="radio"  onClick={() =>  gloData()} onChange={handleNetworkSelect} />
                  <label className="custom-control-label" for='glo-data' >GLO</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input id="smile-direct" name="network" value='smile-direct' className="custom-control-input" required type="radio" onClick={() =>  smileData()}  onChange={handleNetworkSelect} />
                  <label className="custom-control-label" for='smile-direct' >SMILE</label>
                </div>
              </div>

            <div className="form-row">
              <div className="col-md-6 col-lg-3 form-group">
              <select id="variation_code" name='variation_code' data-style="custom-select bg-transparent border-0" data-container="body" data-live-search="true" className="selectpicker form-control bg-transparent" required onChange={handleNetworkSelect}  value={formData.variation_code} >
                            <option>Select Your  Plan</option>
                            {
                               service.map(network =>  <option key={network.variation_code} value={network.variation_code}  >{network.name} </option>)
                            }
                             
                            </select>
                </div>
              <div className="col-md-6 col-lg-3 form-group">
                <input type="text" className="form-control" data-bv-field="phoneNumber" id="phoneNumber" name='phoneNumber' required placeholder="Enter Telephone Number" onChange={handleChange}/>
              </div>
              <div className="col-md-6 col-lg-3 form-group">
                <a href="#" data-target="#view-plans" data-toggle="modal" className="view-plans-link">View Plans</a>
                <input className="form-control" id="amount" placeholder="Enter Amount"  required type="text" onChange={handleChange} value={planAmount} />
              </div>
              <div className="col-md-6 col-lg-3 form-group">
              <button className="btn btn-primary btn-block btn-lg" type="button" onClick={handleSubmit}>Continue to Pay Bill</button>
              </div>
              </div>
            </form>
      </div>
    </div>
    </div>

    {/* <div className="bg-light shadow-md pt-5 pb-4">
      <div className="container">
        <div className="owl-carousel owl-theme banner">
          <div className="item"><a href="#"><img className="img-fluid rounded" src="images/slider/small-banner-2.jpg" alt="banner" /></a></div>
          <div className="item"><a href="#"><img className="img-fluid rounded" src="images/slider/small-banner-3.jpg" alt="banner" /></a></div>
          <div className="item"><a href="#"><img className="img-fluid rounded" src="images/slider/small-banner-1.jpg" alt="banner" /></a></div>
          <div className="item"><a href="#"><img className="img-fluid rounded" src="images/slider/small-banner-5.jpg" alt="banner" /></a></div>
        </div>
      </div>

    </div> */}
    <div className="section py-4">
      <div className="container">
        <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
          <li className="nav-item"> <a className="nav-link actives" id="mobile-recharge-tab" data-toggle="tab" href="#mobile-recharge" role="tab" aria-controls="mobile-recharge" aria-selected="true">Broadband Bill Payment</a> </li>
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
    
      <section className="section bg-light shadow-md px-5">
      <div className="container">
        <h2 className="text-9 font-weight-600 text-center">Refer & Earn</h2>
        <p className="lead text-center mb-5">Refer your friends and earn up to ₦20.</p>
        <div className="row">
          <div className="col-md-4">
            <div className="featured-box style-4">
              <div className="featured-box-icon bg-primary text-light rounded-circle"> <i className="fas fa-bullhorn"></i> </div>
              <h3>You Refer Friends</h3>
              <p className="text-3">Share your referral link with friends. They get ₦10.</p>
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
              <p className="text-3">You get ₦20. You can use these credits to take recharge.</p>
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
            <h2 className="text-9 font-weight-600 my-4">Download Our Quickai </h2><br/> <h2 className="d-none d-lg-inline-block">
              Mobile App Now</h2>
            <p className="lead">Download our app for the fastest, most convenient way to Recharge & Bill Payment, Booking and more....</p>
            <div className="pt-3"> <a className="mr-4" href=""><img alt="" src="images/app-store.png"/></a><a href=""><img alt="" src="images/google-play-store.png"/></a> </div>
          </div>
        </div>
      </div>
    </section>


    
    <div id="view-plans" className="modal fade" role="dialog" aria-hidden="true">
  <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Browse Plans</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
      </div>
      <div className="modal-body">
        {/* <form className="form-row mb-4 mb-sm-2" method="post">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="form-group">
              <select className="custom-select" required="">
                <option value="">Select Your Operator</option>
                
              </select>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="form-group">
              <select className="custom-select" required="">
                <option value="">Select Your Circle</option>
                <option>1st Circle</option>
                <option>2nd Circle</option>
                <option>3rd Circle</option>
                <option>4th Circle</option>
                <option>5th Circle</option>
                <option>6th Circle</option>
                <option>7th Circle</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="form-group">
              <select className="custom-select" required="">
                <option value="">All Plans</option>
                <option>Topup</option>
                <option>Full Talktime</option>
                <option>Validity Recharge</option>
                <option>SMS</option>
                <option>Data</option>
                <option>Unlimited Talktime</option>
                <option>STD</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <button className="btn btn-primary btn-block" type="submit">View Plans</button>
          </div>
        </form> */}
        <div className="plans">
          <div className="table-responsive-md">
          {
                               service.map(network =>  <table  className="table table-hover border"  key={network.variation_code} value={network.variation_code} >
                                 
                                 <tbody>
                                   <tr>
                                   <td className="text-5 text-primary text-center align-middle"> ₦{network.variation_amount} <span className="text-1 text-muted d-block">Amount</span></td>
                                   <td className="text-3 text-center align-middle">{network.name} <span className="text-1 text-muted d-block">Plan-Validity</span></td>
                                   {/* <td className="align-middle"> <a data-target='#variation_code' className="btn btn-sm btn-outline-primary shadow-none text-nowrap" type="button" onClick={handlePlanSelect}>Recharge Now </a> </td> */}
                                   </tr>
                                 </tbody>
                                 
                                  </table>)
                            }


{/* 
            <table className="table table-hover border" >
              <tbody>
                <tr>
                {
                               service.map(network =>  <td key={network.variation_code} value={network.variation_code} >{network.variation_amount} <span></span> amount</td>)
                             }
                  <td className="text-5 text-primary text-center align-middle"> <span className="text-1 text-muted d-block">Amount</span></td>
                  <td className="text-3 text-center align-middle">8 <span className="text-1 text-muted d-block">Talktime</span></td>
                  <td className="text-3 text-center align-middle">7 Days <span className="text-1 text-muted d-block">Validity</span></td>
                  <td className="text-1 text-muted align-middle">Talktime $8 & 2 Local & National SMS & Free SMS valid for 2 day(s)</td>
                  <td className="align-middle"><button className="btn btn-sm btn-outline-primary shadow-none text-nowrap" type="submit">Recharge Now</button></td>
                </tr>
                <tr>
                  <td className="text-5 text-primary text-center align-middle">$15 <span className="text-1 text-muted d-block">Amount</span></td>
                  <td className="text-3 text-center align-middle">13 <span className="text-1 text-muted d-block">Talktime</span></td>
                  <td className="text-3 text-center align-middle">15 Days <span className="text-1 text-muted d-block">Validity</span></td>
                  <td className="text-1 text-muted align-middle">Regular Talktime</td>
                  <td className="align-middle"><button className="btn btn-sm btn-outline-primary shadow-none text-nowrap" type="submit">Recharge Now</button></td>
                </tr>
                <tr>
                  <td className="text-5 text-primary text-center align-middle">$50 <span className="text-1 text-muted d-block">Amount</span></td>
                  <td className="text-3 text-center align-middle">47 <span className="text-1 text-muted d-block">Talktime</span></td>
                  <td className="text-3 text-center align-middle">28 Days <span className="text-1 text-muted d-block">Validity</span></td>
                  <td className="text-1 text-muted align-middle">47 Local Vodafone min free </td>
                  <td className="align-middle"><button className="btn btn-sm btn-outline-primary shadow-none text-nowrap" type="submit">Recharge Now</button></td>
                </tr>
                <tr>
                  <td className="text-5 text-primary text-center align-middle">$100 <span className="text-1 text-muted d-block">Amount</span></td>
                  <td className="text-3 text-center align-middle">92 <span className="text-1 text-muted d-block">Talktime</span></td>
                  <td className="text-3 text-center align-middle">28 Days <span className="text-1 text-muted d-block">Validity</span></td>
                  <td className="text-1 text-muted align-middle">Local min 92 & 10 Local & National SMS & Free SMS valid for 
                    7 day(s).</td>
                  <td className="align-middle"><button className="btn btn-sm btn-outline-primary shadow-none text-nowrap" type="submit">Recharge Now</button></td>
                </tr>
                <tr>
                  <td className="text-5 text-primary text-center align-middle">$150 <span className="text-1 text-muted d-block">Amount</span></td>
                  <td className="text-3 text-center align-middle">143 <span className="text-1 text-muted d-block">Talktime</span></td>
                  <td className="text-3 text-center align-middle">60 Days <span className="text-1 text-muted d-block">Validity</span></td>
                  <td className="text-1 text-muted align-middle">Talktime $143 & 50 Local & National SMS & Free SMS valid for 
                    15 day(s).</td>
                  <td className="align-middle"><button className="btn btn-sm btn-outline-primary shadow-none text-nowrap" type="submit">Recharge Now</button></td>
                </tr>
                <tr>
                  <td className="text-5 text-primary text-center align-middle">$220 <span className="text-1 text-muted d-block">Amount</span></td>
                  <td className="text-3 text-center align-middle">220 <span className="text-1 text-muted d-block">Talktime</span></td>
                  <td className="text-3 text-center align-middle">28 Days <span className="text-1 text-muted d-block">Validity</span></td>
                  <td className="text-1 text-muted align-middle">Full Talktime</td>
                  <td className="align-middle"><button className="btn btn-sm btn-outline-primary shadow-none text-nowrap" type="submit">Recharge Now</button></td>
                </tr>
                <tr>
                  <td className="text-5 text-primary text-center align-middle">$250 <span className="text-1 text-muted d-block">Amount</span></td>
                  <td className="text-3 text-center align-middle">250 <span className="text-1 text-muted d-block">Talktime</span></td>
                  <td className="text-3 text-center align-middle">28 Days <span className="text-1 text-muted d-block">Validity</span></td>
                  <td className="text-1 text-muted align-middle">Full Talktime + 50 SMS per day for 7 days.</td>
                  <td className="align-middle"><button className="btn btn-sm btn-outline-primary shadow-none text-nowrap" type="submit">Recharge Now</button></td>
                </tr>
                <tr>
                  <td className="text-5 text-primary text-center align-middle">$300 <span className="text-1 text-muted d-block">Amount</span></td>
                  <td className="text-3 text-center align-middle">301 <span className="text-1 text-muted d-block">Talktime</span></td>
                  <td className="text-3 text-center align-middle">64 Days <span className="text-1 text-muted d-block">Validity</span></td>
                  <td className="text-1 text-muted align-middle">Full Talktime</td>
                  <td className="align-middle"><button className="btn btn-sm btn-outline-primary shadow-none text-nowrap" type="submit">Recharge Now</button></td>
                </tr>
                <tr>
                  <td className="text-5 text-primary text-center align-middle">$410 <span className="text-1 text-muted d-block">Amount</span></td>
                  <td className="text-3 text-center align-middle">0 <span className="text-1 text-muted d-block">Talktime</span></td>
                  <td className="text-3 text-center align-middle">28 Days <span className="text-1 text-muted d-block">Validity</span></td>
                  <td className="text-1 text-muted align-middle">Unlimited Local,STD & Roaming calls</td>
                  <td className="align-middle"><button className="btn btn-sm btn-outline-primary shadow-none text-nowrap" type="submit">Recharge Now</button></td>
                </tr>
                <tr>
                  <td className="text-5 text-primary text-center align-middle">$501 <span className="text-1 text-muted d-block">Amount</span></td>
                  <td className="text-3 text-center align-middle">510 <span className="text-1 text-muted d-block">Talktime</span></td>
                  <td className="text-3 text-center align-middle">180 Days <span className="text-1 text-muted d-block">Validity</span></td>
                  <td className="text-1 text-muted align-middle">Full Talktime + 100 SMS per day for 28 days.</td>
                  <td className="align-middle"><button className="btn btn-sm btn-outline-primary shadow-none text-nowrap" type="submit">Recharge Now</button></td>
                </tr>
                <tr>
                  <td className="text-5 text-primary text-center align-middle">$799 <span className="text-1 text-muted d-block">Amount</span></td>
                  <td className="text-3 text-center align-middle">820 <span className="text-1 text-muted d-block">Talktime</span></td>
                  <td className="text-3 text-center align-middle">250 Days <span className="text-1 text-muted d-block">Validity</span></td>
                  <td className="text-1 text-muted align-middle">Full Talktime + 100 SMS per day for 84 days.</td>
                  <td className="align-middle"><button className="btn btn-sm btn-outline-primary shadow-none text-nowrap" type="submit">Recharge Now</button></td>
                </tr>
                <tr>
                  <td className="text-5 text-primary text-center align-middle">$999 <span className="text-1 text-muted d-block">Amount</span></td>
                  <td className="text-3 text-center align-middle">1099 <span className="text-1 text-muted d-block">Talktime</span></td>
                  <td className="text-3 text-center align-middle">356 Days <span className="text-1 text-muted d-block">Validity</span></td>
                  <td className="text-1 text-muted align-middle">Full Talktime + 100 SMS per day for 90 days.</td>
                  <td className="align-middle"><button className="btn btn-sm btn-outline-primary shadow-none text-nowrap" type="submit">Recharge Now</button></td>
                </tr>
              </tbody>
            </table> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
     
    
  </div>
  <Footer />
  </>
  
        );
    }

export default Data;


 