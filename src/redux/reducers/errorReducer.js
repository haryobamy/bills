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


import { GET_ERRORS,CLEAR_ERRORS,LOADING_UI,STOP_LOADING_UI,USER_LOADING } from "../types";
const initialState = {
  loading: false,
  errors: null
};


export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return{
        ...state,
        loading: false,
      errors: action.payload
    };
      case CLEAR_ERRORS:
          return {
            ...state,
             errors: null
          }
          case LOADING_UI:
            return {
              ...state,
              loading: true
            };
            case STOP_LOADING_UI:
              return {
                ...state,
                loading: false
              };
    default:
      return state;
  }
}