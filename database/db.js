const mongoose = require('mongoose');

const connectDB = async ()=>{
 
   
        mongoose.set('strictQuery',false);
        await mongoose.connect(process.env.MONGO_URI).then(()=>{
            console.log("Connected to MongoDB");
        }).catch((err)=>{
            console.log("Error connecting to MongoDB",err);
        })
      
    
}

module.exports = connectDB;
