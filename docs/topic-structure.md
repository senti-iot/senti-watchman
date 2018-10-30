# Topic structure 

## Topics Sensors Hierarchy

- senti/sensor/type/id/ (root)
- senti/sensor/type/id/state (LWT topic)
- senti/sensor/type/id/data
- senti/sensor/type/id/cmd
...
- senti/sensor/sentiwi/8020/cmd 
	- /daemonservice (update, restart, start, stop)
	- /device (shutdown, reboot)
- senti/sensor/sentiwi/8020/data
- senti/sensor/sentiwi/8020/state
- senti/sensor/sentieye/clientid/…
- senti/sensor/darwin/cb-air/…

## Topics Users Hierarchy

- senti/cloud/type/id/ (root)
- senti/cloud/user/id/state {“signed-in”: true}
- senti/cloud/user/id/chat
- senti/cloud/org/id/state
- senti/cloud/org/id/chat
- senti/cloud/collection/id/
- senti/cloud/project/id/

## Topics Services Hierarchy

- senti/services/type/id/ (root)
- senti/services/type/id/cmd
	- /daemonservice (update, restart, start, stop)
	- /device (shutdown, reboot)
- senti/services/type/id/state
- senti/services/type/id/data

Examples: 
- senti/services/watchman/8020/state
- senti/services/api/hive.senti.cloud/state
- senti/services/api/hive.senti.cloud/cmd
	- /service (update, restart, start, stop)
	- /device (shutdown, reboot)
- senti/services/api/moseisley.webhouse.net/state

## Topics Update Hierarchy for dispatcher
- senti/services/watchman/update (broadcast update)
- senti/services/mqttclient/update (broadcast update)
	- cmd: 'now' = 0, 60, 3600, seconds (* 1000)


state/data/cmd/update