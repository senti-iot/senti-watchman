const serviceManager = require('./servicemanager')
const systemctl = require('systemctl')
const errorCode = require('./systemctl-errorcode')

const serviceMgr = serviceManager()

const restartNodemon = async () => {
	console.log('Nodemon is restarting ... ')
	process.kill(process.pid, 'SIGUSR2') 
	// DANGER - Kills nodemon service and restarts nodemon
}

const restartSystemD = async () => {
	console.log('SystemD is restarting ... ')
	let result = await systemctl.restart('senti-watchman.service')
	let exitCode = result.childProcess.exitCode
	if (exitCode === 0) {
		return errorCode(exitCode)
	} else {
		console.log('Error with systemd restart exit code: ', exitCode, ' ', errorCode(exitCode))
		return errorCode(exitCode)
	}
}

const restartService = async () => {
	switch (serviceMgr) {
		case 'nodemon': return await restartNodemon()
		case 'systemd': return await restartSystemD()
		default: null
		break
	}
}

module.exports = restartService

const test = async () => {
	let result = await restartService()
	return result
}

test().then(res => console.log(res))