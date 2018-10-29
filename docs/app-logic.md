# Application logic

## "Senti Watchman" - (Client Update App structure)
- Description: Senti Watchman is a sentinel that monitors the senti-mqtt-client and updates/restarts the client when needed

PATH: /srv/nodejs/senti/senti-watchman

- init 
	- Get options from API
		- API not responding try API2
		- Try again in 30 sec (N times), else send mqttApiAlert
		- Fallback 2 - get config through MQTT
		- Return config object

- Watch - for file changes (phone home with changes if API says go)
 
- Start Server 

- Run (Service Process)
	- First run: Initial check for client updates -> do update client
	- Check for updates - get version (self) -> do update self (-t sensor/update -m self/client)
	- On MQTT receive update - check version -> do update client - set client update flag
	- Restart systemd "senti-mqtt-client" service

## Todo
- Spool out data / Persist in db or txt-file

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
