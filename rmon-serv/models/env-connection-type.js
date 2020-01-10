const mongoose = require('mongoose');
const EnvConnectionTypePropertySchema = require('./env-connection-type-property')

// Declare the Schema of the Mongo model
const EnvConnectionTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name is Required",
        unique:true,
        index:true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    properties: [
        EnvConnectionTypePropertySchema
    ]
}, {
    timestamps: true
});

//Export the schema
module.exports = EnvConnectionTypeSchema;