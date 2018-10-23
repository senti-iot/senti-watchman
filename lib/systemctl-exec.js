var exec = require("child-process-promise").exec

const systemctlExec = (cmd, service_name) => {
	var command = 'systemctl ' + cmd
	if (service_name) {
		command = command + ' ' + service_name
	}
	return exec(command)
}

module.exports = systemctlExec