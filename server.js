const init = require('./lib/init')
const watch = require('./lib/watch')
const startServer = require('./lib/startserver')
const serviceProcess = require('./lib/serviceprocess')


const server = async () => {
	let config = await init()
	
	// Start express server and local endpoints
	await startServer(config.server)

	// Set up file watching
	await watch(config.watch)
	
	// Run primary processes
	await serviceProcess(config.services)
}

server()