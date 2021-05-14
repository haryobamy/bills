const isEmail = (email) => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if( email.match(regEx)) return true;
  else return false
}

const isEmpty = (string) => {
  if (string.trim() === '') return true;
  else return false;
}

// validating signup details
exports.validateSignupData = (data) => {
  let messages = {};
   
  if(isEmpty(data.email)){
      messages.email = 'Must not be empty'
  }else if (!isEmail(data.email)) {
      messages.email = 'Email must be  valid '
  }
  if(isEmpty(data.password)) messages.password = 'Must not be empty'
  if(isEmpty(data.username)) messages.username = 'Must not be empty'

  if(data.password !== data.confirmPassword) messages.confirmPassword ='password must match'
  
  return {
      messages,
      valid:Object.keys(messages).length === 0 ? true : false
  }
}

// validating log in details
export const validateLoginData = (data) => {
  let messages ={};

  if(isEmpty(data.email)) messages.email =' Must not be empty';
  if(isEmpty(data.password)) messages.password =' Must not be empty';

  return {
      messages,
      valid:Object.keys(messages).length === 0 ? true : false
  }

}

exports.reduceUserDetails = (data) => {
let userDetails = {};
if(!isEmpty(data.firstname.trim())) userDetails.firstname = data.firstname;
if(!isEmpty(data.lastname.trim())) userDetails.lastname = data.lastname;
if(!isEmpty(data.address.trim())) userDetails.address = data.address;
if(!isEmpty(data.city.trim())) userDetails.city = data.city;
if(!isEmpty(data.state.trim())) userDetails.state = data.state;
if(!isEmpty(data.zipcode.trim())) userDetails.zipcode = data.zipcode;
if(!isEmpty(data.country.trim())) userDetails.country = data.country;
if(!isEmpty(data.accounstatus.trim())) userDetails.accounstatus = data.accounstatus;
if(!isEmpty(data.phonenumber.trim())) userDetails.phonenumber = data.phonenumber;

return userDetails

};