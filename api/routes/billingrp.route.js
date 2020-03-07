let express = require('express'),
  multer = require('multer'),
  mongoose = require('mongoose'),
  billingrpRoutes = express.Router();

// Multer File upload settings
const DIR = './public/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, fileName)
  }
});

var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});

// User model
let Billingrp = require('../models/Billingrp');  

billingrpRoutes.post('/add', upload.single('avatar'), (req, res, next) => {

  
    const billingrp = new Billingrp(
    {
    _id: new mongoose.Types.ObjectId(),
    
     
     subtotal: req.body.subtotal,
      subpoint: req.body.subpoint,
     
    },
    
   );
  billingrp.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: "Done upload!",
      userCreated: {
        _id: result._id,
        
        subtotal:result.subtotal,
        subpoint:result.subpoint,
       
      }
    })
  }).catch(err => {
    console.log(err),
      res.status(500).json({
        error: err
      });
  })
})




module.exports = billingrpRoutes;