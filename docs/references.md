# References

## SystemD references
https://seanmcgary.com/posts/deploying-nodejs-applications-with-systemd/

https://blog.codeship.com/running-node-js-linux-systemd/

https://superuser.com/questions/1171751/restart-systemd-service-automatically-whenever-a-directory-changes-any-file-ins

https://hackernoon.com/making-node-js-service-always-alive-on-ubuntu-server-e20c9c0808e4 

https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units

https://superuser.com/questions/1171751/restart-systemd-service-automatically-whenever-a-directory-changes-any-file-ins

## SystemD commands
```sh

sudo systemctl start senti-watchman.service
sudo systemctl restart senti-watchman.service
sudo systemctl status senti-watchman.service
curl http://localhost:3000/
sudo systemctl stop senti-watchman.service
sudo journalctl -f -u senti-watchman.service
sudo systemctl daemon-reload
sudo systemctl enable senti-watchman.service
sudo systemctl is-active senti-watchman.service
sudo systemctl is-enabled senti-watchman.service
systemctl cat senti-watchman.service
sudo journalctl -u senti-watchman.service --boot
sudo journalctl -u senti-watchman.service --since 00:40
sudo journalctl -u senti-watchman.service -p err

```

## Monitor changes on files/directories
https://github.com/paulmillr/chokidar

## .env

The most common way to set environment variables is by declaring them in our .bash_profile file.

Like this:

export SERVER_PORT=3001
export API_URL='https://someendpointurl.com'


var port = process.env.SERVER_PORT
var api = process.env.API_URL

