const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Product name is required"] },
  description: {
    type: String,
    required: [true, "Please enter a product description"],
  },
  price: { type: Number, required: [true, "Price is required"] },
  image: {
    type: String,
    required: [true, "Enter a product image"],
  },
});

module.exports = mongoose.model("product", productSchema);
