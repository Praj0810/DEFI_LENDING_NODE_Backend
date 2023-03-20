const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/KYC_Details",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true,
    // useFindAndModify:true
}).then(()=>{
    console.log("Database Connection Sucessfully");
}).catch(()=>{
    console.log("Not connected To database");
});
