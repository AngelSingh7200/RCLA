const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  
// Define collection and schema for Product  
let Sender = new Schema({  
   
  from: {  
    type: String  
  },  
  to: {  
    type: String  
  },  
  subject: {  
    type: String  
  }  ,
  text:
  {
      type:String
  },
 

});  
module.exports = mongoose.model('Sender', Sender);  