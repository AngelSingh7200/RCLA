let express = require('express'),
  multer = require('multer'),
  mongoose = require('mongoose'),
  contactRoutes = express.Router();

// Multer File upload settings


// User model

 
let Contact = require('../models/Contact'); 

contactRoutes.route('/').get(function (req, res) {  
  Contact.find(function (err, contacts){  
    if(err){  
      console.log(err);  
    }  
    else {  
      res.json(contacts);  
    }  
  });  
});  



module.exports = contactRoutes;