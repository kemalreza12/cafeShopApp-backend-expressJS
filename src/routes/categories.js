const express = require('express');
const categoriesController = require('../controllers/categories')
const router = express.Router()

router
    .get('/:id', categoriesController.getCategoryById)
    .get('/', categoriesController.getAllCategory)
    .post('/', categoriesController.insertCategory)
    .patch('/:idtes', categoriesController.updateCategory)
    .delete('/:id', categoriesController.deleteCategory)

module.exports = router