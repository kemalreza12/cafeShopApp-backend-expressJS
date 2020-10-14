const productsModels = require('../models/products')
const helper = require('../helpers/helpers')
const redis = require('redis')
// const client = redis.createClient(6379);


const products = {
    getProductById: (req, res) => {
        const id  = req.params.id;
        productsModels.getProductById(id)
        .then((result) => {
            resultProducts = result;
            helper.response(res, resultProducts, 200, null)
        })
        .catch((err) => {
            console.log(err)
        })
    },
    getAllProduct: (req, res) => {
        const sortdata = req.query.sort || 'id';
        const typeSort = req.query.typesort || 'ASC' 
        const search = req.query.search
        const limit = req.query.limit || 9
        const offset = ((req.query.page || 1) -1) * limit
        productsModels.getAllProduct({sortdata,typeSort, search, limit, offset})
        .then((result) => {
          resultProducts = result
    
        //   res.json(resultProducts);
        //   client.setex('getallproduct', 60*60*12 , JSON.stringify(resultProducts))
          helper.response(res, resultProducts, 200, null, req.paginations)
        })
        .catch((err) => {
          console.log(err)
        })
      },
    updateProduct: (req, res) => {
        const id = req.params.idtes
        const {name, price, idCategory} = req.body
        const data = {
            name,
            price,
            idCategory,
            createdAt: new Date(),
            updateAt: new Date()
        }
        if(req.file) {
            req.image = `http://localhost:8000/uploads/${req.file.filename}`
        }
        productsModels.updateProduct(id, data)
        .then((result) => {
            const resultProducts = result;
            console.log(result)
            helper.response(res, resultProducts, 200, null)
        })
        .catch((err) => {
            console.log(err)
        })
    },
    deleteProduct: (req, res) => {
        const id = req.params.id
        productsModels.deleteProduct(id)
        .then((result) => {
            resultProducts = result;
            helper.response(res, resultProducts, 200, null)
        })
        .catch((err) => {
            console.log(err)
        })
    },
    insertProduct: (req, res) => {
        console.log(req.file);
        const {name, price, idCategory} = req.body
        const data = {
            name,
            image:`http://localhost:8000/uploads/${req.file.filename}`,
            price,
            idCategory,
            createdAt: new Date(),
            updateAt: new Date()
        }
        productsModels.insertProduct(data)
        .then((result) => {
            const resultProducts = result;
            console.log(result)
            // res.json(resultProducts)
            helper.response(res, resultProducts, 200, null)
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

module.exports = products