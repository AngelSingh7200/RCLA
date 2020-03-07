const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  
// Define collection and schema for Product  
let Billing = new Schema({  
  billno: {  
    type: String  
  },  
  amount: {  
    type: String  
  },  
  point: {  
    type: String  
  },  
   
},{  
    collection: 'Billing'  
});  
module.exports = mongoose.model('Billing', Billing);  