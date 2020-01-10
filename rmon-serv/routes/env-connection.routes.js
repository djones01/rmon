const express = require('express');
const router = express.Router();
const EnvConnection = require('../models/env-connection');

router.post('/', (req, res) => {
    var envConnection = new EnvConnection(req.body);
    envConnection.save().then( envConnection => {
     res.status(200).json({'message': 'Environment Connection successfully added '});
     })
     .catch(err => {
      res.status(400).send("Error when saving to database");
     });
  });

router.get('/', (req, res) => {
    EnvConnection.find((err, envConnections) =>{
        if(err){
          console.log(err);
        }
        else {
          res.json(envConnections);
        }
      });
});

router.get('/:id', (req, res) => {
    var id = req.params.id;
    EnvConnection.findById(id, (err, envConnection) =>{
        res.json(envConnection);
    });
});

module.exports = router;