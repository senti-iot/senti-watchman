// Error handler for apisauce error codes

const systemCtlErrorCode = (exitcode) => {
	switch (exitcode) {
		case 0: return 'Success'
		case 1: return 'Generic failure or unspecified error'
		case 2: return 'Invalid or excess arguments'
		case 3: return 'Unimplemented feature'
		case 4: return 'The user has insufficient privileges'
		case 5: return 'The program is not installed'
		case 6: return 'The program is not configured'
		case 7: return 'The program is not running'
		default: return 'Unspecified exit code'
		break
	}
}

module.exports = systemCtlErrorCode
