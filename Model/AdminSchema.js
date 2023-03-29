const mongoose = require("mongoose");

const AdminLoginSchema = new mongoose.Schema({
    Admin_Account_Address : {
        type: String,
        require: true
    },
    First_Name:{
        type:String,
        required:true
    },
    Last_Name:{
        type:String,
        required:true
    },
    EmailId:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        default:true
    },
})

const AdminForm = new mongoose.model('AdminForm', AdminLoginSchema)
module.exports = AdminForm