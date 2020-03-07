const express = require('express');  
const app = express();  
const userRoutes = express.Router();  
// Require Product model in our routes module  
let User = require('../models/User');  
// Defined store route  
userRoutes.route('/add').post(function (req, res) {  
  let user = new User(req.body);  
  user.save()  
    .then(user => {  
      res.status(200).json({'User': 'Product has been added successfully'});  
    })  
    .catch(err => {  
    res.status(400).send("unable to save to database");  
    });  
});  
userRoutes.route('/').get(function (req, res) {  
  User.find(function (err, users){  
    if(err){  
      console.log(err);  
    }  
    else {  
      res.json(users);  
    }  
  });  
}); 

userRoutes.route('/edit/:id').get(function (req, res) {  
  let id = req.params.id;  
  User.findById(id, function (err, user){  
      res.json(user);  
  });  
});  








module.exports = userRoutes; 