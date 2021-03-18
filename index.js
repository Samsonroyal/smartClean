//dependencies
const express =require('express')


//instatiations
const app= express()

//configurations

app.set('view engine', 'pug');
app.set('views', './views');

//middleware
app.use(express.static('public'));



//routes
app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/index',(req,res)=>{
    res.render('index')
})

app.get('/aboutus',(req,res)=>{
    res.render('aboutus')
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.get('/customerSignup',(req,res)=>{
    res.render('customerSignup')
})

app.get('/dashboard',(req,res)=>{
    res.render('dashboard')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/regConductor',(req,res)=>{
    res.render('regConductor')
})

app.get('/regDriver',(req,res)=>{
    res.render('regDriver')
})

app.get('/regTruck',(req,res)=>{
    res.render('regTruck')
})




































//creates a server where browsers can connect
app.listen(1997, () => console.log('listening on port 1997'));
