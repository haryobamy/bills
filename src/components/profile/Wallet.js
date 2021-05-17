import React, { useEffect, useState } from 'react';
import {getUserData, getWalletBalance} from '../../redux/actions/dataAction';
import { connect, useSelector,useDispatch } from 'react-redux';
import eva from  '../../assests/images/eva.jpg';
import PropTypes from 'prop-types';

const Wallet = (props) => {
    const user = JSON.parse(localStorage.getItem('userInfo'));

  
  const dispatch = useDispatch();


  const handleEditPicture = () => {
    const fileInput = document.getElementById('imageInput');
    fileInput.click();
  };
  const { handleImageChange, data:{walletBalance}  } = props;




    useEffect(() => {
        dispatch(getWalletBalance());
      }, [])

    return (
        <div>
            <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
            <div className="profile-thumb mt-3 mb-4"> <img className="rounded-circle" src={eva} alt=""/>
            <div className="profile-thumb-edit custom-file bg-secondary text-white" data-toggle="tooltip" title="Edit profile picture"> <i className="fa fa-camera position-absolute" onClick={handleEditPicture}  ></i>
                <input type="file" className="custom-file-input" id="imageInput" name="image" accept="image/*" multiple={false}  onChange={handleImageChange}/>
              </div>
            </div>
         
            <p className="text-3 font-weight-500 mb-2">Hello,{user.username} </p>
            <p className="mb-2"><a href="/profile" className="text-5 text-light" data-toggle="tooltip" title="Edit Profile"><i className=" fa fa-edit"></i></a></p>
            
          </div>
           {/* Profile Details End  */}
          
          {/* Available Balance */}
          
          <div className="bg-secondary shadow-sm rounded text-center p-3 mb-4">
            <div className="text-17 text-light my-3"><i className=" fa fa-wallet"></i></div>
            
           { walletBalance != null ?( <h3 className="text-9 font-weight-400">₦ {walletBalance}</h3>):( <h3 className="text-9 font-weight-400">₦ 0.00</h3>) }
            <p className="mb-2 text-muted opacity-8">Available Balance</p>
            <hr className="mx-n3"/>
            <div className="d-flex"><a href="#" className="btn-link mr-auto">Withdraw</a> <a href="/deposit" className="btn-link ml-auto">Deposit</a></div>
          </div>
          {/* Available Balance End */}
          
         {/* Need Help? */}
          
          <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
            <div className="text-17 text-light my-3"><i className="fa fa-comments"></i></div>
            <h3 className="text-3 font-weight-400 my-4">Need Help?</h3>
            <p className="text-muted opacity-8 mb-4">Have questions or concerns regrading your account?<br/>
              Our experts are here to help!.</p>
            <a href="#" className="btn btn-primary btn-block">Contact Us</a> 
          </div>
           {/* Need Help? End */}
          
        </div>
    )
}

Wallet.propTypes = {
    user: PropTypes.object.isRequired,
  };

  const mapStateToProps = (state) => ({
    data: state.data,
    user: state.user
   });



export default  connect(mapStateToProps)(Wallet);



