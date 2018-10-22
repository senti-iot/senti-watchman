// Object storage for configuration and options from API

var config = {
	server: 'Server initialized',
	watch: 'Watch initialized',
	services: 'Services initialized'
}

const init = async () => {
	// await Get config from API 
	// await Create MQTT client
	return config
}

module.exports = init
