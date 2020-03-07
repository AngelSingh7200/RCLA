const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  
// Define collection and schema for Product  
let Billingschema = new Schema({  
  _id: mongoose.Schema.Types.ObjectId,
   avatar: {
    type: String
  },
  
  subtotal:
  {
      type:String
  },
 subpoint:
 {
     type:String
 }, 
 date:{
    type: Date,
    default :Date.now
  } 

},{  
    collection: 'billingrps'  
});  
module.exports = mongoose.model('Billingrps', Billingschema);  