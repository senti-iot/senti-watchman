var mqtt = require('mqtt')


const mqttConnect = (mqttOptions, clientId) => {
	let client = mqtt.connect(mqttOptions.host, {
		keepalive: mqttOptions.keepalive,
		clientId: clientId || mqttOptions.clientId,
		will: mqttOptions.will
	})
	
	return client
}

module.exports = mqttConnect
