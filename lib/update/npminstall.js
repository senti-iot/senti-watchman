const run = require('child_process').execFileSync

const npmInstall = (path) => {
	if (path) {
		const child = run('npm', ['install', '--prefix', path], { encoding: "utf8" })
		// console.log(child)
		console.log('NPM finished install')

	} else {
		const child = run('npm', ['install'], { encoding: "utf8" })
		// console.log(child)
		console.log('NPM finished install')
	}
}

module.exports = npmInstall

// npm install --prefix /srv/nodejs/senti/senti-mqtt-client
// npm install --prefix /Users/cbroberg/Apps/senti/senti-weather

// npmInstall('/Users/cbroberg/Apps/senti/senti-weather')

/* 

const exec = require('child_process').execFileSync

const npmInstall = () => {
	const child = exec('npm', ['install'], {encoding: "utf8"})
	// console.log(child)
	console.log('NPM finished install')
}

module.exports = npmInstall

*/