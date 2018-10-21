var mqtt = require('mqtt')


const mqttConnect = (mqttOptions) => {
	let client = mqtt.connect(mqttOptions.host, {
		keepalive: mqttOptions.keepalive,
		clientId: mqttOptions.clientId,
		will: mqttOptions.will
	})
	
	return client
}

module.exports = mqttConnect
