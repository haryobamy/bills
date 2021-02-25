const express = require ('express');
const router = express.Router();
const userSchema = require ('../models/User');
const bcrypt = require ('bcryptjs');
//const { registerValidation} = require ('../validation');


// signup
router.post('/signup', async (req, res) => {

     // validating user before signing up
    //const { error } = registerValidation (req.body);
   //if (error) return res.status(400).send(error.details[0].message);



    //checking if user email already exist in the database
      const emailExist = await userSchema.findOne({email: req.body.email});
       if (emailExist) return res.status(400).send("Email Already Exist");


           //checking if user phone number already exist in the database
      const phonenumberExist = await userSchema.findOne({phonenumber: req.body.email});
      if (phonenumberExist) return res.status(400).send("Phonenumber Already Exist");



       //hash password 
       const salt = await bcrypt.genSalt(10)
       const hashedPassword = await bcrypt.hash(req.body.password, salt)
  


    const signedUpUser = new userSchema ({
        email:req.body.email,
        phonenumber:req.body.phonenumber,
        password:hashedPassword
    })

    try {
        const savedUser = await signedUpUser.save();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
        
    }


});


// login
router.post('/login', async (req, res) => {




    
    //checking if user email already exist in the database
    const user = await userSchema.findOne({email: req.body.email});
    if (!user) return res.status(400).send("Email or Phone Number Does Not Exist");


        //checking if user phone number already exist in the database
   //const phonenumberExist = await userSchema.findOne({phonenumber: req.body.email});
   //if (!phonenumberExist) return res.status(400).send("Email or Phonenumber Does Not Exist");

   //checking if password exist
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Incorrect password');

  res.send('logged in');


});




module.exports = router



 



   

       //validation of user details

//const Joi = require('@hapi/joi');
//const schema ={
    //email: Joi.string().min(6).required(),
    //phonenumber: Joi.string().min(10).max(10).required(),
    //password: Joi.string().min(8).required()
//};