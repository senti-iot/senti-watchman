# Senti Watchman Todo

## Todo
- Fetch / curl zip packed builds to exclude Git pull which could produce errors
- Check if service is running, enabled (if not start service)
- Restart services
- Spool / Persist in DB or JSON-file
- Microservices Intercom (using MQTT)
- getTopic(state/data/cmd/update) return full topic path
- MQTT API Alert (mqttapialert.js)
- Version auto update if new version available (config.versions.autoupdate)
- Update Client
	- refactor restartService to use service name
- restartServiceRemote
- Split dispatch into GitHub webhook, browser, watchman, client etc. 

## Doing
- updateFuture

## Done
- Update Watchman (self)
- Refactor npmInstall to use path
- Refactor gitPull to use path
- scheduledUpdate
