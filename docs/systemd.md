# SystemD

### srv.service

[Unit]
# senti-api.service
Description=Senti API
Documentation=https://github.com/senti-platform/senti-api/blob/master/README.md

[Service]
WorkingDirectory=/srv/nodejs/senti/senti-api
ExecStart=/usr/bin/node server.js
Type=simple
Restart=always
# RestartSec=1
StartLimitInterval=0
User=root
Group=root
# KillSignal=SIGQUIT

[Install]
WantedBy=basic.target

### senti-api-watcher.service

[Unit]
Description=senti-api restarter
After=network.target

[Service]
Type=oneshot
ExecStart=/usr/bin/systemctl restart srv.service
# this could be a bash script with npm install and other cleaning ... 

[Install]
WantedBy=multi-user.target

### senti-api-watcher.path

[Path]
PathModified=/srv/nodejs/senti/senti-api

[Install]
WantedBy=multi-user.target

- https://www.digitalocean.com/community/tutorials/understanding-systemd-units-and-unit-files
- https://nodesource.com/blog/running-your-node-js-app-with-systemd-part-1/ 