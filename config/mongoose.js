// configuration of mangoose 
const mongoose=require('mongoose');

// connection of dtatbase 
mongoose.connect('mongodb://localhost/HospitalAPI');
const db=mongoose.connection;

// alerting  when connect or error 
db.on('error', console.error.bind(console, "Error on Connect DB"));
db.once("open", function()
{
    console.log("Connnected to  Mongo DB");
});

// export for call db from index 
module.exports=db;