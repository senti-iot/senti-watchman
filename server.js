const watch = require('./lib/watch')
const startServer = require('./lib/startserver')
const serviceProcess = require('./lib/serviceprocess')


// Set up file watching
watch()

// Start express server and local endpoints
startServer()

// Run primary processes
serviceProcess()
