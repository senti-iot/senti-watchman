var dotenv = require('dotenv').load()
const create = require('apisauce').create
const errorHandler = require('./apierrorhandler')

const apiRoute = '/api/1/mqttoptions'

const api = create({
	baseURL: process.env.API_URL,
	timeout: 30000,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
})

const getMQTTOptions = async () => {
	let response
	try {
		response = await api.get(apiRoute)
	} catch (error) {
		console.error(error)
		console.log('Errorhandler:', errorHandler(error))
	}
	// check response	
	if (response.ok && response.status == 200) {
		return response.data
	} else {
		//display alert failed to call API
		console.log('API Error (MQTT options):', errorHandler(response.problem))
		return null
	}
}

module.exports = getMQTTOptions
