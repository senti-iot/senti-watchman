var getPackageJsonFromGithub = require("get-package-json-from-github")

var pckg = require('../../package.json')

const getLocalVersion = () => {
	return pckg.version
}

const newVersion = async () => {
	return (getLocalVersion() !== await getLatestVersion()) ? true : false
}

const getLatestVersion = async (callback) => {
	let packageJson = await getPackageJsonFromGithub(pckg.repository.url)
	if (callback) callback(packageJson.version)
	return packageJson.version
}

module.exports = { getLatestVersion, newVersion, getLocalVersion }
