const ping = require('./ping')

const serviceProcess = async (container) => {
	// Here comes the pain ... and the main service processes
				
	let topic = container.config.mqttRootTopics.watchman + container.clientId + '/status'
	
	let interval = container.config.services.pingInterval
	
	ping(container.mqttClient, topic, 'Hello Broker from Watchman on ' + container.clientId, interval)
	console.log(topic)

}

module.exports = serviceProcess

// senti/services/watchman/8020/status
// senti/services/watchman/cb-pi/status

