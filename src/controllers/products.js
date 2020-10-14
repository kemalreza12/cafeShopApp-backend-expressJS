const productsModels = require('../models/products')

const products = {
    getProductsById: (req, res) => {
        const id  = req.params.id;
        productsModels.getProductsById(id)
        .then((result) => {
            resultProducts = result;
            res.json(resultProducts);
        })
        .catch((err) => {
            console.log(err)
        })
    },
    getAllProduct: (req, res) =>{
        productsModels.getAllProduct()
        .then((result)=>{
            resultProducts = result;
            res.json(resultProducts);
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    updateProduct: (req, res) => {
        const id = req.params.idtes
        const {name, image, price, idCategory} = req.body
        const data = {
            name,
            image,
            price,
            idCategory
        }
        productsModels.updateProducts(id, data)
        .then((result) => {
            const resultProducts = result;
            console.log(result)
            res.json(resultProducts)
        })
        .catch((err) => {
            console.log(err)
        })
    },
    deleteProduct: (req, res) => {
        const id = req.params.id
        productsModels.deleteProducts(id)
        .then((result) => {
            resultProducts = result;
            res.json(resultProducts);
        })
        .catch((err) => {
            console.log(err)
        })
    },
    insertProduct: (req, res) => {
        const {name, image, price, idCategory} = req.body
        const data = {
            name,
            image,
            price,
            idCategory
        }
        productsModels.insertProduct(data)
        .then((result) => {
            const resultProducts = result;
            console.log(result)
            res.json(resultProducts)
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

module.exports = products