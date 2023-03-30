const express = require('express');
const router = express.Router();
const FormData = require('form-data');
const multer = require('multer');
const form_data = new FormData();
const control = require('../Controller/userKycStore')

// console.log(control);

router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin,X-Requested-With,Content-Type,Accept,Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
    next();
})

const storages = multer.diskStorage({
    destination : 'KYC_Docs',
    filename : function(req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
});

const kycData = multer({storage:storages}) 

router.get("/getDetails/:id", async (req,res) => {
    try{
        await control.getUserKycStatus(req,res);
    }catch (error){
        console.log(error);
    }
})


router.post("/addKYCDetails", kycData.single('kycDocs'), async (req,res) => {
    try{
        const docImg = req.file.filename;
        const result = await control.addKYCDetails(req,res, docImg)
        console.log(result);
        res.send(result);
    }catch(error){
        console.log(error);
    }
})


module.exports = router;
