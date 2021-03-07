import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'



import banner1 from '../assests/images/slider/banner1.jpg';
import { Carousel } from 'bootstrap';
import Login from './Login';
import { useHistory } from 'react-router-dom';



const Home = (props) => {
  const history = useHistory()
  const user = JSON.parse(localStorage.getItem('user'))
  const [ formData, setFormData] = useState({
    amount:'', 
    phoneNumber:"", 
     network:'',
  })

 
   



  const handleSubmit = (e) => {
    if(!user){
      history.push('/login')
      return
    }
    const params = {
      request_id:'',
      serviceID:formData.network,
      phone:formData.phoneNumber,
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
          <div className="hero-bg" style={{backgroundImage:"url('./images/bg/image-6.jpg')"}}></div>
        <div className="hero-content py-2 py-lg-4 my-2 my-md-4">
        {/* <div className="container mt-5"> */}

            <div className="container">
       {/* Secondary Navigation */}
      
      <ul className="nav primary-nav alternate">
          <li className="nav-item"> <a className="nav-link active" href="/"><span><i className="fa fa-phone"></i></span> Airtime</a> </li>
          <li className="nav-item"> <a className="nav-link" href="/data"><span><i className="fa fa-wifi"></i></span> Internet Data</a> </li>
          <li className="nav-item"> <a className="nav-link" href="/electricity"><span><i className="fa fa-lightbulb"></i></span>Electricity  Bill</a> </li>
          <li className="nav-item"> <a className="nav-link" href="/education"><span><i className="fa fa-phone"></i></span> Educational Payment </a> </li>
          <li className="nav-item"> <a className="nav-link" href="/cable"><span><i className="fa fa-plug"></i></span> TV Subscription
</a> </li>
          <li className="nav-item"> <a className="nav-link" href="#"><span><i className="fa fa-lightbulb"></i></span> Insurance Payment</a> </li>
          <li className="nav-item"> <a className="nav-link" href="/sendmoney"><span><i className="fa fa-bank"></i></span> Bank Transfer</a> </li>
        </ul> 
        
        {/* Secondary Navigation end  */}
        
       {/* Mobile Recharge */}
      
      <div className="bg-secondary shadow-md rounded px-4 pt-4 pb-3">
            <h2 className="text-4 mb-3">Mobile Recharge</h2>
            <form id="recharge-bill" method="post">
           
              <div className="mb-3">
              <div className="custom-control custom-radio custom-control-inline">
                <input id="mtn" name="network" value='mtn' className="custom-control-input" required type="radio"   onClick={handleNetworkSelect} />
                  <label className="custom-control-label" for='mtn' >MTN</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                <input id="airtel" name="network" value='airtel' className="custom-control-input" required type="radio"  onChange={handleNetworkSelect} />
                  <label className="custom-control-label" for="airtel" >AIRTEL</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input id="etisalat" name="network" className="custom-control-input" value='etisalat' required type="radio"  onChange={handleNetworkSelect} />
                  <label className="custom-control-label" for='etisalat' >9MObile</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input id="glo" name="network" value='glo' className="custom-control-input" required type="radio"   onChange={handleNetworkSelect} />
                  <label className="custom-control-label" for='glo' >GLO</label>
                </div>
              </div>
              <div className="form-row">
              <div className="col-md-6 col-lg-4 form-group">
                <input type="text" className="form-control" data-bv-field="number" id="phoneNumber"  name='phoneNumber' required placeholder="Enter Mobile Number" onChange={handleChange} />
              </div>
              <div className="col-md-6 col-lg-4 form-group">
                <input className="form-control" id="amount" name='amount'required placeholder="Enter Amount"  type="text" onChange={handleChange} />
              </div>
              {/* {user && (<div className="col-md-6 col-lg-2 form-group">
              <button className="btn btn-success btn-lg btn-block" type="button"  onClick={handleSubmit}>Continue</button>
              </div>)} */}
              <div className="col-md-6 col-lg-2 form-group">
              <button className="btn btn-success btn-lg btn-block" type="button"  onClick={handleSubmit}>Continue</button>
              </div>
              
              {/* <div className={`col-md-${user?'6':'12'} col-lg-${user?'2':'4'} form-group`} >
              <button className="btn btn-danger btn-lg btn-block" type="reset">Cancle</button>
              </div> */}
              <div className="col-md-6 col-lg-2 form-group" >
              <button className="btn btn-danger btn-lg btn-block" type="reset">Cancle</button>
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
                    <p className="text-muted">CEO & Founder</p>
                    {/* <ul className="social-icons social-icons-sm d-inline-flex">
                      <li className="social-icons-facebook"><a data-toggle="tooltip" href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                      <li className="social-icons-twitter"><a data-toggle="tooltip" href="http://www.twitter.com/" target="_blank" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                      <li className="social-icons-google"><a data-toggle="tooltip" href="http://www.google.com/" target="_blank" title="Google"><i className="fab fa-google"></i></a></li>
                    </ul> */}
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="team"> <img className="img-fluid rounded" alt="" src="images/team/leader-2.jpg"/>
                    <h3>James Maxwell</h3>
                    <p className="text-muted">Co-Founder</p>
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
                    <p className="text-muted">Co-Founder</p>
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
                    <p className="text-muted">Support</p>
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

 
export default Home;