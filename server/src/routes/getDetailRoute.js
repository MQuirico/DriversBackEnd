const express = require ('express')
const getDriverDetail = require ('../handlers/getDriverDetail')
const detailRoute = express.Router()

detailRoute.get('/drivers/:idDriver', getDriverDetail)

module.exports = detailRoute