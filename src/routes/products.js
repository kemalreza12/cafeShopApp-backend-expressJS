const express = require('express');
const productsController = require('../controllers/products')
const router = express.Router()

router
    .get('/:id', productsController.getProductsById)
    .get('/', productsController.getAllProduct)
    .post('/', productsController.insertProduct)
    .patch('/:idtes', productsController.updateProduct)
    .delete('/:id', productsController.deleteProduct)

module.exports = router