const connection = require('../configs/db');

module.exports = {
  register: (data) => {
      return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM users WHERE email = ?', data.email, (err, result) => {
          if (!err) {
            if (result != '') {
              resolve('Email is already exists')
            } else {
              connection.query('INSERT IGNORE INTO users SET ?', data, (err, result) => {
                if (!err) {
                  resolve(result)
                } else {
                  reject(new Error(err))
                }
              })
            }
          } else {
            reject(new Error(err))
          }
        })
      })
    },
    getUsersbyEmail: (email) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM users WHERE email = ?", email, (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            });
        });
    },
    logout: (id) => {
        return new Promise((resolve, reject) => {
          connection.query('SELECT * FROM users WHERE id = ?', id, (err, result) => {
            if (!err) {
              resolve('Logout Success')
            } else {
              reject(new Error(err))
            }
          })
        })
      }
}