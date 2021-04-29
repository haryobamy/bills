import React, { useEffect, useState } from "react";
import firebase from 'firebase';

export const AuthContext = React.createContext();

 const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  const authListener = () => {
    firebase.auth().onAuthStateChanged(user => {
      if(user){

        localStorage.setItem("user", JSON.stringify(user))
        
          // history.push('/dashboard')
      
        // clearInputs();
      
        setUser(user);
      } else{
        setUser("");
      }
    })
  }

  useEffect(() => {
      authListener();
  },[]);


  

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;