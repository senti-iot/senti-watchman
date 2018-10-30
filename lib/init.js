const getConfig = require('./api/getconfig')
const getClientId = require('./service/getclientid')
const mqttConnect = require('./messaging/mqttconnect')
const subscriptions = require('./messaging/subscriptions')

const init = async () => {
	let config = await getConfig()
	
	let clientId = 'watchman-' + getClientId()

	let topicState = config.mqttRootTopics.watchman + '/' + clientId + '/' + config.mqttPubSubTopics.state
	let topicUpdate = config.mqttRootTopics.watchman + '/' + config.mqttPubSubTopics.update
	let topicUpdateClient = 'senti/services/mqttclient/update'

	config.mqttWillWatchman.topic = topicState
	
	let mqttClient = mqttConnect(config, clientId)
	
	
	let initObj = {
		clientId: clientId,
		mqttClient: mqttClient,
		config: config,
		topicState: topicState,
		topicUpdate: topicUpdate,
		topicUpdateClient: topicUpdateClient
	}
	
	await subscriptions(initObj)

	return initObj
}

module.exports = init
