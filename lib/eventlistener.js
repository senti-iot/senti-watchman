const ping = require('./ping')

const eventListener = async () => {
	await ping()	
}

module.exports = eventListener