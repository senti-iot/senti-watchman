const update = require('../service/update')
// var AsyncClient = require('async-mqtt').AsyncClient

const messageListener = async (init) => {
	// let client = new AsyncClient(init.mqttClient)

	console.log('Now listening to MQTT messages')
	
	let client = init.mqttClient

	client.publish('senti/services/watchman/update', 'Hello from messageListener')

	client.on('message', (topic, message) => {
		let topicStr = topic.toString()
		let msgStr = message.toString()

		let updateTopic = init.topicUpdate
		let updateTopicClient = init.topicUpdateClient

		switch (topicStr) {
			case (updateTopic): {
				if (msgStr === 'now') {
					console.log('WATCHMAN UPDATE')
					update(0)
				} 	
			}
			case (updateTopicClient): {
				if (msgStr === 'now') {
					console.log('CLIENT UPDATE')
					update(0)
				} 
			}





			case 'senti/services/mqttclient/update': if (msgStr === 'restart') {
				console.log('RESTART')
				// log()
				process.kill(process.pid, 'SIGUSR2') // DANGER - Kills nodemon service and restarts nodemon
			}
			case 'senti/services/mqttclient/update': if (msgStr === 'reboot') {
				// sudo shutdown -r 
				console.log('REBOOT')
				// log()
			}
			case 'senti/services/mqttclient/update': if (msgStr === 'clear') {
				process.stdout.write('\x1Bc')
				console.log('SENTI MQTT CLIENT SERVICES STARTED! (' + topic + ')')
			}
			default:
			break
		}
	})
	}


module.exports = messageListener