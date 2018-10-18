const create = require('apisauce').create


const api = create({
	baseURL: 'https://raw.githubusercontent.com/senti-platform/senti-watchman/master/package.json',
	timeout: 30000,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
})

const getOptions = async () => {
	let response
	try {
		response = await api.get(api.baseURL)
		console.log(response.data.version)
	} catch (error) {
		console.error(error)
	}
	return response.data
}

getOptions()

