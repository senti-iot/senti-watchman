# Application logic

## "Senti Watchman" - (Client Update App structure)
- Description: Senti Watchman is a sentinel that monitors the senti-mqtt-client and update/restart the client when needed

- PATH: /srv/nodejs/senti/senti-watchman
- init 
	- Get options/env/version from API (if options/api not responsing try api2, else send mqttApiAlert())
	- Check for updates - get version (self) -> do update self (-t sensor/update -m self/client)
	- 
- Connect
- Run (Service Process)
	- First run: Initial check for client updates -> do update client
	- On MQTT receive update - check version -> do update client - set client update flag
	- Restart systemd "senti-mqtt-client" service

### Options API object

versions (semver):
API version
Watchman version
MQTT Client version
