import firebase from 'firebase';
import 'firebase/auth';



  var firebaseConfig = {
    apiKey: "AIzaSyDxEURkGmyPAGSGjCidAREkByG0EXssv4c",
    authDomain: "bills-com-ng.firebaseapp.com",
    projectId: "bills-com-ng",
    storageBucket: "bills-com-ng.appspot.com",
    messagingSenderId: "976373434124",
    appId: "1:976373434124:web:f98990389b88cd16dfab29",
    measurementId: "G-37T9NBZJV9"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default fire;