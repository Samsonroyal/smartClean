//dependencies
const express =require('express')
require('dotenv').config();
const mongoose = require('mongoose');
//importing models
require('./models/regDriver');
require('./models/regConductor');
require('./models/regTruck');
require('./models/login');
require('./models/signUp');
require('./models/contact');
require('./models/customerSchedulePickUp');
//path to file with the variable router
const homeRoute=require("./routes/homeRoutes")
const registerConductorRoute=require("./routes/registerConductorRoutes")
const registerTruckRoute=require("./routes/registerTruckRoutes")
const registerDriverRoute=require("./routes/registerDriverRoutes")
const signUpRoute=require("./routes/signUpRoutes")
const loginRoute=require("./routes/loginRoutes")
const contactRoute=require("./routes/contactRoute")
const customerPageRoute=require("./routes/customerPageRoutes")
const customerPickUpRoute=require("./routes/customerSchedulePickUpRoutes")
const adminRoute=require("./routes/adminRoutes")


//instatiations
const app= express()

//db connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  
  mongoose.connection
    .on('open', () => {
      console.log('Mongoose connection open');
    })
    .on('error', (err) => {
      console.log(`Connection error: ${err.message}`);
    });

//configurations

app.set('view engine', 'pug');
app.set('views', './views');

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json())

//routes

app.use('/',homeRoute)
app.use('/regConductor',registerConductorRoute)
app.use('/regTruck',registerTruckRoute)
app.use('/regDriver',registerDriverRoute)
app.use('/signUp',signUpRoute)
app.use('/login',loginRoute)
app.use('/contact',contactRoute)
app.use('/customerPage',customerPageRoute)
app.use('/customerSchedulePickUp',customerPickUpRoute)
app.use('/adminDashboard',adminRoute)







































//creates a server where browsers can connect
app.listen(1997, () => console.log('listening on port 1997'));
