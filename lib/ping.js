// Probably move to new thin Senti MQTT client

const ping = async (mqttClient, topic, payload, interval) => {
	setInterval(() => {
		mqttClient.publish(topic, JSON.stringify(payload), { retain: false })
	}, interval)
}

module.exports = ping