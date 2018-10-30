const ping = require('../messaging/ping')
const messageListener = require('../messaging/messagelistener')

const serviceProcess = async (init) => {
	// Here comes the pain ... and the main service processes, the doing
	
	let interval = init.config.services.pingInterval
	
	await ping(init.mqttClient, init.topicStatus, 'Hello Broker from Watchman on ' + init.clientId, interval)

	
	await messageListener(init)

}

module.exports = serviceProcess
