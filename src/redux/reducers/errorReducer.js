// import { SET_ERRORS, CLEAR_ERROR, LOADING_UI, CLEAR_ERRORS } from "../types";

// const initialState = {
//     loading: false,
//     errors: null
// };

// export default function(state = initialState, action){
//     switch(action.type){
//         case SET_ERRORS:
//             return {
//                 ...state,
//                 loading: false,
//                 errors: action.payload
//             }
//         case CLEAR_ERRORS:
//             return {
//                 ...state,
//                 loading:false,
//                 errors: null
//             }
//         case LOADING_UI:
//             return {
//                 ...state,
//                 loading:true
//             }
//         default:
//         return state
//     }
// }


import { GET_ERRORS,CLEAR_ERRORS } from "../types";
const initialState = {};


export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
      case CLEAR_ERRORS:
          return {
            ...state,
             errors: null
          }
    default:
      return state;
  }
}