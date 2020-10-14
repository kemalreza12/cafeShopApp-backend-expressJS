const connection = require('../configs/db')
const {actionQuery} = require('../helpers/helpers')

const products = {
      getProductById: (id) => {
        return actionQuery("SELECT * FROM products WHERE id= ?", id)
      },
      searchProduct:(search) =>{
        console.log(search)
        return actionQuery('SELECT * FROM products WHERE name LIKE ?',`%${search}%`)
      },
      getAllProduct: ({...arg}) => {
        console.log(arg)
        return actionQuery(`SELECT * FROM products ${arg.search? 'WHERE name LIKE ?': ''} ORDER BY ?? ${arg.typeSort} LIMIT ${arg.limit} OFFSET ${arg.offset}`, arg.search ? [`%${arg.search}%`, arg.sortdata]:arg.sortdata )
      },
      countproduct: () => {
        return actionQuery(`SELECT count(*) AS totalData FROM products`)
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