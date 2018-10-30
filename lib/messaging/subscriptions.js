
const subscriptions = async (init) => {
	let root = init.config.mqttRootTopics.watchman

	console.log('Subscribing to:', init.topicUpdate)

	init.mqttClient.subscribe(init.topicUpdate)

}

module.exports = subscriptions