# Сетап сервера

### База данных

Установить базу данных на сервер и подключить к ней приложение из докера оказалось тем еще квестом. Оказалось что для того, чтобы изнутри докер-контенера `app-container` подключиться к `postgres` нужно выполнить следующие шаги. Полезная статейка (https://www.peterspython.com/nl/blog/maak-verbinding-met-een-dienst-op-een-docker-host-vanaf-een-docker-container?lc=ru)

1. Из контейнера обращаться к хост машине через хост `host.docker.internal`. Это не тоже самое что `localhost`. `host.docker.internal` - это просто название для `docker0`. `Docker0` - это виртуальный интерфейс, `bridge`, созданный Docker, а `host.docker.internal` - это (доменное) имя `docker0` bridge. Все контейнеры Docker по умолчанию подключены к docker0 bridge. 

То есть в dsn прописать вместо `localhost` `host.docker.internal`.

2. Postgres должен начать слушать запросы от `host.docker.internal`. Для этого в файле конфигурации `/etc/postgres/14/main/postgresql.conf`нужно раскомментить строку 

```
#listen_addresses = '127.0.0.1'

заменить на 

listen_addresses = '*'

```	

3. Чтобы докер понимал, что это за хост `host.docker.internal`, то есть какому ip он равен, нужно в docker-compose.yml добавить:

```
    extra_hosts:
      - "host.docker.internal:host-gateway"
```

4. После этого у меня появилвсь ошибка `no pg_hba.conf entry for host`. Решение такое, разрешить всем с людых хостов подключаться к бд. В файле `etc/postgres/14/main/pg_hba.conf` нужно добавить строку:

```
host    all             all             0.0.0.0/0               scram-sha-256

```
