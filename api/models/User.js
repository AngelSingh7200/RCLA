const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  
// Define collection and schema for Product  
let User = new Schema({  
  _id: mongoose.Schema.Types.ObjectId,
  avatar: {
    type: Array
  },
 email: {  
    type: String  
  },  
  
},{  
    collection: 'User'  
});  
module.exports = mongoose.model('User', User);  

