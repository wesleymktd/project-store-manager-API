const { productsService } = require('../services');

const listProducts = async (_req, res) => {
  const  allProducts  = await productsService.findAll();
  res.status(200).json(allProducts);
}

const getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productsService.findById(id);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listProducts,
  getProduct,
}