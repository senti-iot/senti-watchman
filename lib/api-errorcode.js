// Error codes for apisauce

const apiErrorCode = (errorcode) => {
	switch (errorcode) {
		case 'NONE': return null
		case 'CLIENT_ERROR': return 'CLIENT_ERROR'
		case 'SERVER_ERROR': return 'SERVER_ERROR'
		case 'TIMEOUT_ERROR': return 'TIMEOUT_ERROR'
		case 'CONNECTION_ERROR': return 'CONNECTION_ERROR'
		case 'NETWORK_ERROR': return 'NETWORK_ERROR'
		case 'CANCEL_ERROR': return 'CANCEL_ERROR'
		default: return null
		break
	}
}

module.exports = apiErrorCode