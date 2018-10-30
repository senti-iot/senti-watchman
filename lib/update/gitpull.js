const git = require('simple-git') // (workingDirPath)
const path = ''

const gitPull = () => {
	// git().cwd(path)
	git(path).pull((error) => {
		if (error) {
			console.log('Error during GIT pull')
		} else {
			console.log('Update: GIT finished pull')
		}
	})
}

module.exports = gitPull

// https://www.npmjs.com/package/simple-git