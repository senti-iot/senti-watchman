var os = require("os")
var fs = require('fs')
var ini = require('ini')
const isPi = require('./rpi-detect')

const hostname = os.hostname()
const platform = os.platform()

const sensorType = () => {
	if (isPi()) return 'sentiwi'
	else return platform
}

const getClientId = (fallback) => {
	try {
		let config = ini.parse(fs.readFileSync('/srv/senti/etc/infoAgent.ini', 'utf-8'))
		return config.rpi.deviceId
	} catch (error) {
		if (error.code === 'ENOENT') {
			return fallback ? fallback : hostname
		} else {
			throw error
		}
	}
}

module.exports = getClientId
