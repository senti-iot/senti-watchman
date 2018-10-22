const getOptions = require('./getoptions')
const getMQTTOptions = require('./getmqttoptions')
const ping = require('./ping')
const getClientId = require('./getclientid')
const mqttConnect = require('./mqttconnect')
var mqtt = require('mqtt')

const serviceProcess = async (config) => {
	console.log(config)
	// Here comes the pain ... and the main service processes
	
	console.log('Client ID:', getClientId())
			
	let options = await getOptions()
	let mqttOptions = await getMQTTOptions()
	let topic = mqttOptions.topic_roots.watchman
	let interval = options.ping_interval
	
	if (options !== null) {
		// console.log('OPTIONS')
		// console.log(options)
	}
	
	if (mqttOptions !== null) {		
		// console.log('MQTT OPTIONS')		
		// console.log(topic)
		// console.log(mqttOptions)
	}
	
	let mqttClient = mqttConnect(mqttOptions)
	let clientId = getClientId()
	// console.log(client)
	// var mqttClient = mqtt.connect('mqtt://hive.senti.cloud')
	// mqttClient.publish(topic + 'status', 'Hello Watchman from ' + clientId)
	
	ping(mqttClient, topic + clientId + '/status', 'Hello Broker from Watchman on:' + clientId, interval)

}

module.exports = serviceProcess

// senti/services/watchman/8020/status
// senti/services/watchman/cb-pi/status