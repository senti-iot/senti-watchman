const serviceManager = () => {
	const platform = process.platform
		
	switch (platform) {
		case 'aix': return null
		case 'darwin': return 'nodemon'
		case 'freebsd': return null
		case 'linux': return 'nodemon'
		case 'openbsd': return null
		case 'sunos': return null
		case 'win32': return null
		default: return null
		break
	}

}

module.exports = serviceManager
