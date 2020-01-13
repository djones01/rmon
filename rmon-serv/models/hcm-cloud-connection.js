var mongoose = require('mongoose');
var envConnection = require('./env-connection');
const bcrypt = require('bcryptjs');

// Declare connection subtype for HCM Cloud
//var HCMCloudConnectionSchema = EnvConnectionSchema.discriminator('HCMCloudConnection', new mongoose.Schema(

var HCMCloudConnectionSchema = new mongoose.Schema(
    {
        hcmCloudBaseURL:{
            type: String,
            required: "HCM Cloud Base URL is Required",
            unique: true,
            index: true,
            trim: true
        },
        username:{
            type: String,
            required: "Username is Required",
            trim: true
        },
        password:{
            type: String,
            required: "Password is Required"
        }
    }
);

/* HCMCloudConnectionSchema.method('generateHash',function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}); */


// Hash the password
HCMCloudConnectionSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

/*
// Check if password is valid
HCMCloudConnectionSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};
*/

//Export the schema
module.exports = mongoose.model('HCMCloudConnection', HCMCloudConnectionSchema);
/* module.exports = {
    HCMCloudConnection: HCMCloudConnection,
    generateHash: HCMCloudConnection.methods.generateHash(),
    validPassword: HCMCloudConnection.methods.validPassword()
}; */