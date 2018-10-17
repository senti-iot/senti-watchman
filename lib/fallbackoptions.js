var dotenv = require('dotenv').load()

const create = require('apisauce').create

const apiRoute = '/api/1/options'

const api = create({
	baseURL: process.env.API_FALLBACK_URL,
	timeout: 30000,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
})

const fallbackOptions = async () => {
	let response
	try {
		response = await api.get(apiRoute)
	} catch (error) {
		console.error(error)
	}
	// check response
	// console.log(response.data)
	return response.data
}

module.exports = fallbackOptions

