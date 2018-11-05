var dotenv = require('dotenv').load()
const create = require('apisauce').create
const errorCode = require('./api-errorcode')

const apiRoute = '/api/1/config'

const api = create({
	baseURL: process.env.API_URL,
	timeout: 30000,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Service': 'Watchman'
	}
})

const getConfig = async () => {
	let response
	try {
		response = await api.get(apiRoute)
	} catch (error) {
		console.error(error)
		console.log('Error code:', errorCode(error))
	}
	// check response	
	if (response.ok && response.status == 200) {
		console.log('API config loaded!')
		return response.data
	} else {
		console.log('API Error (MQTT options):', errorCode(response.problem))
		return null
	}
}

module.exports = getConfig
