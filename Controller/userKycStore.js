const kycForm = require('../Model/KYCSchema');
const express = require('express');

const addKYCDetails =  async (req, res, kycImg) => {
    try {
    
        const User = new kycForm({
            userAccountAddress: req.body.userAccountAddress,
            userName:req.body.userName,
            panCardNumber:req.body.panCardNumber,
            kycStatus:req.body.kycStatus,
            docsImage:kycImg
        });

        const addKYCDetail = await User.save();
        console.log(addKYCDetail, "user details ")
        return addKYCDetail;
        
    }catch(error) {
        return error;
    }
}


const getUserKycStatus = async (req, res) => {
    try {
        const  { id } = req.params;
        const data = await kycForm.findOne({userAccountAddress:id},{_id:0});
        console.log(data,"kyc done")
        if(!data){
            return res.status(200).json({
                status:false
            })
        }else{
            if(data.KycStatus == true){
                return res.status(200).json({
                    status:true
                })
            }else{
                return res.status(200).json({
                    status:false
                })
            }
        }         
    }catch(error){
        return error;
    }

}

module.exports.addKYCDetails = addKYCDetails;
module.exports.getUserKycStatus = getUserKycStatus;




