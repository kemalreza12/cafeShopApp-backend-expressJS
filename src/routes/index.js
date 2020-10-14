const express = require('express')

const routerProducts = require('./products')
const routerCategories = require('./categories')
const routerHistories = require('./histories')
const routerUsers = require('./users')

const router = express.Router()

router
    .use('/products', routerProducts)
    .use('/categories', routerCategories)
    .use('/histories', routerHistories)
    .use('/users', routerUsers)

module.exports = router;