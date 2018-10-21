# Application logic

## "Senti Watchman" - (Client Update App structure)
- Description: Senti Watchman is a sentinel that monitors the senti-mqtt-client and update/restart the client when needed

- PATH: /srv/nodejs/senti/senti-watchman
- init 
	- Get options/env/version from API (if options/api not responsing try api2, else send mqttApiAlert())
	- Localstorage (save and load options)
	- Check for updates - get version (self) -> do update self (-t sensor/update -m self/client)
	- 
- Connect
- Run (Service Process)
	- First run: Initial check for client updates -> do update client
	- Watch - for file changes (phone home with changes if API says go)
	- On MQTT receive update - check version -> do update client - set client update flag
	- Restart systemd "senti-mqtt-client" service

### Options

- MQTT options
- versions (semver):
	- API version
	- Watchman version
	- MQTT Client version
watchchanges = boolean
mqtt_auth = jwt/user/pass

```js
const mqttOptions = {
	host: 'mqtt://hive.senti.cloud',
	port: '1883',
	username: '',
	password: '',
	keepalive: 60,
	clientId: 'optain locally',
	clean: false, // false for persistent sessions
	topic_roots: {
		watchman: 'senti/services/watchman/',
		client: 'senti/sensor/'
	},
	topic_comms: {
		cmd: 'cmd',
		data: 'data',
		status: 'status',
		temperature: 'temperature',
		watch: 'watch'
	},
	will: {
		topic: 'optain locally',
		payload: JSON.stringify({ status: 'offline (dead)' }),
		qos: 1,
		retain: true
	},
	mqtt_auth: ''
}
```

### modules -> npm packages
What code/modules to put into resuable npm packages for use in other apps?

senti-tools/senti-device
- version.js
- watch.js / ignore.js
- apierrorhandler.js -> apisauce-error
- rpi-detect
