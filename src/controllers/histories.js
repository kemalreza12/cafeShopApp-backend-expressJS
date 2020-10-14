const historiesModels = require('../models/histories')
const helper = require('../helpers/helpers')
// const redis = require('redis')
// const client = redis.createClient(6379);

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
            // client.setex('getallhistory', 60*60*12 , JSON.stringify(resultHistories))
            helper.response(res, resultHistories, 200, null)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    updateHistory: (req, res) => {
        const id = req.params.idtes
        const {invoices, cashier, orders, amount} = req.body
        const data = {
            invoices,
            cashier,
            amount,
            orders,
            date: new Date()
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
        const {invoices, cashier, orders, amount} = req.body
        const data = {
            invoices,
            cashier,
            amount,
            orders,
            date: new Date()
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