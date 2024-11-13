const express = require ('express')
const postDriver = require('../handlers/postDriver')
const postRoute = express.Router()

postRoute.post('/drivers', postDriver)

module.exports = postRoute