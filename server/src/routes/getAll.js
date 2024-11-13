const express = require('express')
const getDrivers = require('../handlers/getDrivers')
const getAll = express.Router()

getAll.get('/drivers', getDrivers)

module.exports = getAll