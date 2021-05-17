import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import swal from 'sweetalert';
import { v4 as uuidv4 } from 'uuid';
import { PaystackButton } from 'react-paystack'
import home from '../assests/images/bg/home.jpg';




import banner1 from '../assests/images/slider/banner1.jpg';
import { Carousel } from 'bootstrap';
import Login from './Login';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ToggleButton from './ToggleButton';



const Home = (props) => {
  const history = useHistory()
  // const [email, setEmail] = useState('')
  const [selected, setSelected] = useState(false)
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const [ formData, setFormData] = useState({
    amount:'', 
    phoneNumber:"", 
     network:'',
  })
 
  const { user: {isAuthenticated} } = props


const handleValidation =(e)=>{
  
  if(formData.amount && formData.phoneNumber && formData.network && !isAuthenticated){
    if(!isAuthenticated){
      history.push('/login')
      return 
    }}else{
      swal("Error!", "Ensure network is selected, phone number and amount are valid", "error");
    }

}

  
 

  const handleWalletPay = (e) => {
  
    if(formData.amount && formData.phoneNumber && formData.network){
      if(!isAuthenticated){
        history.push('/login')
        return
      }
  
      
      
      const url = 'https://desolate-shore-36733.herokuapp.com/api/airtime'
      const params = {
        
        service_id:formData.network,
        phone:formData.phoneNumber,
        amount:formData.amount,
        
        
      }
      axios.post( url, params)
      .then((response) => {
        //handle success
        const data = response.data
        if(response.data.status == '200'){
           swal("Success!", `${response.data.message}`, "success");
        }
        else{
            swal("Error!", 'Insufficient Fund', "warning")
        }
        // if(response.data.status === '201'){
        // }
       
        setFormData({...formData, amount:"", phoneNumber:"", network:null})
        console.log(response)
      
    })
    .catch((error) => {
      //handle error
      swal("Error!", "Your Payment wasn't Successful", "warning");
      
      console.log(error)
    })
    }else{
      swal("Error!", "Ensure network is selected, phone number and amount are valid", "error");
    }
    
  console.log(formData);
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
            phone:formData.phoneNumber,
            amount:formData.amount,
            service_type:'airtime'
    }
    window.location.href = 'https://desolate-shore-36733.herokuapp.com/api/pay?h='+deposit_hash(params)
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
   handleWalletPay();
    console.log("wallet payment")
  }

}

  


  const handleReset = () => {
    setFormData({...formData, amount:"", phoneNumber:"", network:null})
  }
    


  const handleNetworkSelect = (e) => {
    
    const {name,value} = e.target
    setFormData({
      ...formData, 
      [name]:value
    })
    console.log(name, value);
    
    console.log(e.target.value);

  }

  const handleChange = (e) => {
    const {name,value} = e.target
    setFormData({
      ...formData, 
      [name]:value
    })
    console.log(name, value);
  } 

  // const {user}= props;
        return ( 
         
        
  

          <>

          

        
          
            
          <div>
          <section className="page-header page-header-text-light py-0">
        <div className="hero-wrap py-5">
          
          <div className="hero-mask opacity-7 bg-dark"></div>
          <div className="hero-bg" style={{backgroundImage:`url('${home}')`}}></div>
        <div className="hero-content py-2 py-lg-4 my-2 my-md-4">
        {/* <div className="container mt-5"> */}

            <div className="container">
       {/* Secondary Navigation */}
      
       <ul className="nav primary-nav alternate">
          <li className="nav-item"> <a className="nav-link serviceNav actives" href="/"><span><i className="fa fa-phone"></i></span> Airtime</a> </li>
          <li className="nav-item"> <a className="nav-link serviceNav" href="/data"><span><i className="fa fa-wifi"></i></span> Internet Data</a> </li>
          <li className="nav-item"> <a className="nav-link serviceNav" href="/electricity"><span><i className="fa fa-lightbulb"></i></span>Electricity  Bill</a> </li>
          <li className="nav-item"> <a className="nav-link serviceNav" href="/education"><span><i className="fa fa-graduation-cap"></i></span> Educational Payment </a> </li>
          <li className="nav-item"> <a className="nav-link serviceNav  " href="/cable"><span><i className="fa fa-plug"></i></span> TV Subscription
</a> </li>
          <li className="nav-item"> <a className="nav-link serviceNav" href="#"><span><i className="fa fa-lightbulb"></i></span> Insurance Payment</a> </li>
          <li className="nav-item"> <a className="nav-link serviceNav" href="/sendmoney"><span><i className="fa fa-bank"></i></span> Bank Transfer</a> </li>
        </ul> 
        
        {/* Secondary Navigation end  */}
        
       {/* Mobile Recharge */}
      
      <div className="bg-secondary shadow-md rounded px-4 pt-4 pb-3">
            <h2 className="text-4 mb-3">Mobile Recharge</h2>
            <form id="recharge-bill" method="post">
           
              <div className="mb-3">
              <div className='row'>
                <div className='col-md-6'>
              <div className="custom-control custom-radio custom-control-inline">
                <input id="mtn" name="network" value='mtn' className="custom-control-input" required type="radio"  checked={formData.network === "mtn"}  onClick={handleNetworkSelect} />
                  <label className="custom-control-label" for='mtn' >MTN</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                <input id="airtel" name="network" value='airtel' className="custom-control-input" required type="radio" checked={formData.network === "airtel"}   onChange={handleNetworkSelect} />
                  <label className="custom-control-label" for="airtel" >AIRTEL</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input id="etisalat" name="network" className="custom-control-input" value='etisalat' checked={formData.network === "etisalat"}  required type="radio"  onChange={handleNetworkSelect} />
                  <label className="custom-control-label" for='etisalat' >9MObile</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input id="glo" name="network" value='glo' className="custom-control-input" required type="radio" checked={formData.network === "glo"}   onChange={handleNetworkSelect} />
                  <label className="custom-control-label" for='glo' >GLO</label>
                </div>
                </div>
               

                 
                <div className='offset-md-3 col-md-3'>
                
                <div className="custom-control custom-radio custom-control-inline"  >
                  <label htmlFor="payment" className='mr-3' style={{ color:'#fff'}}>Payment Mode</label>
                <ToggleButton 
                selected={selected}
                toggleSelected={() => {
                  setSelected(!selected);}}
                />
                </div>
                </div>
                
                
                </div>
              </div>
              <div className="form-row">
              <div className="col-md-6 col-lg-4 form-group">
                <input type="text" className="form-control" data-bv-field="number" id="phoneNumber"  name='phoneNumber'  placeholder="Enter Mobile Number" onChange={handleChange} value={formData.phoneNumber} required />
              </div>
              <div className="col-md-6 col-lg-4 form-group">
                <input className="form-control" id="amount" name='amount'  placeholder="Enter Amount"  type="text" value={formData.amount} onChange={handleChange} required/>
              </div>
              {/* {user && (<div className="col-md-6 col-lg-2 form-group">
              <button className="btn btn-success btn-lg btn-block" type="button"  onClick={handleSubmit}>Continue</button>
              </div>)} */}
              <div className="col-md-6 col-lg-2 form-group">
              {/* <button className="btn btn-success btn-lg btn-block" type="button"  onClick={handleSubmit}>Continue</button> */}

                            
             {  formData.amount && formData.phoneNumber && formData.network ?(
              <button className="btn btn-success btn-lg btn-block" type="button"  onClick={handleSubmit}>Pay Now</button>):
              (<button className="btn btn-secondary btn-lg btn-block" type="button" onClick={handleValidation} >Pay Now</button>)
              } 
            
              
            
              </div>
              
              {/* <div className={`col-md-${user?'6':'12'} col-lg-${user?'2':'4'} form-group`} >
              <button className="btn btn-danger btn-lg btn-block" type="reset">Cancle</button>
              </div> */}
              <div className="col-md-6 col-lg-2 form-group" >
              <button className="btn btn-danger btn-lg btn-block" type="button" onClick={handleReset}>Cancel</button>
              </div>
              </div>
            </form>
      {/* </div> Mobile Recharge end  */}
    </div>
    </div>
              {/* <div className="row align-items-center">
          <div className="col-12">
                  <ul className="breadcrumb justify-content-start mb-0">
                    <li><a href="index.html">Home</a></li>
                    <li className="active">Features</li>
                  </ul>
                </div>
                <div className="col-12">
                  <h1>Page Header Custom Background</h1>
            <p className="lead mb-0">with Transparent Header</p>
                </div>
              </div> */}
            {/* </div> */}
          </div>
         </div>
          </section>


        <div id="content">
          <div className="container">
            <div className="bg-light shadow-md rounded p-4">
              <h2 className="text-6">What is Quickai?</h2>
              <p>Instant Online recharge and Bill Payments Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec <a href="">magna imperdiet</a>. Mediocrem qualisque in has. Enim utroque perfecto id mei, ad eam tritani labores facilisis, ullum sensibus no cum. Eius eleifend in quo. At mei alia iriure propriae.</p>
              <p>Partiendo voluptatibus ex cum, sed erat fuisset ne, cum ex meis volumus mentitum. Alienum pertinacia maiestatis ne eum, verear persequeris et vim. Mea cu dicit voluptua efficiantur, nullam labitur veritus sit cu. Eum denique omittantur te, in justo epicurei his, eu mei aeque populo. Cu pro facer sententiae, ne brute graece scripta duo. No placerat quaerendum nec, pri alia <a href="">ceteros adipiscing</a> ut. Quo in nobis nostrum intellegebat. Ius hinc decore erroribus eu, in case prima exerci pri. Id eum prima adipisci. Ius cu minim theophrastus, legendos pertinacia an nam.</p>
              <div className="row mt-4 mb-2">
                <div className="col-md-4">
                  <div className="featured-box style-1">
                    <div className="featured-box-icon text-primary"> <i className="fa fa-thumbs-up"></i></div>
                    <h3>Why choose Us</h3>
                    <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="featured-box style-1">
                    <div className="featured-box-icon text-primary"> <i className="fa fa-paper-plane"></i> </div>
                    <h3>Our Mission</h3>
                    <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="featured-box style-1">
                    <div className="featured-box-icon text-primary"> <i className="fa fa-eye"></i> </div>
                    <h3>Our Vision</h3>
                    <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                  </div>
                </div>
              </div>
              <h2 className="text-6 mb-3">Leadership</h2>
              <div className="row">
                <div className="col-sm-6 col-md-3">
                  <div className="team"> <img className="img-fluid rounded" alt="" src="images/team/leader.jpg"/>
                    <h3>Neil Patel</h3>
                    
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="team"> <img className="img-fluid rounded" alt="" src="images/team/leader-2.jpg"/>
                    <h3>James Maxwell</h3>
                    {/* <p className="text-muted">Co-Founder</p> */}
                    {/* <ul className="social-icons social-icons-sm d-inline-flex">
                      <li className="social-icons-facebook"><a data-toggle="tooltip" href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                      <li className="social-icons-twitter"><a data-toggle="tooltip" href="http://www.twitter.com/" target="_blank" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                      <li className="social-icons-google"><a data-toggle="tooltip" href="http://www.google.com/" target="_blank" title="Google"><i className="fab fa-google"></i></a></li>
                    </ul> */}
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="team"> <img className="img-fluid rounded" alt="" src="images/team/leader-3.jpg"/>
                    <h3>Ruby Clinton</h3>
                    {/* <p className="text-muted">Co-Founder</p> */}
                    {/* <ul className="social-icons social-icons-sm d-inline-flex">
                      <li className="social-icons-facebook"><a data-toggle="tooltip" href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                      <li className="social-icons-twitter"><a data-toggle="tooltip" href="http://www.twitter.com/" target="_blank" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                      <li className="social-icons-google"><a data-toggle="tooltip" href="http://www.google.com/" target="_blank" title="Google"><i className="fab fa-google"></i></a></li>
                    </ul> */}
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="team"> <img className="img-fluid rounded" alt="" src="images/team/leader-4.jpg"/>
                    <h3>Miky Sheth</h3>
                    {/* <p className="text-muted">Support</p> */}
                    {/* <ul className="social-icons social-icons-sm d-inline-flex">
                      <li className="social-icons-facebook"><a data-toggle="tooltip" href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                      <li className="social-icons-twitter"><a data-toggle="tooltip" href="http://www.twitter.com/" target="_blank" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                      <li className="social-icons-google"><a data-toggle="tooltip" href="http://www.google.com/" target="_blank" title="Google"><i className="fab fa-google"></i></a></li>
                    </ul> */}
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

    
    const mapStateToProps = (state) => ({
      user: state.user
     });

     Home.prototype = {
      user: PropTypes.object.isRequired
}


 
export default connect(mapStateToProps)(Home);