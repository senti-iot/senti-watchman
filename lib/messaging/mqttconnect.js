var mqtt = require('mqtt')


const mqttConnect = (config, clientId) => {
	let client = mqtt.connect(config.mqttConnect.host, {
		keepalive: config.mqttConnect.keepalive,
		clientId: clientId || config.mqttConnect.clientId,
		will: config.mqttWillWatchman
	})
	
	return client
}

module.exports = mqttConnect
