import React, { useState, useEffect} from 'react';
import Profileheader from './Pofileheader';
import Profilefooter from './Profilefooter';
import axios from 'axios'
import { useHistory } from 'react-router-dom';



  const Sendmoney = () => {
    const history = useHistory()
  const user = JSON.parse(localStorage.getItem('user'))
    const [banks, setBanks] =  useState([])
    const [serviceID, setServiceID] = useState('');
    const [ formData, setFormData] = useState({
      amount:'',
      bank:'', 
      accountNumber:"", 
      recipient:"",
       beneficiaryName:"",
       beneficiaryMobile:"",
       amount:''
    })

    useEffect(() => {
     axios.get('https://sandbox.vtpass.com/api/service-variations?serviceID=bank-deposit')
      .then((response) => {
        //handle success
        const data = response.data.content.varations
        const service = response.data.content.serviceID
        setBanks(data);
        setServiceID(service)
      
    })
    .catch((error) => {
      //handle error
      console.log(error)
    })

      return () => {
        setBanks([])
      }
    }, [])

    const handleBankSelect = (e) => {
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
    

    // verfy account number
    const handleVerify = (e) => {
      const params = {
        billersCode:formData.accountNumber,
        serviceID:'bank-deposit',
        type:formData.bank
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
          billersCode:formData.accountNumber,
          serviceID:serviceID,
          phone:formData.beneficiaryName,
          variation_code:formData.bank,
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
            

                
            <div id="content" className="py-4">

            <div className="bg-secondary">
      <div className="container">
      <ul className="nav primary-nav alternate">
          <li className="nav-item"> <a className="nav-link serviceNav" href="/"><span><i className="fa fa-phone"></i></span> Airtime</a> </li>
          <li className="nav-item"> <a className="nav-link serviceNav " href="/data"><span><i className="fa fa-wifi"></i></span> Internet Data</a> </li>
          <li className="nav-item"> <a className="nav-link serviceNav active" href="/electricity"><span><i className="fa fa-lightbulb"></i></span>Electricity  Bill</a> </li>
          <li className="nav-item"> <a className="nav-link serviceNa  text-white" href="/education"><span><i className="fa fa-graduation-cap"></i></span> Educational Payment </a> </li>
          <li className="nav-item"> <a className="nav-link serviceNav" href="/cable"><span><i className="fa fa-plug"></i></span> TV Subscription
</a> </li>
          <li className="nav-item"> <a className="nav-link serviceNav" href="#"><span><i className="fa fa-lightbulb"></i></span> Insurance Payment</a> </li>
          <li className="nav-item"> <a className="nav-link serviceNav actives" href="/sendmoney"><span><i className="fa fa-bank"></i></span> Bank Transfer</a> </li>
        </ul>  
      </div>
    </div>


            <div className="container">
              <h2 className="font-weight-400 text-center mt-3">Send Money</h2>
              <p className="text-4 text-center mb-4">Send your money on anytime, anywhere in the world.</p>
              <div className="row">
                <div className="col-md-8 col-lg-6 col-xl-5 mx-auto">
                  <div className="bg-light shadow-sm rounded p-3 p-sm-4 mb-4">
                    <h3 className="text-5 font-weight-400 mb-3">Personal Details</h3>
                    {/* <!-- Send Money Form
                    ============================================= --> */}
                    <form id="form-send-money" method="post">
                      <div className="form-group">
                      <label for="recipient">Recipient</label>
                          <input type="text"  className="form-control" data-bv-field="recipient" id="recipient"  name='recipient' required placeholder="Description e.g Ayo's Account"  onChange={handleChange} value={formData.recipient}/>
                        </div>

                        <div className="form-group">
                        <label for="bank">Bank</label>
                        <div className="input-group">
                            <select id="bank" name='bank' data-style="custom-select bg-transparent border-0" data-container="body" data-live-search="true" className="selectpicker form-control bg-transparent" required onChange={handleBankSelect}  value={formData.bank} >
                              <option>Select Your Bank</option>
                             {
                               banks.map(bank =>  <option key={bank.variation_code} value={bank.variation_code} >{bank.name} </option>)
                             }
                            </select>
                            </div>
                        </div>

                      <div className="form-group">
                        <label for="accountNumber">Account Number</label>
                        <div className="input-group">
                        <input type="text" name="accountNumber" id="accountNumber" class="form-control float__input" required  placeholder="Account Number" autocomplete="off" maxlength="11" data-parsley-required="true" data-parsley-minlength="11" data-parsley-minlength-message="Please enter a valid account number" data-parsley-required-message="Please enter an account number" data-safe="true"  onChange={handleChange} value={formData.accountNumber} onInput={handleVerify} />
                        {/* <button className="btn btn-warning" type="button"  onClick={handleVerify} >Verify</button> */}
                        </div>
                      </div>

                        
                        <div className="form-group">
                        <label for="beneficiaryName">Beneficiary's Name</label>
                        <div className="input-group"></div>
                        <input type="text" name="beneficiaryName" id="beneficiaryName" class="form-control float__input required__warning" placeholder="Beneficiary's Name" autocomplete="off"  data-parsley-required="true" data-parsley-required-message="Please enter beneficiary's name" data-safe="true" onChange={handleChange} value={formData.beneficiaryName}  />
                        </div>

                    
        `
                        <div class="form-group">
                            <label for="amount">Amount</label>
                            <div class="input-group">
                            <div class="input-group-prepend"> <span class="input-group-text">₦</span> </div>
                            <input type="text" name="amount" id="amount" class="form-control float__input" placeholder="Amount" autocomplete="off"  maxlength="13" data-icon="₦" data-safe="true"  onChange={handleChange} value={formData.amount} />
                            </div>
                            </div>

                            <div className="form-group">
                        <label for="beneficiaryMobile">Beneficiary's Mobile Number</label>
                        <div className="input-group"></div>
                      <input type="text" className="form-control" id="beneficiaryMobile" name='beneficiaryMobile' value={formData.beneficiaryMobile} maxlength="10" required placeholder="Mobile Number" onChange={handleChange} />
                    </div>
                        
                      <button className="btn btn-success btn-block" type="button" value='submit' onClick={handleSubmit} >Continue</button>
                    </form>
                    <button className="btn btn-secondary btn-block my-3" ><a className='text-white' href='/dashboard'>Back</a></button>
                    
                    {/* <!-- Send Money Form end -->  */}
                  </div>
                </div>
              </div>
            </div>
          
          </div>
          <Profilefooter />
          </>
         );
    }

 
export default Sendmoney;