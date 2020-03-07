const Billing = require('../models/Billing.js/index.js');
exports.create = (req, res) => {
    // Create a Customer
    const billing = new Billing(req.body);
 
    // Save a Customer in the MongoDB
    billing.save()
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json({
            msg: err.message
        });
    });
};