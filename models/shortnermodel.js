const mongoose = require('mongoose');

const shortnerSchema  = new mongoose.Schema({
    link:{
        type:String,
        required:true,
        unique:true

    },
    shortedLink:{
        type:String,
        required:true
    }
    
},{timestamps:true});


module.exports = mongoose.model('Shortner',shortnerSchema);
