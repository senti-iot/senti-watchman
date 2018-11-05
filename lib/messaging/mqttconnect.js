var mqtt = require('mqtt')


const mqttConnect = (config, clientId) => {
	let client = mqtt.connect(config.mqttConnect.host, {
		keepalive: config.mqttConnect.keepalive,
		clientId: clientId || config.mqttConnect.clientId,
		will: config.mqttWillWatchman
	})
	console.log('MQTT connection established!')
	return client
}

module.exports = mqttConnect
