const watch = require('./lib/watch')
const startServer = require('./lib/startserver')
const eventListener = require('./lib/eventlistener')

watch()

startServer()

eventListener()