const ping = require('./ping')

const serviceProcess = async (container) => {
	// console.log(container)
	// Here comes the pain ... and the main service processes
	
				
	let topic = container.config.mqttRootTopics.watchman + container.clientId + '/status'
	console.log(topic)

	let interval = container.config.services.pingInterval
	// console.log(interval)
	
	
	// var mqttClient = mqtt.connect('mqtt://hive.senti.cloud')
	// mqttClient.publish(topic + 'status', 'Hello Watchman from ' + clientId)
	
	ping(container.mqttClient, topic, 'Hello Broker from Watchman on ' + container.clientId, interval)

}

module.exports = serviceProcess

// senti/services/watchman/8020/status
// senti/services/watchman/cb-pi/status

