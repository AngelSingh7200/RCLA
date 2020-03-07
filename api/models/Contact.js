const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  
// Define collection and schema for Product  
let Contactschema = new Schema({  
  _id: mongoose.Schema.Types.ObjectId,
  
  email:
  {
      type:String
  },
 

},{  
    collection: 'users'  
});  
module.exports = mongoose.model('Contact', Contactschema);  