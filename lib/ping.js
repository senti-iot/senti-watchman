// Probably move to new thin client

const ping = async (mqttClient) => {
	setInterval(() => {
		let payload = {
			status: 'online'
		}
		// client.publish(status, JSON.stringify(payload), { retain: false })
		// pub(mqttClient, status, 'online', 'default', false)
		console.log('Watchman is listening for MQTT packets ...');
	
	}, 5000)
}

module.exports = ping