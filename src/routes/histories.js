const express = require('express');
const historiesController = require('../controllers/histories')
const router = express.Router()
const {verifyAccess} = require('../middlewares/auth')
// const redis = require('../middlewares/redis')

router
    .get('/:id', historiesController.getHistoryById)
    .get('/', verifyAccess, historiesController.getAllHistory)
    .post('/', historiesController.insertHistory)
    .patch('/:idtes', historiesController.updateHistory)
    .delete('/:id', historiesController.deleteHistory)

module.exports = router