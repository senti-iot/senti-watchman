require('dotenv').config({ path: './.env' })
const express = require('express')
const bodyParser = require('body-parser')
const { promisify } = require('util')

const app = express()

app.use(bodyParser.json())

// Routes will go here

// Default root route
app.get("/", (req, res, next) => {
	// res.send('OK')
	res.end(new Date().toISOString())
})

const startServer = async () => {
	const port = process.env.SERVER_PORT || 3000
	await promisify(app.listen).bind(app)(port)
	console.log(`Senti Watchman Server listening on port ${port}`)
}

startServer()
