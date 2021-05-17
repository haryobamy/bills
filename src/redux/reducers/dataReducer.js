import { GET_WALLET_BALANCE } from "../types";


  
  const initialState = {
    walletBalance: '0.00',
    
  };
  export default function(state = initialState, action) {
    switch (action.type) {
        case GET_WALLET_BALANCE:
            return {
                ...state,
                walletBalance:action.payload

        };
        default:
            return state;
    };
   
  }