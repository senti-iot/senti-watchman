
const scheduledUpdate = async () => {
	// Here is where the real update executes
	console.log('Now updating ... please wait!')
	// gitPull()
	// npmInstall()
}

// MQTT disconnect client.disconnect or client.end must run before this
const update = async (when) => {
	console.log('Update will start in', when, 'seconds')
	await setTimeout(scheduledUpdate, (when * 1000))
}

module.exports = update

update(5)

