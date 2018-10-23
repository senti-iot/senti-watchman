const init = require('./lib/init')
const watch = require('./lib/watch')
const startServer = require('./lib/startserver')
const serviceProcess = require('./lib/serviceprocess')

const server = async () => {
	let container = await init()
	// console.log(container)
	
	// Start express server and local endpoints
	await startServer(container.config.server)

	// Set up file watching
	await watch(container.config.watch)
	
	// Run primary processes
	await serviceProcess(container)
}

server()