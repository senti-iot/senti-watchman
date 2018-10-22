# Topic structure 

## Topics Sensors Hierarchy

- senti/sensor/type/id/status (LWT topic)
- senti/sensor/type/id/data
- senti/sensor/type/id/cmd
- senti/sensor/type/id/temperature
...
- senti/sensor/sentiwi/8020/cmd 
	- (update, restart, start, stop, shutdown, reboot)
- senti/sensor/sentiwi/8020/data
- senti/sensor/sentiwi/8020/status
- senti/sensor/sentieye/clientid/…
- senti/sensor/local/clientid/…

## Topics Users Hierarchy

- senti/cloud/user/id/status {“signed-in”: true}
- senti/cloud/user/id/chat
- senti/cloud/org/id/status
- senti/cloud/org/id/chat
- senti/cloud/collection/id/
- senti/cloud/project/id/

## Topics Services Hierarchy

- senti/services/type/id/status (template)
- senti/services/watchman/8020/cmd
	- (update, restart, start, stop, shutdown, reboot)
- senti/services/watchman/8020/status
- senti/services/api/hive/status
- senti/services/api/hive/cmd
	- (update, restart, start, stop, shutdown, reboot)
- senti/services/api/moseisley/status
