const getConfig = require('./api/getconfig')
const getClientId = require('./service/getclientid')
const mqttConnect = require('./messaging/mqttconnect')
const subscriptions = require('./messaging/subscriptions')

const init = async () => {
	let config = await getConfig()
	
	let clientId = 'watchman-' + getClientId()

	let topicStatus = config.mqttRootTopics.watchman + '/' + clientId + '/status'
	let topicUpdate = config.mqttRootTopics.watchman + '/update'
	let topicUpdateClient = 'senti/services/mqttclient/update'

	config.mqttWillWatchman.topic = topicStatus
	
	let mqttClient = mqttConnect(config, clientId)
	
	
	let initObj = {
		clientId: clientId,
		mqttClient: mqttClient,
		config: config,
		topicStatus: topicStatus,
		topicUpdate: topicUpdate,
		topicUpdateClient: topicUpdateClient
	}
	
	await subscriptions(initObj)

	return initObj
}

module.exports = init
