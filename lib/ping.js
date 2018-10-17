// Probably move to new thin client

const ping = async (mqttClient) => {
	setInterval(() => {
		let payload = {
			status: 'online'
		}
		// client.publish(status, JSON.stringify(payload), { retain: false })
		// pub(mqttClient, status, 'online', 'default', false)
		console.log('Listening for MQTT packets ...');
	
	}, 2000)
}

module.exports = ping