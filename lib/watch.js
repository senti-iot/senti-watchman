var chokidar = require('chokidar')
const ignore = require('./ignore')

var watcher = chokidar.watch('.', {
	ignored: ignore,
	ignoreInitial: true,
	persistent: true
})

const updateClient = () => {
	// console.log(watcher.getWatched())
}

const watch = (config) => {
	console.log(config)
	watcher.on('all', (event, path) => {
		console.log(event, path)
		updateClient()
	})

}

module.exports = watch

// Ref: https://github.com/paulmillr/chokidar
