require('dotenv').config({ path: './.env' })
const express = require('express')
const bodyParser = require('body-parser')
const { promisify } = require('util')
var systemctl = require('systemctl')
var watcher = require('chokidar')

var chokidar = require('chokidar');

// One-liner for current directory, ignores .dotfiles
chokidar.watch('./', { ignored: /(^|[\/\\])\../ }).on('all', (event, path) => {
	console.log(event, path)
	systemctl.restart('senti-watchman.service').then(output => console.log)
})

const app = express()

app.use(bodyParser.json())

// Routes will go here

// Default root route
app.get("/", (req, res, next) => {
	var date = new Date().toISOString()
	console.log('sending date: ', date)
	res.end(date)
})

const startServer = async () => {
	const port = process.env.SERVER_PORT || 3000
	await promisify(app.listen).bind(app)(port)
	console.log(`Senti Watchman Server listening on port ${port}`)
}

startServer()
