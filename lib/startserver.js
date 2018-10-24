var dotenv = require('dotenv').load()
const express = require('express')
var helmet = require('helmet')
const bodyParser = require('body-parser')
const { promisify } = require('util')
const app = express()
const newVersion = require('./version').newVersion
const getLocalVersion = require('./version').getLocalVersion

app.use(helmet())
app.use(bodyParser.json())

// Routes for local device interaction will go here
app.get("/", (req, res, next) => {
	res.end('There is absolutely nothing to see here ... ')
})

// Start http server
const startServer = async (server) => {
	console.log(`${server.serverTitle} version ${getLocalVersion()}`)
	
	const port = server.port || process.env.SENTI_WATCHMAN_PORT || 3001
	await promisify(app.listen).bind(app)(port)
	console.log(`${server.serverTitle} listening on port ${port}`)
}

newVersion().then((res) => {
	if (res) console.log('New version available')
})

module.exports = startServer