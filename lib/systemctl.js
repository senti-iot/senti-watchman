var exec = require('./systemctl-exec')
const errorCode = require('./systemctl-errorcode')

const daemonReload = () => {
	return exec("daemon-reload")
}

const disable = (serviceName) => {
	return exec("disable", serviceName)
}

const enable = (serviceName) => {
	return exec("enable", serviceName)
}

const isEnabled = async (serviceName) => {
	let result
	try {
		result = await exec('is-enabled', serviceName)
	} catch (error) {
		console.log('Error code:', errorCode(error))
	}

	// let result = await exec('is-enabled', serviceName)
	
	if (result.stdout.indexOf('disabled') != -1) {
		return false
	} else {
		return (result.stdout.indexOf('enabled') != -1) ? true : false
	}
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

const isActive = async (serviceName) => {
	let result = await exec("is-active", serviceName)
	return (result.stdout.indexOf('active') != -1) ? true : false
}

const restart = (serviceName) => {
	return exec("restart", serviceName)
}

const start = (serviceName) => {
	return exec("start", serviceName)
}

const stop = (serviceName) => {
	return exec("stop", serviceName)
}

module.exports.exec = exec
module.exports.daemonReload = daemonReload
module.exports.disable = disable
module.exports.enable = enable
module.exports.isEnabled = isEnabled
module.exports.isActive = isActive
module.exports.restart = restart
module.exports.start = start
module.exports.stop = stop


// Possible extensions:
// MQTT 
// Extend this with a REST API
// https://www.npmjs.com/package/systemctl-rest

// Test (works on Ubuntu):
isActive('pm2-root.service').then(output => console.log('PM2 is active:', output))
isEnabled('pm2-root.service').then(output => console.log('PM2 is enabled:', output))

isActive('apache2.service').then(output => console.log('Apache2 is active:', output))
isEnabled('apache2.service').then(output => console.log('Apache2 is enabled:', output))

isActive('nginx.service').then(output => console.log('nginx is active:', output))
isEnabled('nginx.service').then(output => console.log('nginx is enabled:', output))

isActive('rsync.service').then(output => console.log('rsync is active:', output))
isEnabled('rsync.service').then(output => console.log('rsync is enabled:', output))

isActive('zabbix-agent.service').then(output => console.log('Zabbix-agent is active:', output))
// isEnabled('zabbix-agent.service').then(output => console.log('Zabbix-agent is enabled:', output))
