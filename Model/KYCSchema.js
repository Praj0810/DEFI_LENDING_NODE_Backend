const mongoose = require('mongoose');

const kYCFormSchema = new mongoose.Schema({
    userAccountAddress:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    panCardNumber:{
        type:String,
        required:true
    },
    kycStatus:{
        type:Boolean,
        default:true
    },
    docsImage : {
        type:String,
        require: true
    }
})

const kycForm = new mongoose.model('KycForm', kYCFormSchema)
module.exports = kycForm