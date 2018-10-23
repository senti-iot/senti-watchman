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
	let result = await exec('is-enabled', serviceName)
	return (result.stdout.indexOf('enabled') != -1) ? true : false
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

// --------------- TEST (works on Ubuntu) ---------------

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

const test = async () => {
	let out

	out = await isActive('pm2-root.service')
	console.log('PM2 is active:', out)
	await sleep(1000)

	out = await isEnabled('pm2-root.service')
	console.log('PM2 is enabled:', out)
	await sleep(1000)

	out = await isActive('apache2.service')
	console.log('Apache2 is active:', out)
	await sleep(1000)

	out = await isEnabled('apache2.service')
	console.log('Apache2 is enabled:', out)
	await sleep(1000)

	// out = await isActive('nginx.service')
	// console.log('nginx is active:', out)
	// await sleep(1000)

	// out = await isEnabled('nginx.service')
	// console.log('nginx is enabled:', out)
	// await sleep(1000)

	// out = await isActive('rsync.service')
	// console.log('rsync is active:', out)
	// await sleep(1000)

	// out = await isEnabled('rsync.service')
	// console.log('rsync is enabled:', out)
	// await sleep(1000)

	// out = await isActive('zabbix-agent.service')
	// console.log('Zabbix-agent is active:', out)
	// await sleep(1000)

	// out = await isEnabled('zabbix-agent.service')
	// console.log('Zabbix-agent is enabled:', out)
	// await sleep(1000)
}

// test().then()

// --------------- Possible extensions ---------------
// MQTT 
// Extend this with a REST API
// https://www.npmjs.com/package/systemctl-rest
