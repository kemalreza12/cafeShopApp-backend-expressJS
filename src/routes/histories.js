const express = require('express');
const historiesController = require('../controllers/histories')
const router = express.Router()

router
    .get('/:id', historiesController.getHistoryById)
    .get('/', historiesController.getAllHistory)
    .post('/', historiesController.insertHistory)
    .patch('/:idtes', historiesController.updateHistory)
    .delete('/:id', historiesController.deleteHistory)

module.exports = router