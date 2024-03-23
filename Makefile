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

in-nginx:
	docker exec -it nginx-container sh

rm:
	docker compose rm

push:
	docker push grevtsevalex/app-image:latest

tag:
	git tag -a v.`date +%Y%m%d%H%M` -m 'new release'
	git push origin v.`date +%Y%m%d%H%M`

removeImagesAndContainers:
	docker rmi $(docker images -aq) -f || docker rm $(docker ps -aq)

servers-setup:
	ansible-playbook ansible/playbooks/setup.yml -i ansible/inventory.ini --vault-password-file ansible/vault.pass

deploy:
	ansible-playbook ansible/playbooks/release.yml -i ansible/inventory.ini --vault-password-file ansible/vault.pass

edit-vault:
	ansible-vault edit ansible/group_vars/all/vault.yml --vault-password-file ansible/vault.pass

logs-app:
	docker logs -f app-container 1>/dev/null

logs-nginx:
	docker logs -f nginx-container 1>/dev/null

