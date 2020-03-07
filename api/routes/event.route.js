let express = require('express'),
  multer = require('multer'),
  mongoose = require('mongoose'),
  eventRoutes = express.Router();

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
let Event = require('../models/Event');  

eventRoutes.post('/add', upload.single('avatar'), (req, res, next) => {

  const url = req.protocol + '://' + req.get('host')
    const event = new Event(
    {
    _id: new mongoose.Types.ObjectId(),
    
      avatar: url + '/public/' + req.file.filename,
      Eventtitle: req.body.Eventtitle,
      EventDescription: req.body.EventDescription,
      bodyEvent: req.body.bodyEvent,
    },
    
   );
  event.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: "Done upload!",
      userCreated: {
        _id: result._id,
        avatar: result.avatar,
        Eventtitle:result.Eventtitle,
        EventDescription:result.EventDescription,
        bodyEvent:result.bodyEvent
      }
    })
  }).catch(err => {
    console.log(err),
      res.status(500).json({
        error: err
      });
  })
})

eventRoutes.get("/", (req, res, next) => {
  Event.find().then(data => {
    res.status(200).json({
      message: "User list retrieved successfully!",
      events: data
    });
  });
});


eventRoutes.route('/edit/:id').get(function (req, res) {  
  let id = req.params.id;  
  Event.findById(id, function (err, event){  
      res.json(event);  
  });  
});  



module.exports = eventRoutes;