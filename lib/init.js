// Object storage for configuration and options from API

var config = {
	watch: 'watch initialized',
	server: 'server initialized',
	services: 'services initialized'
}

const init = async () => {
	// await Get config from API 
	// await Create MQTT client
	return config
}

module.exports = init
