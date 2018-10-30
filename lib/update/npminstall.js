const exec = require('child_process').execFileSync

const npmInstall = () => {
	const child = exec('npm', ['install'], {encoding: "utf8"})
	// console.log(child)
	console.log('Update: NPM finished install')
}

module.exports = npmInstall

// https://stackoverflow.com/questions/15957529/can-i-install-a-npm-package-from-javascript-running-in-node-js