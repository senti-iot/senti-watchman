// Probably move to new thin client

const ping = async (mqttClient, topic, payload, interval) => {
	setInterval(() => {
		mqttClient.publish(topic, JSON.stringify(payload), { retain: false })
		// pub(mqttClient, status, 'online', 'default', false)
		// console.log('Watchman is listening for MQTT packets ...');
	}, interval)
}

module.exports = ping