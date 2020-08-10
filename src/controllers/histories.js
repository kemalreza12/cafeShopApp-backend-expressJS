const historiesModels = require('../models/histories')

const histories = {
    getHistoryById: (req, res) => {
        const id  = req.params.id;
        historiesModels.getHistoryById(id)
        .then((result) => {
            resultHistories = result;
            res.json(resultHistories);
        })
        .catch((err) => {
            console.log(err)
        })
    },
    getAllHistory: (req, res) =>{
        historiesModels.getAllHistory()
        .then((result)=>{
            resultHistories = result;
            res.json(resultHistories);
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    updateHistory: (req, res) => {
        const id = req.params.idtes
        const {income, orders} = req.body
        const data = {
            income,
            orders,
            time: new Date()
        }
        historiesModels.updateHistory(id, data)
        .then((result) => {
            const resultHistories = result;
            console.log(result)
            res.json(resultHistories)
        })
        .catch((err) => {
            console.log(err)
        })
    },
    deleteHistory: (req, res) => {
        const id = req.params.id
        historiesModels.deleteHistory(id)
        .then((result) => {
            resultHistories = result;
            res.json(resultHistories);
        })
        .catch((err) => {
            console.log(err)
        })
    },
    insertHistory: (req, res) => {
        const {income, orders} = req.body
        const data = {
            income,
            orders,
            time: new Date()
        }
        historiesModels.insertHistory(data)
        .then((result) => {
            const resultHistories = result;
            console.log(result)
            res.json(resultHistories)
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

module.exports = histories