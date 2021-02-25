const Joi = require('@hapi/joi');


//register validation
const registerValidation = (data) => {
const schema ={
    email: Joi.string().min(6).required(),
    phonenumber: Joi.string().min(11).max(11).required(),
    password: Joi.string().min(8).required()
};

    return Joi.validate(data, schema); 
};

const loginValidation = (data) => {
    const schema ={
        email: Joi.string().min(6).required(),
        phonenumber: Joi.string().min(11).max(11).required(),
        password: Joi.string().min(8).required()
    };
    
        return Joi.validate(data, schema); 
    };

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;