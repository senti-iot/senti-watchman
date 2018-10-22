# Application logic

## "Senti Watchman" - (Client Update App structure)
- Description: Senti Watchman is a sentinel that monitors the senti-mqtt-client and updates/restarts the client when needed

PATH: /srv/nodejs/senti/senti-watchman

- init 
	- Get options from API
		- If options/api not responding try api2, else send mqttApiAlert
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

### modules -> npm packages
What code/modules to put into resuable npm packages for use in other apps?

senti-tools/senti-device
- version.js
- watch.js / ignore.js
- apierrorhandler.js -> apisauce-error
- rpi-detect
