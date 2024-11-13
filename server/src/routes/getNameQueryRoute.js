const express = require ("express");
const {getDriverNameQuery} = require('../handlers/getDriverNameQuery.js')
const query = express.Router()

query.get('/drivers/name', getDriverNameQuery)

module.exports = query