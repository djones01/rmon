const mongoose = require('mongoose');
const EnvConnectionTypeSchema = require('./env-connection-type');

const EnvConnectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name is Required",
        unique:true,
        index:true,
        trim: true
    },
    identifier: {
        type: String,
        required: "Identifier is Required",
        unique:true,
        index:true,
        trim: true
    },
    connection_type: {
        type: EnvConnectionTypeSchema,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('EnvConnection', EnvConnectionSchema);