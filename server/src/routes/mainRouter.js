const { Router } = require ("express");
const query = require ('./getNameQueryRoute.js')
const getAll = require ('./getAll.js')
const detailRoute = require ('./getDetailRoute.js')
const teamsRoute = require ('./TeamsRoute.js')
const postRoute = require ('./postRoute.js')
const server = Router();

server.use("/", query)
server.use("/", detailRoute)
server.use("/", getAll)
server.use("/", teamsRoute)
server.use("/", postRoute)

module.exports = server;
