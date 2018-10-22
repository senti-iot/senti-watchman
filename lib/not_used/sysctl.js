var systemctl = require('systemctl')

systemctl.isEnabled('senti-watchman.service').then(enabled => {
	console.log((enabled ? 'Enabled' : 'Not enabled'));
})

// Start a service
// systemctl.start('senti-watchman.service').then(output => console.log)

// systemctl.restart('senti-watchman.service').then(output => console.log)

/*
Services:

systemctl.daemonReload()
systemctl.enable()
systemctl.isEnabled()
systemctl.disable()
systemctl.start()
systemctl.start()
systemctl.restart()
systemctl.stop()

IS MISSING is-active ... 

$ systemctl is-active --quiet service

will exit with status zero if service is active, non-zero otherwise, 
making it ideal for scripts:

systemctl is-active --quiet senti-mqtt-client.service && echo Service is running

*/

var exec = require("child-process-promise").exec

const run = (cmd, service_name) => {
	var command = 'systemctl ' + cmd

	if (service_name) {
		command = command + ' ' + service_name
	}

	return exec(command)
}

const isActive = (serviceName) => {
	result = run("is-active", serviceName)
	return result === 'active' ? true : false
}

isActive('senti-mqtt-client.service').then(output => console.log)
