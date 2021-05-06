// import axios from "axios";
// import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_USER, SET_UNAUTHENTICATED } from "../types";


// const url = 'http://localhost:5000/bills-com-ng/europe-west2/api'

// export const loginUser = (userData, history) => (dispatch) => {
//     dispatch({ type: LOADING_UI});

//     axios.post(url+'/login', userData)
//     .then(res => {
//       setAuthorizationHeader(res.data.token)
      
//       dispatch(getUserData());
//         dispatch({ type: CLEAR_ERRORS});
//       history.push('/dashboard')
//     })
//     .catch((err) => {
//       // console.error(err.response.data)
//       dispatch({ 
//         type: SET_ERRORS,
//          payload: err.response
//         })
//     });
// } 
// export const signupUser = (newUserData, history) => (dispatch) => {
//     dispatch({ type: LOADING_UI});

//     axios.post(url+'/signup', newUserData)
//     .then(res => {
//       setAuthorizationHeader(res.data.token)
//       dispatch(getUserData());
//         dispatch({ type: CLEAR_ERRORS});
       
//       history.push('/dashboard')
//     })
//     .catch((err) => {
//       // console.error(err.response.data)
//       dispatch({ 
//         type: SET_ERRORS,
//          payload: err.response
//         })
//     });
// } 


// export const logoutUser = () => (dispatch) => {
//   localStorage.removeItem('FBIdToken');
// delete axios.defaults.headers.common['Authorization'];
// dispatch({ type: SET_UNAUTHENTICATED});
// }

// export const getUserData = () => (dispatch) => {
  
//   axios
//     .get(url+'/user')
//     .then((res) => {
//       dispatch({
//         type: SET_USER,
//         payload: res.data
//       });
//     })
//     .catch((err) => console.log(err));
// };


// const setAuthorizationHeader = (token) => {
//   const FBIdToken = `Bearer ${token}`;
//   localStorage.setItem('FBIdToken', FBIdToken);
//   axios.defaults.headers.common['Authorization'] = FBIdToken;
// }


import axios from "axios";
import setAuthToken from "../../util/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING,SET_UNAUTHENTICATED, CLEAR_ERRORS, GET_USERDATA, STOP_LOADING_UI, LOADING_UI} from "../types";


// const url = 'http://localhost:5000/bills-com-ng/europe-west2/api'


const url = "https://desolate-shore-36733.herokuapp.com/api"

// Register User
export const signupUser = (newUserData, history) => dispatch => {

  dispatch({ type: LOADING_UI });
  axios
    .post(url+'/register', newUserData)
    .then(res => {
      const { token } = res.data;
      const {user} = res.data;
      localStorage.setItem("jwtToken", token);
      localStorage.setItem('userInfo', JSON.stringify(user));
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
         
           // Set current user
          dispatch(getUserData(user));
          //setting use
      dispatch(setCurrentUser(decoded));
      // re-direct to dashboard on successful register
       // clearing errors
          dispatch({ type: CLEAR_ERRORS});
      history.push("/dashboard")
    }) 

    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Login - get user token 

export const loginUser = (userData, history) => dispatch => {
  dispatch({ type: USER_LOADING });
  dispatch({ type: LOADING_UI });

  axios
    .post(url+'/login', userData)
    .then(res => {
      const { token } = res.data;
      const {user} = res.data;
      localStorage.setItem("jwtToken", token);
      localStorage.setItem('userInfo', JSON.stringify(user)); 
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // clearing errors
      // dispatch({ type: CLEAR_ERRORS}); 
      dispatch({ type: USER_LOADING });
      //getting user data
      dispatch(getUserData(user));
      // dispatch(getUserData());
     
       // Set current user
      dispatch(setCurrentUser(decoded));

      dispatch({ type: CLEAR_ERRORS });
     
      // re-direct to dashboard on successful register
      history.push("/dashboard")
    }) 

    .catch(err =>
      
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
       
      
    );
};

export const setCurrentUser = (decoded) => {
  
  return {
    type: SET_CURRENT_USER,
    payload: decoded
    
  };
};




export const getUserData = (user) => {
 
  return {
    type: GET_USERDATA,
    payload: user
    
  };
};
//User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};
// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.clear();
  
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch({ type: SET_UNAUTHENTICATED});
        // Redirect to login
    window.location.href = "/";
  
};

export const editUserDetails = (userDetails) => (dispatch) => {

  dispatch({ type: USER_LOADING });

  axios
    .post(url+'/profile', userDetails)
    .then((res) => {
      const {user} = res.data;
      localStorage.setItem('userInfo', JSON.stringify(user));
      
      dispatch(getUserData(user));
    })
    .catch((err) => console.log(err));
};

export const uploadImage = (formData) => (dispatch) => {
  dispatch({ type: USER_LOADING });
  axios
    .post(url+'/pic', formData)
    .then((res) => {
      const {user} = res.data;
      localStorage.setItem('userInfo', JSON.stringify(user));
      dispatch(getUserData(user));
    })
    .catch((err) => console.log(err));
};


