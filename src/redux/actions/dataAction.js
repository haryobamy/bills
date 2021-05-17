import { GET_WALLET_BALANCE } from "../types";
import axios from "axios";






export const getWalletBalance = () => (dispatch) => {
   
    axios.get('https://desolate-shore-36733.herokuapp.com/api/get-wallet')
    .then(res => {
      const bal = res.data.amount
     
      dispatch(myWallet(bal))
 
    })
    .catch((err) => {
      // const data = err.response.data
      console.log(err)
    })
  }


  export const myWallet = (bal) => {
 
    return {
      type: GET_WALLET_BALANCE,
      payload: bal
      
    };
  };
  