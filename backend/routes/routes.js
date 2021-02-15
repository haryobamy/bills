const { request, response } = require('express')
const express = require ('express')
const { data } = require('jquery')
const router = express.Router()
const signUpTemplateCopy = require ('../models/SignUpModels')



router.post('/signup', (request, response) => {
    const signedUpUser = new signUpTemplateCopy ({
        email:request.body.email,
        phonenumber:request.body.phonenumber,
        password:request.body.password
    })
    signedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})


module.exports = router