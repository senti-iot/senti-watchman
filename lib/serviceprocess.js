const ping = require('./ping')

const serviceProcess = async (init) => {
	// Here comes the pain ... and the main service processes
	
	let interval = init.config.services.pingInterval
	
	ping(init.mqttClient, init.topic, 'Hello Broker from Watchman on ' + init.clientId, interval)
	console.log(init.topic)

}

module.exports = serviceProcess
