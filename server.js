const init = require('./lib/init')
const watch = require('./lib/watch/watch')
const startServer = require('./lib/server/startserver')
const serviceProcess = require('./lib/service/serviceprocess')

const server = async () => {
	// Get config from API + init MQTT connection
	let initObj = await init()
	
	// Start express server and local endpoints
	await startServer(initObj.config.server)

	// Set up file watching
	await watch(initObj.config.watch)
	
	// Run primary processes
	await serviceProcess(initObj)
}

server()