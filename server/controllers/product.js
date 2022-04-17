const Product = require("../models/product.js");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ products });
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({ product });
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async (req, res) => {
  try {
    const { id: productId } = req.params;
    const product = await Product.find({ _id: productId });

    if (!product) {
      return res.status(404).json(`No task with id of ${productId}`);
    }

    res.status(200).json({ product });
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id: productId } = req.params;
    const product = await Product.findOneAndDelete({ _id: productId });

    if (!product) {
      return res.status(404).json(`No task with id of ${productId}`);
    }

    res.status(200).json(`Product with id of ${productId} deleted`);
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id: productId } = req.params;
    const product = await Product.findOneAndUpdate(
      { _id: productId },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!product) {
      return res.status(404).json(`No task with id of ${productId}`);
    }

    res.status(200).json(product);
  } catch (error) {
      console.log(error);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
  updateProduct
};
