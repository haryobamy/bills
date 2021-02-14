import React, { Component } from 'react';




class Cable extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        
        <div id="content">
    
        <div className="bg-secondary pt-4 pb-5">
          <div className="container">
          
          <ul className="nav primary-nav alternate">
          <li className="nav-item"> <a className="nav-link active" href="/mobile"><span><i className="fa fa-mobile-alt"></i></span> Airtime</a> </li>
          <li className="nav-item"> <a className="nav-link" href="/data"><span><i className="fa fa-tv"></i></span> Internet Data</a> </li>
          <li className="nav-item"> <a className="nav-link" href="/electricity"><span><i className="fa fa-wifi"></i></span>Electricity  Bill</a> </li>
          <li className="nav-item"> <a className="nav-link" href="/education"><span><i className="fa fa-phone"></i></span> Educational Payment </a> </li>
          <li className="nav-item"> <a className="nav-link" href="/cable"><span><i className="fa fa-plug"></i></span> TV Subscription
</a> </li>
          <li className="nav-item"> <a className="nav-link" href="#"><span><i className="fa fa-lightbulb"></i></span> Insurance Payment</a> </li>
          <li className="nav-item"> <a className="nav-link" href="#"><span><i className="fa fa-subway"></i></span> Bank Transfer</a> </li>
        </ul> 

          <div className="bg-light shadow-md rounded px-4 pt-4 pb-3">
              <h2 className="text-4 mb-3">CableTv Recharge or Bill Payment</h2>
                <form id="cableTvRechargeBill" method="post">
                <div className="form-row">
                  <div className="col-md-6 col-lg-3 form-group">
                      <select className="custom-select" id="operator" required="">
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
                  <div className="col-md-6 col-lg-3 form-group">
                    <input type="text" className="form-control" data-bv-field="number" id="accountNumber" required placeholder="Enter Account Number"/>
                  </div>
                  <div className="col-md-6 col-lg-3 form-group">
                    <input className="form-control" id="amount" placeholder="Enter Amount" required type="text"/>
                  </div>
                  <div className="col-md-6 col-lg-3 form-group">
                  <button className="btn btn-primary btn-block" type="submit">Continue</button>
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
      
       );
    }
}
 
export default Cable;