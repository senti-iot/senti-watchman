const serviceManager = require('./servicemanager')
const systemctl = require('systemctl')

const serviceMgr = serviceManager()

const restartNodemon = async () => {
	console.log('Nodemon is restarting ... ')
	process.kill(process.pid, 'SIGUSR2') 
	// DANGER - Kills nodemon service and restarts nodemon
}

const restartSystemD = async () => {
	console.log('SystemD is restarting ... ')
	// systemctl.restart('senti-watchman.service').then(output => console.log)
	let result = await systemctl.restart('senti-watchman.service')
	console.log(result.childProcess.exitCode)
	return result
}

const restartService = async () => {

	switch (serviceMgr) {
		case 'nodemon': await restartNodemon()
		case 'systemd': await restartSystemD()
		default: null
		break
	}
}

module.exports = restartService

const test = async () => {
	await restartService()
}

test().then()