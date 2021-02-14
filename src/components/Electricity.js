import React, { Component } from 'react';





class Electricity  extends Component {
    state = {  }
    render() { 
        return ( 

            <div id="content">
    
    <div className="bg-secondary pt-4 pb-5">
      <div className="container">
      
      <ul className="nav primary-nav alternate">
          <li className="nav-item"> <a className="nav-link active" href="/mobile"><span><i className="fas fa-mobile-alt"></i></span> Airtime</a> </li>
          <li className="nav-item"> <a className="nav-link" href="/data"><span><i className="fas fa-tv"></i></span> Internet Data</a> </li>
          <li className="nav-item"> <a className="nav-link" href="/electricity"><span><i className="fas fa-wifi"></i></span>Electricity  Bill</a> </li>
          <li className="nav-item"> <a className="nav-link" href="/education"><span><i className="fas fa-phone"></i></span> Educational Payment </a> </li>
          <li className="nav-item"> <a className="nav-link" href="/cable"><span><i className="fas fa-plug"></i></span> TV Subscription
</a> </li>
          <li className="nav-item"> <a className="nav-link" href="#"><span><i className="fas fa-lightbulb"></i></span> Insurance Payment</a> </li>
          <li className="nav-item"> <a className="nav-link" href="#"><span><i className="fas fa-subway"></i></span> Bank Transfer</a> </li>
        </ul> 
        
   
      <div className="bg-light shadow-md rounded px-4 pt-4 pb-3">
      <h2 class="text-4 mb-3">Pay Your Electricity Bill</h2>
            <form id="gasBill" method="post">
              <div class="form-row">
              <div class="col-md-6 col-lg-3 form-group">
                  <select class="custom-select" id="operator" required="">
                    <option value="">Select Your Operator</option>
                    <option>1st Operator</option>
                    <option>2nd Operator</option>
                    <option>3rd Operator</option>
                    <option>4th Operator</option>
                    <option>5th Operator</option>
                    <option>6th Operator</option>
                    <option>7th Operator</option>
                  </select>
                </div>
              <div class="col-md-6 col-lg-3 form-group">
                <input type="text" class="form-control" data-bv-field="number" id="consumerNumber" required placeholder="Enter Consumer Number"/>
              </div>
              <div class="col-md-6 col-lg-3 form-group">
                <input class="form-control" id="amount" placeholder="Enter Amount" required type="text"/>
              </div>
              <div class="col-md-6 col-lg-3 form-group">
              <button class="btn btn-primary btn-block btn-lg" type="submit">Continue</button>
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
        <div className="text-center pt-4"> <a href="#" className="btn btn-outline-primary">Get Started Earn</a> </div>  
    </div>
    </section>
    
    
    <section className="section pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-center"> <img className="img-fluid" alt="" src="images/app-mobile-2.png"/> </div>
          <div className="col-lg-6 text-center text-lg-left">
            <h2 className="text-9 font-weight-600 my-4">Download Our Quickai </h2><br/> <h2>className="d-none d-lg-inline-block">
              Mobile App Now</h2>
            <p className="lead">Download our app for the fastest, most convenient way to Recharge & Bill Payment, Booking and more....</p>
            <div className="pt-3"> <a className="mr-4" href=""><img alt="" src="images/app-store.png"/></a><a href=""><img alt="" src="images/google-play-store.png"/></a> </div>
          </div>
        </div>
      </div>
    </section>
    
  </div>
         );
    }
}
 
export default Electricity ;