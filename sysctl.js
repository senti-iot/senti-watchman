var systemctl = require('systemctl')

systemctl.isEnabled('senti-watchman.service').then(enabled => {
	console.log((enabled ? 'Enabled' : 'Not enabled'));
})

