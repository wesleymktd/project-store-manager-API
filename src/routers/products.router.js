const express = require('express');

const router = express.Router();

const { productsController } = require('../controllers'); 
const validateNameInput = require('../middlewares/validateNameInput');

router.get('/', productsController.listProducts);

router.get('/search', productsController.getProductSearch); 

router.get('/:id', productsController.getProduct);

router.put('/:id',
  validateNameInput,
  productsController.updateProduct);

router.post('/',
  validateNameInput,
  productsController.createProduct);

router.delete('/:id', productsController.deleteProduct); 

module.exports = router;