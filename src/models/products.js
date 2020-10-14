const connection = require('../configs/db')

const products = {
    getProductById: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM products WHERE id = ?", id, (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getAllProduct: () =>{
        return new Promise((resolve, reject) =>{
            connection.query("SELECT * FROM products", (err, result) =>{
                if(!err){
                    resolve(result)
                }else{
                    reject( new Error(err))
                }
            })
        })
    },
    updateProduct: (id, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE products SET ? WHERE id = ?", [data, id], (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteProduct: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM products WHERE id = ?", id, (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject( new Error(err))
                }
            })
        })
    },
    insertProduct: (data) => {
        console.log(data)
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO products SET ?", data, (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            } )
        })
    }
}

module.exports = products