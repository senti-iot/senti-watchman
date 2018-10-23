var exec = require("child-process-promise").exec
// var exec = require('child_process').exec

const systemctlExec = (cmd, service_name) => {
	var command = 'systemctl ' + cmd
	if (service_name) {
		command = command + ' ' + service_name
	}

	let result
	let exitCode
	try {
		result = exec(command)
		exitCode = result.childProcess.exitCode
		if (exitCode === 3) throw('Error: Exitcode = 3')
		return (exitCode == null) ? result : null
	} catch(error) {
		console.log(error)
		console.log(exitCode)
	}
	
	// console.log(result)
	// console.log(exitCode)

	// return exec(command)
}

module.exports = systemctlExec