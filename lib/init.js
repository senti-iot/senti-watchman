const getConfig = require('./getconfig')
const getClientId = require('./getclientid')
const mqttConnect = require('./mqttconnect')

const init = async () => {
	let config = await getConfig()
	
	let clientId = 'watchman-' + getClientId()

	let topic = config.mqttRootTopics.watchman + '/' + clientId + '/status'
	config.mqttWillWatchman.topic = topic
	
	let mqttClient = mqttConnect(config, clientId)
	

	let initObj = {
		clientId: clientId,
		mqttClient: mqttClient,
		config: config,
		topic: topic
	}

	return initObj
}

module.exports = init
