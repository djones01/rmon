const mongoose = require('mongoose');
const EnvConnectionTypePropertySchema = require('./env-connection-type-property')

// EnvConnectionType Schema
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

module.exports = EnvConnectionTypeSchema;