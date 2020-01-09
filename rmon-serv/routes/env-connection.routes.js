const express = require('express');
const router = express.Router();
const EnvConnection = require('../models/env-connection');

router.route('/envConnection').post((req, res) => {
    var envConnection = new Todo(req.body);
    envConnection.save().then( envConnection => {
     res.status(200).json({'message': 'Environment Connection successfully added '});
     })
     .catch(err => {
      res.status(400).send("Error when saving to database");
     });
  });

router.get('/envConnection', (req, res) => {
    EnvConnection.find((err, todos) =>{
        if(err){
          console.log(err);
        }
        else {
          res.json(todos);
        }
      });
});


router.route('/todos/:id').get((req, res) => {
    var id = req.params.id;
    Todo.findById(id, (err, todo) =>{
        res.json(todo);
    });
  });