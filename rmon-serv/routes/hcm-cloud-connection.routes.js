const express = require('express');
const router = express.Router();
var HCMCloudConnection = require('../models/hcm-cloud-connection');

router.post('/', (req, res) => {
    var cloudConn = new HCMCloudConnection(req.body);
    //hcmCloudConnection.password = hcmCloudConnection.generateHash(req.password);
    var hashedPass = cloudConn.generateHash(cloudConn.password);
    hcmCloudConnection.save().then( hcmCloudConnection => {
     res.status(200).json({'message': 'Environment Connection successfully added '});
     })
     .catch(err => {
      res.status(400).send("Error when saving to database");
     });
  });

router.get('/', (req, res) => {
    hcmCloudConnection.find((err, hcmCloudConnection) =>{
        if(err){
          console.log(err);
        }
        else {
          res.json(hcmCloudConnection);
        }
      });
});

router.get('/:id', (req, res) => {
    var id = req.params.id;
    hcmCloudConnection.findById(id, (err, hcmCloudConnection) =>{
        res.json(hcmCloudConnection);
    });
});

module.exports = router;