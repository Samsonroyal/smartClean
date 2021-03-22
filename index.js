//dependencies
const express =require('express')
//path to file with the variable touter
const homeRoute=require("./routes/homeRoutes")
const registerRoute=require("./routes/registerRoutes")
const signUpRoute=require("./routes/signUpRoutes")
const loginRoute=require("./routes/loginRoutes")
const contactRoute=require("./routes/contactRoute")
const customerRoute=require("./routes/customerRoutes")
const adminRoute=require("./routes/adminRoutes")


//instatiations
const app= express()

//configurations

app.set('view engine', 'pug');
app.set('views', './views');

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json())

//routes

app.use('/',homeRoute)
app.use('/',registerRoute)
app.use('/',signUpRoute)
app.use('/',loginRoute)
app.use('/',contactRoute)
app.use('/',customerRoute)
app.use('/',adminRoute)







































//creates a server where browsers can connect
app.listen(1997, () => console.log('listening on port 1997'));
