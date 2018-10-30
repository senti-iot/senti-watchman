const update = require('../update/update')
const restartService = require('../service/restartservice')

const messageListener = async (init) => {

	console.log('Now listening to MQTT messages')
	
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
					console.log('WATCHMAN UPDATE A')
					update(0)
					// restartService()
				} else {
					console.log('WATCHMAN UPDATE B')
					// update(parseInt(msgStr)).then((res) => res ? restartService() : console.log('OK'))
					// let x = await update(parseInt(msgStr)).then(rs=> /* restartService() */ rs)
					await update(parseInt(msgStr)).then(() => {
						console.log('RESTARTING');
						restartService()
					})
				}
				break
			}
			case (updateTopicClient): {
				if (msgStr === 'now') {
					console.log('CLIENT UPDATE')
					update(0)
				} else {
					console.log('CLIENT UPDATE')
					update(parseInt(msgStr))
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