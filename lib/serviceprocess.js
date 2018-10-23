const ping = require('./ping')

const serviceProcess = async (initObj) => {
	// Here comes the pain ... and the main service processes
				
	let topic = initObj.config.mqttRootTopics.watchman + initObj.clientId + '/status'
	console.log(topic)
	
	let interval = initObj.config.services.pingInterval
	
	ping(initObj.mqttClient, topic, 'Hello Broker from Watchman on ' + initObj.clientId, interval)
	console.log(topic)

}

module.exports = serviceProcess

// senti/services/watchman/8020/status
// senti/services/watchman/cb-pi/status

