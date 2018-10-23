var dotenv = require('dotenv').load()
const express = require('express')
const bodyParser = require('body-parser')
const { promisify } = require('util')
const app = express()
const newVersion = require('./version').newVersion
const getLocalVersion = require('./version').getLocalVersion

app.use(bodyParser.json())

// Routes for local device interaction will go here

app.get("/", (req, res, next) => {
	res.end('Nothing to see here ... ')
})


const startServer = async (config) => {
	const port = process.env.SENTI_WATCHMAN_PORT || 3001
	await promisify(app.listen).bind(app)(port)
	console.log(`Senti Watchman listening on port ${port}`)
	console.log('Senti Watchman version ' + getLocalVersion())
}


newVersion().then((res) => {
	if (res) console.log('New version available')
})

module.exports = startServer