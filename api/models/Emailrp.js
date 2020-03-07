const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  
// Define collection and schema for Product  
let Emailschema = new Schema({  
  _id: mongoose.Schema.Types.ObjectId,
   avatar: {
    type: String
  },
  email:
  {
      type:String
  },
 subject:
 {
     type:String
 }, 
 date:{
    type: Date,
    default :Date.now
  } 

},{  
    collection: 'emailrps'  
});  
module.exports = mongoose.model('Emailrp', Emailschema);  