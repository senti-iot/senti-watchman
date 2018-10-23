const getConfig = require('./getconfig')
const getClientId = require('./getclientid')
const mqttConnect = require('./mqttconnect')

const init = async () => {
	let config = await getConfig()
	// console.log(JSON.parse(config))
	// console.log(config)
	
	let clientId = getClientId()
	let mqttClient = mqttConnect(config.mqttConnect, clientId)
	console.log('MQTT client initialized with client ID:', clientId)

	let container = {
		clientId: clientId,
		mqttClient: mqttClient,
		config: config
	}

	return container
}

module.exports = init
