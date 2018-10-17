const ignore = [
	'node_modules',
	'package.json',
	'package-lock.json',
	'yarn.lock',
	'.gitignore',
	'LICENSE',
	'README.md',
	'nodemon.json',
	'.git',
	'.env',
	'docs',
	/(^[\/\\])\../
]

module.exports = ignore