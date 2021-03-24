const express =require('express')
const router=express.Router()
var multer = require('multer');
var upload = multer({dest:'uploads/'});

router.get('/',(req,res)=>{
    res.render('regDriver')
})

// file upload
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploadedFiles');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage })

router.post('/regDriver', upload.single('fileUpload'), (req, res) => {
    try {
        //console.log(req.body)
         res.send(req.file);
    } catch (err) {
        res.send(400);
    }
})






module.exports=router