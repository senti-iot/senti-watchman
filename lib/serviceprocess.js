const getOptions = require('./getoptions')
const getMQTTOptions = require('./getmqttoptions')
const ping = require('./ping')
const getClientId = require('./getclientid')


const serviceProcess = async () => {

	// Here comes the pain ... and the main service processes
	// ping()

	console.log('Client ID:', getClientId())

	let options = await getOptions()
	let mqttOptions = await getMQTTOptions()

	if (options !== null) {
		console.log('OPTIONS')
		console.log(options)
	}
	if (mqttOptions !== null) {
		console.log('MQTT OPTIONS')		
		console.log(mqttOptions)
	}

}

module.exports = serviceProcess