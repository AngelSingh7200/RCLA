const express = require('express');  
const app = express();  
const billingRoutes = express.Router();  
// Require Product model in our routes module  
let Billing = require('../models/Billing');  
// Defined store route  
billingRoutes.route('/add').post(function (req, res) {  
  let billing = new Billing(req.body);  
  billing.save()  
    .then(billing => {  
      res.status(200).json({'Billing': 'Billing has been added successfully'});  
    })  
    .catch(err => {  
    res.status(400).send("unable to save to database");  
    });  
}); 
module.exports = billingRoutes; 