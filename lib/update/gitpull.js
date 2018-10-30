const git = require('simple-git/promise') // (workingDirPath)
const path = ''

const gitPull = async () => {
	// git().cwd(path)
	await git(path).pull((error, update) => {
		console.log(update)
		if (error) {
			console.log('Error during GIT pull')
		} else {
			console.log('Update: GIT finished pull')
		}
	}).then((rs) => rs ? console.log('Update: GIT finished pull', rs)
	 : console.log("Error during GIT pull"))
}

module.exports = gitPull

// https://www.npmjs.com/package/simple-git