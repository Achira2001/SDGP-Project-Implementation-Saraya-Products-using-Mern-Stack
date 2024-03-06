const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    img: String,
    title: String,
    desc: String,
    price: Number
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
