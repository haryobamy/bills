import {store} from 'react-notifications-component';
import 'animate.css';



const user = JSON.parse(localStorage.getItem('userInfo'));


export const profileAlert = () => {
    store.addNotification({
      title: "Wonderful!",
      message: "Profile updated Successfuly",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
        showIcon: true
      },
      width:600

    })
  }
  export const loginAlert = (user) => {
    store.addNotification({
      title: "Welcome!",
      message:` Welcome Back ${user.username}`,
      type: "success",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
        showIcon: true
      },
      width:800
    })
  }
  
  export const goodbyeAlert = () => {
    store.addNotification({
      title: "Thanks for Your Patronage!",
      message: "Goodbye Do have A Lovely Day",
      type: "info",
      insert: "top",
      container: "top-left",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 10000,
        onScreen:false,
        showIcon: true
      },
      width:600
    })
  }
  export const phoneAlert = () => {
    store.addNotification({
      title: "Wonderful!",
      message: "Mboile Number update Successfuly",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 10000,
        onScreen:true,
        showIcon: true
      },
      width:600
    })
  }
  export const profileError = () => {
    store.addNotification({
      title: "error!",
      message: "Profile update Unsuccessfuly",
      type: "warning",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 10000,
        onScreen:false,
        showIcon: true
      },
      width:600
    })
  }
  export const validationError = () => {
    store.addNotification({
      title: "error!",
      message: "Email and Password Must Not Be Empty",
      type: "warning",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 10000,
        onScreen:false,
        showIcon: true
      },
      width:600
    })
  }
  export const SignupValidation = () => {
    store.addNotification({
      title: "error!",
      message: "Username, Email and Password Must Not Be Empty",
      type: "warning",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 10000,
        onScreen:false,
        showIcon: true
      },
      width:600
    })
  }
  export const LoginError = () => {
    store.addNotification({
      title: "error!",
      message:'"Incorrect Email/Password. Try again!"',
      type: "warning",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen:true,
        showIcon: true
      },
      width:600
    })
  }

  export const confirmPassword = () => {
    store.addNotification({
      title: "error!",
      message: " Password Must Match",
      type: "info",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 10000,
        onScreen:false,
        showIcon: true
      },
      width:600
    })
  }
  