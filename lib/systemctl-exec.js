var exec = require("child-process-promise").exec
// var exec = require('child_process').exec

const systemctlExec = (cmd, service_name) => {
	var command = 'systemctl ' + cmd
	if (service_name) {
		command = command + ' ' + service_name
	}
	let result = exec(command)
	let exitCode = result.childProcess.exitCode
	console.log(exitCode)

	return exec(command)
}

module.exports = systemctlExec