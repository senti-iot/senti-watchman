const update = require('../update/update')
const restartService = require('../service/restartservice')

const messageListener = async (init) => {

	console.log('Now listening to MQTT messages ...')
	console.log('')
	
	let client = init.mqttClient

	// client.publish('senti/services/watchman/update', 'Hello from messageListener')

	client.on('message', async (topic, message) => {
		let topicStr = topic.toString()
		let msgStr = message.toString()

		const updateTopic = init.topicUpdate
		const updateTopicClient = init.topicUpdateClient

		switch (topicStr) {
			case (updateTopic): {
				if (msgStr === 'now') {
					console.log('WATCHMAN INSTANT UPDATE')
					await update(0).then(() => {
						restartService()
					})
				} else {
					console.log('WATCHMAN SCHEDULED UPDATE')
					await update(parseInt(msgStr)).then(() => {
						restartService()
					})
				}
				break
			}
			case (updateTopicClient): {
				if (msgStr === 'now') {
					console.log('CLIENT INSTANT UPDATE')					
					await update(0, '/Users/cbroberg/Apps/senti/senti-mqtt-client').then(() => {
						// restartServiceRemote
						// restartService()
					})
				} else {
					console.log(msgStr)
					console.log('CLIENT SCHEDULED UPDATE')
					await update(parseInt(msgStr), '/Users/cbroberg/Apps/senti/senti-mqtt-client').then(() => {
						// restartService()
					})				
				}
				break
			}



			case 'senti/services/mqttclient/update': if (msgStr === 'restart') {
				console.log('RESTART')
				// log()
				process.kill(process.pid, 'SIGUSR2') // DANGER - Kills nodemon service and restarts nodemon
				break
			}
			case 'senti/services/mqttclient/update': if (msgStr === 'reboot') {
				// sudo shutdown -r 
				console.log('REBOOT')
				// log()
				break
			}
			case 'senti/services/mqttclient/update': if (msgStr === 'clear') {
				process.stdout.write('\x1Bc')
				console.log('SENTI MQTT CLIENT SERVICES STARTED! (' + topic + ')')
				break
			}
			default:
			break
		}
	})
	}


module.exports = messageListener