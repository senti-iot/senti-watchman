var dotenv = require('dotenv').load()
const express = require('express')
const bodyParser = require('body-parser')
const { promisify } = require('util')
const app = express()
const newVersion = require('./version').newVersion
const getLocalVersion = require('./version').getLocalVersion

app.use(bodyParser.json())

// Routes will go here
app.get("/", (req, res, next) => {
	var date = new Date().toISOString()
	console.log('sending date: ', date)
	res.end(date)
})

const startServer = async () => {
	const port = process.env.SENTI_WATCHMAN_PORT || 3001
	await promisify(app.listen).bind(app)(port)
	console.log(`Senti Watchman Server listening on port ${port}`)
}

console.log('Senti Watchman version ' + getLocalVersion())

newVersion().then((res) => {
	if (res) console.log('New version available')
})

module.exports = startServer