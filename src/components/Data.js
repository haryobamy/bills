import React, {useState, useEffect } from 'react';
import Footer from '../components/Footer';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { v4 as uuidv4 } from 'uuid';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import internet from '../assests/images/bg/home.jpg';




const Data = (props) => {
  const history = useHistory()
  const [planAmount, setPlanAmount] = useState('')
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const [service, setService] = useState([])
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  const [ formData, setFormData] = useState({
    amount:'', 
    phoneNumber:"", 
     network:'',
     variation_code:'',
     

  })

  const { user: {isAuthenticated} } = props;
  


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
  


  const handleSubmit = (e) => {
    if(formData.variation_code && formData.phoneNumber && formData.network){
      if(!isAuthenticated){
        history.push('/login')
        return
      }

      // {
      //   headers: {
      //     'Authorization': `Basic ${token}`
      //   },
  
      // const username = "plus27solutions@gmail.com";
      
      // const password =  "blessing1";
      // const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
      
      const url = 'https://desolate-shore-36733.herokuapp.com/api/pay'
        const params = {
  
          request_id:uuidv4(),
          email:user.email,
          billersCode:formData.phoneNumber,
          serviceID:formData.network,
          phone:formData.phoneNumber,
          variation_code:formData.variation_code,
          amount:formData.variation_amount,
          service_type:'data'
        }
        axios.post( url, params)
        .then((response) => {
          //handle success
          const data = response.data
          swal("Success!", "Your Payment was Successful", "success");
          setFormData({...formData,  phoneNumber:"", network:null,variation_code:''})
          console.log(response)
        
      })
      .catch((error) => {
        //handle error
        swal("Error!", "Your Payment wasn't Successful", "warning");
        console.log(error)
      })
    }else{
      swal("Error!", "Ensure network plan  is selected, phone number and amount are valid", "error");
    }
    
    }

    
const handleValidation =(e)=>{
  e.persist();
  if(formData.amount && formData.phoneNumber && formData.network && !isAuthenticated){
    if(!user){
      history.push('/login')
      return 
    }}else{
      swal("Error!", "Ensure network is selected, phone number and amount are valid", "error");
    }

}
      
    


   

  //  const handleCheck = (e) => {
  //   setChecked(!checked)
  //    console.log('plan selected');
  //  }
 

  


  
        return (
           
          

         <>
        
        
    <div>
    <div className="bg-secondary pt-4 pb-5" style={{backgroundImage:`url('${internet}')`}}>
      <div className="container" >
      
      
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


      <div className="bg-secondary shadow-md rounded px-4 pt-4 pb-3"   >
          <h2 className="text-4 mb-3"  >Pay your Broadbanad Bill</h2>
            <form id="form-data" method="post">
            <div className="mb-3">
                <div className="custom-control custom-radio custom-control-inline">
                <input id="mtn-data" name="network" value='mtn-data' className="custom-control-input" required type="radio" checked={formData.network === "mtn-data"}  onClick={ () => mtnData()}  onChange={handleNetworkSelect} />
                  <label className="custom-control-label" for='mtn-data' >MTN</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                <input id="airtel-data" name="network" value='airtel-data' className="custom-control-input" required type="radio" checked={formData.network === "airtel-data"}  onClick={ () => airtelData()}  onChange={handleNetworkSelect} />
                  <label className="custom-control-label" for="airtel-data" >AIRTEL</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input id="9mobile-data" name="network" className="custom-control-input" value='9mobile-data' required type="radio" onClick={ () => etisalatData()} onChange={handleNetworkSelect} checked={formData.network === "9mobile-data"}  />
                  <label className="custom-control-label" for='9mobile-data' >9MObile</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input id="glo-data" name="network" value='glo-data' className="custom-control-input" required type="radio" checked={formData.network === "glo-data"}  onClick={() =>  gloData()} onChange={handleNetworkSelect} />
                  <label className="custom-control-label" for='glo-data' >GLO</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input id="smile-direct" name="network" value='smile-direct' className="custom-control-input" required type="radio" onClick={() =>  smileData()}  onChange={handleNetworkSelect} checked={formData.network === "smile-direct"}  />
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
                <input type="text" className="form-control" data-bv-field="phoneNumber" id="phoneNumber" name='phoneNumber' value={formData.phoneNumber} required placeholder="Enter Telephone Number" onChange={handleChange}/>
              </div>
              <div className="col-md-6 col-lg-3 form-group">
                <a href="#" data-target="#view-plans" data-toggle="modal" className="view-plans-link">View Plans</a>
                <input className="form-control" id="amount" placeholder="Enter Amount"  required type="text" onChange={handleChange} value={planAmount} />
              </div>
              <div className="col-md-6 col-lg-3 form-group">
              {  formData.amount && formData.phoneNumber && formData.network ?(
              <button className="btn btn-success btn-lg btn-block" type="button"  onClick={handleSubmit}>Pay Now</button>):
              (<button className="btn btn-secondary btn-lg btn-block" type="button" onClick={handleValidation} >Pay Now</button>)
              }
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
          <li className="nav-item"> <a className="nav-link active" id="mobile-recharge-tab" data-toggle="tab" href="#mobile-recharge" role="tab" aria-controls="mobile-recharge" aria-selected="true"  style={{color:'silver'}}>Broadband Bill Payment</a> </li>
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
            <h2 className="text-9 font-weight-600 my-4">Download Our Quickai </h2><br/> <h2 className="d-none d-lg-inline-block">
              Mobile App Now</h2>
            <p className="lead">Download our app for the fastest, most convenient way to Recharge & Bill Payment, Booking and more....</p>
            <div className="pt-3"> <a className="mr-4" href=""><img alt="" src="images/app-store.png"/></a><a href=""><img alt="" src="images/google-play-store.png"/></a> </div>
          </div>
        </div>
      </div>
    </section> */}


    
    <div id="view-plans" className="modal fade" role="dialog" aria-hidden="true">
  <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Browse Plans</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
      </div>
      <div className="modal-body">
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

    
    Data.propTypes = {
      user: PropTypes.object.isRequired,
    };

    const mapStateToProps = (state) => ({
      user: state.user
     });




    



export default  connect(mapStateToProps)(Data);




 