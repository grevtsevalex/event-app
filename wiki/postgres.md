
# Установка и настройка PostgreSQL на Ubuntu 22.04

Инструкция для установки PostgreSQL с пользователем `developer`, паролем `pass`, и настройкой удаленного доступа.

## 1. Установите PostgreSQL
```bash
sudo apt update
sudo apt install -y postgresql postgresql-contrib
```

## 2. Убедитесь, что PostgreSQL запущен
```bash
sudo systemctl enable postgresql
sudo systemctl start postgresql
```

## 3. Перейдите в пользователя `postgres`
```bash
sudo -i -u postgres
```

## 4. Откройте консоль `psql`
```bash
psql
```

## 5. Создайте пользователя `developer` с паролем `pass`
```sql
CREATE USER developer WITH PASSWORD 'pass';
```

## 6. Создайте базу данных
```sql
CREATE DATABASE my_database OWNER developer;
```

## 7. Дайте пользователю права на базу данных
```sql
GRANT ALL PRIVILEGES ON DATABASE my_database TO developer;
```

## 8. Выйдите из `psql` и из пользователя `postgres`
```bash
\q
exit
```

## 9. Разрешите удаленное подключение (если нужно)

### 9.1 Измените `postgresql.conf`
Откройте файл:
```bash
sudo vim /etc/postgresql/14/main/postgresql.conf
```
Найдите строку:
```conf
#listen_addresses = 'localhost'
```
Измените на:
```conf
listen_addresses = '*'
```

### 9.2 Измените `pg_hba.conf`
Откройте файл:
```bash
sudo vim /etc/postgresql/14/main/pg_hba.conf
```
Добавьте строку для подключения по паролю:
```conf
host    all             all             0.0.0.0/0            md5
```

## 10. Перезапустите PostgreSQL
```bash
sudo systemctl restart postgresql
```

## 11. Проверьте подключение
Используйте `psql` для проверки доступа:
```bash
psql -h 127.0.0.1 -U developer -d my_database
```
Введите пароль `pass`.

---

Теперь пользователь `developer` с паролем `pass` может работать с базой данных `my_database`.