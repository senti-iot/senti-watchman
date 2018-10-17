// require('dotenv').config({ path: '../.env' })
var dotenv = require('dotenv').load()

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

const getOptions = async (route) => {
	let response
	try {
		response = await api.get(route)
	} catch (error) {
		// data = await downloadFallbackData(url)
		console.error(error)
	}
	console.log(response.data)
	
	return response.data
}

const serviceProcess = async () => {
	var options = await getOptions(apiRoute)
	console.log(options)
	// Here begins the service process ... 
}

serviceProcess()