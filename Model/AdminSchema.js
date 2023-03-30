const mongoose = require("mongoose");

const AdminLoginSchema = new mongoose.Schema({
    adminAccountAddress : {
        type: String,
        require: true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    emailId:{
        type:String,
        required:true
    },
    password:{
        type:String,
        default:true
    },
})

const AdminForm = new mongoose.model('AdminForm', AdminLoginSchema)
module.exports = AdminForm