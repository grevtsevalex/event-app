build:
	docker build -t app-image .

up:
	docker compose up -d

stop:
	docker compose stop

start:
	docker compose start

in:
	docker exec -it app-container bash

rm:
	docker compose rm

push:
	docker push grevtsevalex/app-image:latest

tag:
	git tag -a v.`date +%Y%m%d%H%M` -m 'new release'
	git push origin v.`date +%Y%m%d%H%M`

removeImagesAndContainers:
	docker rmi $(docker images -aq) || docker rm $(docker ps -aq)

servers-setup:
	ansible-playbook ansible/playbooks/setup.yml -i ansible/inventory.ini

deploy:
	ansible-playbook ansible/playbooks/release.yml -i ansible/inventory.ini
