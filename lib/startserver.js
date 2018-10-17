require('dotenv').config({ path: '../.env' })
const express = require('express')
const bodyParser = require('body-parser')
const { promisify } = require('util')
const app = express()

app.use(bodyParser.json())

// Routes will go here
app.get("/", (req, res, next) => {
	var date = new Date().toISOString()
	console.log('sending date: ', date)
	res.end(date)
})

const startServer = async () => {
	const port = process.env.SERVER_PORT || 3001
	await promisify(app.listen).bind(app)(port)
	console.log(`Senti Watchman Server listening on port ${port}`)
}

module.exports = startServer