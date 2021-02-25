const express = require ('express')
const app = express ()
const mongoose = require ('mongoose')
const dotenv = require ('dotenv')
const cors = require ('cors')
//const {registerValidation} = require('./validation')

//importing the routes
const routesUrls = require ('./routes/routes')

dotenv.config()

// connect to database
mongoose.connect(process.env.DATABASE_ACCESS, { useNewUrlParser: true},  () => console.log("database connected"))



//middleware
app.use(express.json())
app.use(cors())
// route middleware
app.use('/app', routesUrls)
app.listen( 4000, () => console.log ('server is up and running'))