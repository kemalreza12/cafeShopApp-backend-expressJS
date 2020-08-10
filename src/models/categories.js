const connection = require('../configs/db')

const categories = {
    getCategoryById: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM categories WHERE id = ?", id, (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getAllCategory: () =>{
        return new Promise((resolve, reject) =>{
            connection.query("SELECT * FROM categories", (err, result) =>{
                if(!err){
                    resolve(result)
                }else{
                    reject( new Error(err))
                }
            })
        })
    },
    updateCategory: (id, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE categories SET ? WHERE id = ?", [data, id], (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteCategory: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM categories WHERE id = ?", id, (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject( new Error(err))
                }
            })
        })
    },
    insertCategory: (data) => {
        console.log(data)
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO category SET ?", data, (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            } )
        })
    }
}

module.exports = categories