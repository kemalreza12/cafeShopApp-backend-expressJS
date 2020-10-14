const categoriesModels = require('../models/categories')

const categories = {
    getCategoryById: (req, res) => {
        const id  = req.params.id;
        categoriesModels.getCategoryById(id)
        .then((result) => {
            resultCategories = result;
            res.json(resultCategories);
        })
        .catch((err) => {
            console.log(err)
        })
    },
    getAllCategory: (req, res) => {
        categoriesModels.getAllCategory()
        .then((result)=>{
            resultCategories = result;
            res.json(resultCategories);
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    updateCategory: (req, res) => {
        const id = req.params.idtes
        const {name} = req.body
        const data = {
            name
        }
        categoriesModels.updateCategory(id, data)
        .then((result) => {
            const resultCategories = result;
            console.log(result)
            res.json(resultCategories)
        })
        .catch((err) => {
            console.log(err)
        })
    },
    deleteCategory: (req, res) => {
        const id = req.params.id
        categoriesModels.deleteCategory(id)
        .then((result) => {
            resultCategories = result;
            res.json(resultCategories);
        })
        .catch((err) => {
            console.log(err)
        })
    },
    insertCategory: (req, res) => {
        const {name} = req.body
        const data = {
            name
        }
        categoriesModels.insertCategory(data)
        .then((result) => {
            const resultCategories = result;
            console.log(result)
            res.json(resultCategories)
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

module.exports = categories