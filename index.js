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
// app.get('/',(req,res)=>{
//     res.render('index')
// })




































//creates a server where browsers can connect
app.listen(1997, () => console.log('listening on port 1997'));
