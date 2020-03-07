var express=require("express");
var bodyParser=require('body-parser')
var router=express.Router(); 
require('dotenv').config();
const nodemailer=require('nodemailer')
let Sender = require('./models/Sender'); 
var mongoose = require('mongoose'); 
var db = require('./db');
var db=mongoose.connection; 
router.use(bodyParser.json()); 
router.use(express.static('views')); 
router.use(bodyParser.urlencoded({ 
    extended: true
}));



    router.post('/add', function(req,res){ 
       

    
let tansporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
})

        var from = req.body.from; 
        var to = req.body.to; 
        var subject = req.body.subject; 
        var Eventtitle =req.body.Eventtitle; 
        
        
         var data = { 
          "from":from ,
            "to": to, 
            "subject":subject, 
            
            "Eventtitle":Eventtitle,
           
            html:`<html>
            <body>
                <b>hello</b>
                <h1 [innerHTML]= Eventtitle>${req.body.Eventtitle}</h1>
                </body>
                </html>`,




                // '<img [src]="cid:imgURL"/>'
            // attachments:[
            //     {
            //         filename:'images.jfif',
            //         path:__dirname+'/images.jfif',
            //         cid:"images"

            //     },
            // ]
            
    
                   } ;

    
tansporter.sendMail(data,function(err,data)
{
    if(err)
    {
        console.log('error',err)
    }
    else{
        console.log('email sent')
        console.log(from,to,subject,Eventtitle)
    }



})

    }) 
      

module.exports=router;