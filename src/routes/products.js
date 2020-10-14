const express = require('express');
const productsController = require('../controllers/products')
const router = express.Router()
const paginationProduct = require('../middlewares/paginations').products
const {verifyAccess} = require('../middlewares/auth')
const { upload } = require('../middlewares/multer')


router
    .get('/:id', productsController.getProductById)
    .get('/', verifyAccess, paginationProduct, productsController.getAllProduct)
    .post('/', upload, productsController.insertProduct)
    .patch('/:idtes', upload, productsController.updateProduct)
    .delete('/:id', productsController.deleteProduct)
    

module.exports = router