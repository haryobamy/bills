import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';





const Deposit = () => {
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const history = useHistory();
  const [ formData, setFormData] = useState({
    amount:'', 
     

  })


  // const handleSubmit = (e) => {
   
  //   const params = {
  //     email:user.email,
  //     user_id:user.uid,
  //     amount:formData.amount,
  //     service_type:'wallet'
  //   }
  //   axios.post(`https://desolate-shore-36733.herokuapp.com/api/pay`, params)
  //   .then((response) => {
  //     //handle success
  //     const data = response.data
  //     swal("Success!", "Your Payment was Successful", "success");
  //     console.log(data)
    
  // })
  // .catch((error) => {
  //   //handle error
  //   swal("Error!", "Your Payment wasn't Successful", "warning");
  //   console.log(error)
  // })
  // console.log(formData);
  // }

  const deposit_hash =(params)=>
  {
      var serialize = JSON.stringify(params);
      var hash = btoa(serialize);
      return hash;
  }
  
  
  const handleSubmit = (e) => {
     try {
     const params = {
        email:user.email,
        user_id:user.id,
        amount:formData.amount,
        service_type:'wallet'

      //email:"test@gmail.com",
      //    serviceID:"dstv",
      //   billersCode:"1212121212",
      //   variation_code:"dstv1",
      //   amount:"1000.00",
      //  phone:"08011111111",
      //   service_type:"tv",


        // serviceID :'waec-registration',
        //     phone :'08011111111',
        //     variation_code :'waec-registration',
            
        //     amount :'1000',
        //     service_type :'education'

        
     }
     window.location.href= 'https://desolate-shore-36733.herokuapp.com/api/pay?h='+deposit_hash(params)
    return;
  } catch (error) {
    //handle error
   console.log(error)
  }
}
      
     
  const handleChange = (e) => {
    const {name,value} = e.target
    setFormData({
      ...formData, 
      [name]:value
    })
    // console.log(name, value);
    
    console.log(e.target.value);
    

  }



    return(
        <>

<div class="bg-white">
    <div class="container d-flex justify-content-center">
      <ul class="nav secondary-nav alternate">
        <li class="nav-item"> <a class="nav-link active" href="/deposit">Deposit</a></li>
        <li class="nav-item"> <a class="nav-link" href="/withdraw">Withdraw</a></li>
      </ul>
    </div>
  </div>
        <div id="content" class="py-4">
    <div class="container">
      <h2 class="font-weight-400 text-center mt-3 mb-4">Deposit Money</h2>
      <div class="row">
        <div class="col-md-8 col-lg-6 col-xl-5 mx-auto">              
          <div class="bg-light shadow-sm rounded p-3 p-sm-4 mb-4"> 
        
        <form id="form-send-money" method="post">
          <div className="form-group">
            <label for="youSend">Amount</label>
            <div className="input-group">
              <div className="input-group-prepend"> <span className="input-group-text">₦</span> </div>
              <input type="text" className="form-control" data-bv-field="youSend" id="youSend" name='amount' onChange={handleChange} value={formData.amount}   placeholder="Enter amount" required/>
            </div>
          </div>
          <p className="text-muted mt-4">Transactions fees <span className="float-right d-flex align-items-center"><del></del> <span className="bg-success text-1 text-white font-weight-500 rounded d-inline-block px-2 line-height-4 ml-2">Free</span></span></p>
          <hr/>
          <p className="font-weight-500">You'll deposit <span className="text-3 float-right">₦ {formData.amount}</span></p>
          <button className="btn btn-primary btn-block" type='button' onClick={handleSubmit} >Continue</button>
        </form>
        </div>
        </div>
      </div>
    </div>
  </div>
        </>



    );
}

export default Deposit;