var systemctl = require('systemctl')

var watcher = require('chokidar')

// One-liner for current directory, ignores .dotfiles
watcher.watch('./*', { ignored: /(^|[\/\\])\../ }).on('all', (event, path) => {
	console.log(event, path)
	systemctl.restart()
})
