const execFile = require('child_process').execFileSync
// const options = require('../options')

const npmInstall = () => {
	const child = execFile('npm', ['install'], {encoding: "utf8"})
	console.log(child)
	// 	(error, stdout, stderr) => {
	// 	if (error) {
	// 		console.error('stderr', stderr)
	// 		throw error
	// 	}
	// 	console.log('Update: NPM finished install')
	// 	// console.log('Update: NPM finished install', stdout)
	// })
}

module.exports = npmInstall

// https://stackoverflow.com/questions/15957529/can-i-install-a-npm-package-from-javascript-running-in-node-js