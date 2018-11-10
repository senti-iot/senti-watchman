### srv.service

[Unit]
Description=srv 0.1: Service's description
After=network.target

[Service]
Type=simple
WorkingDirectory=/opt/srv
ExecStart=/opt/srv/bin/srv
User=root
Group=root

[Install]
WantedBy=multi-user.target

### srv-watcher.service

[Unit]
Description=srv restarter
After=network.target

[Service]
Type=oneshot
ExecStart=/usr/bin/systemctl restart srv.service

[Install]
WantedBy=multi-user.target

### srv-watcher.path

[Path]
PathModified=/opt/srv/lib

[Install]
WantedBy=multi-user.target
