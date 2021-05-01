import axios from "axios";





// export const userInfo = user => {
//   if(user) {

//   }
// };


const setAuthToken = token => {
  if (token) {

    const user = `Bearer ${token}`;
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common["Authorization"] = user;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};
export default setAuthToken;