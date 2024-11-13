const express = require ('express')
const getTeams = require ('../handlers/getTeams')
const teamsRoute = express.Router()

teamsRoute.get('/teams', getTeams)

module.exports = teamsRoute