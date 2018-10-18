var dotenv = require('dotenv').load()
const fallbackOptions = require('./fallbackoptions')
const create = require('apisauce').create

const apiRoute = '/api/1/options'

const api = create({
	baseURL: process.env.API_URL,
	timeout: 30000,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
})

const getOptions = async () => {
	let response
	let fallback
	try {
		response = await api.get(apiRoute)
	} catch (error) {
		fallback = await fallbackOptions()
		console.error(error)
	}
	// check response + fix fallbackOptions() that doesn't work yet
	if (response.data !== undefined) {
		return response.data
	} else {
		fallback = await fallbackOptions()
		return fallback.data
	}
}

module.exports = getOptions