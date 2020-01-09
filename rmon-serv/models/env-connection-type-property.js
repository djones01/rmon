const mongoose = require('mongoose');

// Declare the Schema of the Mongo model
var EnvConnectionTypePropertySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    value:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    type:{
        type:String,
        required:true,
        unique:true,
        index:true,
    }
});

//Export the model
module.exports = EnvConnectionTypePropertySchema;