//dependencies
const express =require('express')
const router=require("./routes/router.js")


//instatiations
const app= express()

//configurations

app.set('view engine', 'pug');
app.set('views', './views');

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.use('/',router)

//routes




































//creates a server where browsers can connect
app.listen(1997, () => console.log('listening on port 1997'));
