const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  
// Define collection and schema for Product  
let Eventschma = new Schema({  
  _id: mongoose.Schema.Types.ObjectId,
  avatar: {
    type: String
  },
  Eventtitle: {  
    type: String  
  },  

  EventDescription: {  
    type: String  
  }, 
  
  
  // img: 
  // { 
  //   data: Buffer, 
  //   contentType: String 
  // },
  bodyEvent:
  {
      type:String
  },
 

},{  
    collection: 'events'  
});  
module.exports = mongoose.model('Event', Eventschma);  