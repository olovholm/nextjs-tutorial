-- Kill all connections to database to make all objects available for removal.
SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE pid <> pg_backend_pid()
  AND datname = 'mydb';

DROP database IF EXISTS mydb;
DROP user IF EXISTS mydb;

CREATE USER mydb ENCRYPTED PASSWORD 'mydb';
grant mydb to postgres;
CREATE DATABASE mydb OWNER mydb;
