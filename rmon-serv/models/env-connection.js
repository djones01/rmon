const mongoose = require('mongoose');

var options = {timestamps: true, discriminatorKey:'type'};

// Declare the Schema of the Mongo model
const EnvConnectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name is Required",
        unique: true,
        index: true,
        trim: true
    },
    identifier: {
        type: String,
        required: "Identifier is Required",
        unique: true,
        index: true,
        trim: true
    }
}, options);

//Export the schema
module.exports = mongoose.model('EnvConnection', EnvConnectionSchema);