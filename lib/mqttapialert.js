const mqttApiAlert = (mqttClient) => {
	client.publish(topic + 'status', 'Hello Watchman from ' + clientId)
}


module.exports = mqttApiAlert