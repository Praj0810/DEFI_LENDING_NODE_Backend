const mongoose = require('mongoose');

const KYCFormSchema = new mongoose.Schema({
    User_Account_Address:{
        type:String,
        required:true
    },
    UserName:{
        type:String,
        required:true
    },
    PanCard_Number:{
        type:String,
        required:true
    },
    KycStatus:{
        type:Boolean,
        default:true
    },
    DocsImage : {
        type:String,
        require: true
    }
})

const KycForm = new mongoose.model('KycForm', KYCFormSchema)
module.exports = KycForm