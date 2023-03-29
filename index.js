const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 5050;
const app = express();
const cors = require('cors');
const fs = require('fs')
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('KYC_Docs'));
app.use("/api",require("./Routes/manage_kyc_details"));
app.use("/api", require("./Routes/adminRoute"));
require("./Database/dbconnect");
app.use(cors());


app.listen(PORT, () => {
    console.log(`Connected to ${PORT}`);
})
