const connection = require('../configs/db')

const histories = {
    getHistoryById: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM histories WHERE id = ?", id, (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getAllHistory: () =>{
        return new Promise((resolve, reject) =>{
            connection.query("SELECT * FROM histories", (err, result) =>{
                if(!err){
                    resolve(result)
                }else{
                    reject( new Error(err))
                }
            })
        })
    },
    updateHistory: (id, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE histories SET ? WHERE id = ?", [data, id], (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteHistory: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM histories WHERE id = ?", id, (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject( new Error(err))
                }
            })
        })
    },
    insertHistory: (data) => {
        console.log(data)
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO histories SET ?", data, (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            } )
        })
    }
}

module.exports = histories