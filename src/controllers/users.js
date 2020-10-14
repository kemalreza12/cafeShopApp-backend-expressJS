const bcrypt = require('bcryptjs');
const helper = require('../helpers/helpers')
const modelUser = require('../models/users');
const jwt = require('jsonwebtoken');

module.exports = {
    register: (req, res) => {
        const {email, password, firstName, lastName} = req.body
        const data = {
            email,
            password,
            firstName,
            lastName,
            roleId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(data.password, salt, function(err, hash) {
                data.password = hash
                modelUser.register(data)
                .then((result) => {
                    if (result == 'Email is already exists') {
                        helper.response(res, {message: 'Email is already exists'}, 403, null)
                      } else {
                        helper.response(res, {message: 'Register success'}, 201, null)
                      }
                })
                .catch((err) => {
                    console.log(err);
                });
            });
        });
    },
    login: (req, res) => {
        const {email, password} = req.body
        modelUser.getUsersbyEmail(email)
        .then((result) => {
            if(result.length <1) return helper.response(res, {message: 'Email not Found !!!'}, 201, null)

            const user = result[0]
            bcrypt.compare(password, user.password).then((resCompare) => {
                if(!resCompare) return helper.response(res, {meessage: 'Password is Wrong !!!'}, 201, null)
                const payload = {
                    id: user.id,
                    email: user.email,
                    roleId: user.roleId
                }
                jwt.sign( payload, process.env.SECRET_KEY, { expiresIn: '1h' }, (err, token) => {
                    user.token = token

                    delete user.password
                    delete user.createdAt
                    delete user.updatedAt
                    helper.response(res, user, 200)
                });
            });
        })
        .catch((err) => {
            console.log(err);
        });
    },
    logout: (req, res) => {
        const id = req.params.id
    
        modelUser.logout(id)
          .then((result) => {
            helper.response(res, null, result, 200, null)
          })
          .catch((err) => {
            console.log(err)
          })
      }
}