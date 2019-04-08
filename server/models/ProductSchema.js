var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema(
    {
        product_ID: Number,
        price: String,
        quantity: Number,
    }
);

module.exports = mongoose.model('ProductSchema', ProductSchema);