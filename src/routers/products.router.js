const express = require('express');

const router = express.Router();

const { productsController } = require('../controllers'); 

router.get('/', productsController.listProducts);

router.get('/:id', productsController.getProduct);

router.post('/', productsController.createProduct);

module.exports = router;