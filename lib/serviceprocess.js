const getOptions = require('./getoptions')
const ping = require('./ping')


const serviceProcess = async () => {
	var options = await getOptions()
	console.log(options)
	// Here comes the pain ... and the main service processes
	ping()
}

module.exports = serviceProcess