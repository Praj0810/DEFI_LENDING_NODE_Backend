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
        console.log(addKYCDetail, "user details ")
        return addKYCDetail;
        
    }catch(error) {
        return error;
    }
}


const getUserKycStatus = async (req, res) => {
    try {
        const  { id } = req.params;
        const data = await KycForm.findOne({User_Account_Address:id},{_id:0});
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




