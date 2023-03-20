const KycForm = require('../Model/KYCschema');
const express = require('express');

const addKYCDetails =  async (req, res, kycImg) => {
    try {
    
        const User = new KycForm({
            User_Account_Address: req.body.User_Account_Address,
            UserName:req.body.UserName,
            PanCard_Number:req.body.PanCard_Number,
            KycStatus:req.body.KycStatus,
            DocsImage:kycImg
        });

        const addKYCDetail = await User.save();
        return addKYCDetail;
    }catch(error) {
        return error;
    }
}


const getUserKycStatus = async (req, res, accId) => {
    try {
        const data = await KycForm.find({User_Account_Address: accId}, {_id:0})
        //console.log(data)
        return data;
        
    }catch(error){
        return error;
    }

}

module.exports.addKYCDetails = addKYCDetails;
module.exports.getUserKycStatus = getUserKycStatus;