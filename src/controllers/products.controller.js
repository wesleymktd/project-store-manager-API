const { productsService } = require('../services');

const listProducts = async (_req, res) => {
  const allProducts = await productsService.findAll();
  res.status(200).json(allProducts);
};

const getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productsService.findById(id);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res) => {
  const { name } = req.body;
  const newProduct = await productsService.createProduct({ name });
  res.status(201).json(newProduct);
};

const updateProduct = async (req, res, next) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const updateReturn = await productsService.updateById(name, id);
    res.status(200).json(updateReturn);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    await productsService.deleteProduct(id);
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};

const getProductSearch = async (req, res) => {
  const { q } = req.query;
  const products = await productsService.searchProducts(q);
  res.status(200).json(products);
};

module.exports = {
  listProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductSearch,
};