// import { SET_USER, SET_AUTHENTICATED, SET_UNAUTHENTICATED } from "../types";





// const initialState = {
//     authenticated: false,
//     Credential: {},

// }


// export default function( state= initialState, action){
//     switch(action.type){
//         case SET_AUTHENTICATED:
//             return {
//                 ...state,
//                  authenticated:true
//             };
//         case SET_UNAUTHENTICATED:
//             return initialState

//         case SET_USER:
//             return {
//                 ...state,
//                 authenticated:true,
//                 Credential: action.payload
//             };
//         default:
//              return state

//     }
// }


import {
    SET_CURRENT_USER,
    USER_LOADING,
    SET_UNAUTHENTICATED,
    GET_USERDATA
  } from "../types";
//   const isEmpty = require("is-empty");

  
  const initialState = {
    isAuthenticated: false,
    user: {},
    userData:{},
    loading: false
  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case SET_CURRENT_USER:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          loading: false
          
        };
      case GET_USERDATA:
        return {
          ...state,
          isAuthenticated: true,
          
          userData:action.payload
        };
        case SET_UNAUTHENTICATED:
            return initialState
      case USER_LOADING:
        return {
          ...state,
          loading: true
        };
        
      default:
        return state;
    }
  }