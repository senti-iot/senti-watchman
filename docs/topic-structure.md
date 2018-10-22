# Topic structure 

## Topics Sensors Hierarchy

- senti/sensor/type/id/ (root)
- senti/sensor/type/id/status (LWT topic)
- senti/sensor/type/id/data
- senti/sensor/type/id/cmd
- senti/sensor/type/id/temperature
...
- senti/sensor/sentiwi/8020/cmd 
	- /service (update, restart, start, stop)
	- /device (shutdown, reboot)
- senti/sensor/sentiwi/8020/data
- senti/sensor/sentiwi/8020/status
- senti/sensor/sentieye/clientid/…
- senti/sensor/darwin/cb-air/…

## Topics Users Hierarchy

- senti/cloud/type/id/ (root)
- senti/cloud/user/id/status {“signed-in”: true}
- senti/cloud/user/id/chat
- senti/cloud/org/id/status
- senti/cloud/org/id/chat
- senti/cloud/collection/id/
- senti/cloud/project/id/

## Topics Services Hierarchy

- senti/services/type/id/ (root)
- senti/services/watchman/8020/cmd
	- /service (update, restart, start, stop)
	- /device (shutdown, reboot)
- senti/services/watchman/8020/status
- senti/services/api/hive/status
- senti/services/api/hive/cmd
	- /service (update, restart, start, stop)
	- /device (shutdown, reboot)
- senti/services/api/moseisley/status

## Topics Update Hierarchy
- senti/services/watchman/update
- senti/services/mqttclient/update
	- cmds: 'now' = 0, 60, 3600, * 1000 
