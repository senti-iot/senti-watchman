const git = require('simple-git/promise')
// const path = ''

const gitPull = async (path) => {
	await git(path).pull((error, update) => {
		// console.log(update)
		if (error) console.log('Error during GIT pull')
	}).then((res) => res ? console.log('GIT finished pull')
	 : console.log("Error during GIT pull"))
}

module.exports = gitPull

// https://www.npmjs.com/package/simple-git

