var Promise = require('bluebird')
var exec = require('./systemctl-exec')

const isActive = async (serviceName) => {
	let result = await exec("is-active", serviceName)
	// return result.stdout == 'active\n' ? true : false
	return (result.stdout.indexOf('active') != -1) ? true : false
}

const daemonReload = () => {
	return exec("daemon-reload")
}

const disable = (serviceName) => {
	return exec("disable", serviceName)
}

const enable = (serviceName) => {
	return exec("enable", serviceName)
}

const isEnabled = (serviceName) => {
	return new Promise((resolve, reject) => {
		exec('is-enabled', serviceName)
			.then((result) => {
				resolve(result.stdout.indexOf('enabled') != -1)
			})
			.catch(function (err) {
				resolve(false)
			})
	})
}

const isEnabled2 = async (serviceName) => {
	let result = await exec('is-enabled', serviceName)
	return (result.stdout.indexOf('enabled') != -1) ? true : false
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
module.exports.isEnabled2 = isEnabled2
module.exports.isActive = isActive
module.exports.restart = restart
module.exports.start = start
module.exports.stop = stop


// Possible extensions:
// MQTT 
// Extend this with a REST API
// https://www.npmjs.com/package/systemctl-rest

// Test:
isActive('pm2-root.service').then(output => console.log(output))
isEnabled2('pm2-root.service').then(output => console.log(output))