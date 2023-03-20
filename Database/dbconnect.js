const mongoose = require('mongoose');

const database = process.env["DB"];

mongoose.set('strictQuery', false);
mongoose.connect(database,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Database Connection Successfully");
}).catch(()=>{
    console.log("Not connected To database");
});
