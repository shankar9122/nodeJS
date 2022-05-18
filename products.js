const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,
    sale: Boolean
});


module.exports = mongoose.model("products", productSchema);
