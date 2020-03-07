const express = require('express'),  
    path = require('path'),  
    bodyParser = require('body-parser'),  
    cors = require('cors'),  
    mongoose = require('mongoose'),  
    config = require('./DB');  
    senders = require('./sender');
    var multer = require('multer');
  //  routes = require('./routes/index');
    const userRoute = require('./routes/user.route');
    const eventRoute = require('./routes/event.route');   
    mongoose.Promise = global.Promise;  
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(  
      () => {console.log('Database is connected') },  
      err => { console.log('Can not connect to the database'+ err)}  
    );  
    const app = express();  
    const DIR = './uploads';
 
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
});
let upload = multer({storage: storage});

    app.use(bodyParser.json());  
    app.use(cors());  
    app.use('/users', userRoute); 
    app.use('/senders',senders);
    app.use('/events', eventRoute); 
    
     
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
 
app.get('/api', function (req, res) {
  res.end('file upload');
});
 
app.post('/api/upload',upload.single('file'), function (req, res) {
    if (!req.file) {
        console.log("Your request doesn’t have any file");
        return res.send({
          success: false
        });
    
      } else {
        console.log('Your file has been received successfully');
        return res.send({
          success: true
        })
      }
});
 
    const port = process.env.PORT || 8000;  
    const server = app.listen(port, function(){  
     console.log('Listening on port ' + port);  
    });  