const gitPull = require('./gitpull')
const npmInstall = require('./npminstall')


const scheduledUpdate = async () => {
	// Here is where the real update executes
	console.log('Now updating ... please wait!')
	await gitPull()
	await npmInstall()
}

// MQTT disconnect client.disconnect or client.end must run before this
const update = async (when) => {
	console.log('Update will start in', when, 'seconds')
	await setTimeout(await scheduledUpdate, (when * 1000))
	return true
}

module.exports = update



// ---------------------------- LATER ----------------------------

const updateFuture = (date) => {
	const current = parseInt((Date.now() / 1000).toFixed(0))
	const future = parseInt((date.getTime() / 1000).toFixed(0))
	return parseInt(future - current)
}

let futureDate = new Date('2018.10.30 14:26:00 +0100')

// console.log(updateFuture(futureDate))