
const subscriptions = async (init) => {
	const root = init.config.mqttRootTopics.watchman

	console.log('Subscribing to:', init.topicUpdate)
	console.log('Subscribing to:', init.topicUpdateClient)

	init.mqttClient.subscribe(init.topicUpdate)
	init.mqttClient.subscribe(init.topicUpdateClient)
}

module.exports = subscriptions