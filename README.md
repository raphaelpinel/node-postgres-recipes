# node-postgres-recipes

A recipe app built with Node.js and PostgreSQL

How to run the app:

type in your terminal:

```
cd public/js browserify script.js > bundle.js
cd ..
cd ..
node App
```

You also need to setup your postgres database and setup your environment variables for connecting to the database.
You can greate your own dbconnect.js file
that looks like this:

```
PGUSER=yourUserName \
  PGHOST=localhost \
  PGPASSWORD=yourPassword \
  PGDATABASE=recipebookdb \
  PGPORT=5432 \


  const connect = "postgres://yourUserName:yourPassword@localhost/recipebookdb";
```

This app was inspired by following Brad Traversy's tutorial series on Youtube
https://www.youtube.com/watch?v=EBw5E5DzAvE

Steps that I've done to install Postgresql on a Mac:

- install postgresql with Homebrew by typing in terminal:
  `brew update; brew install postgres`
- launch postgres by typing in Terminal:
  `brew services start postgresql`
  Alternative:
  start postgresql by typing in Terminal:
  `pg_ctl -D /usr/local/var/postgres start && brew services start postgresql`

- download the latest pgadmin at:
  https://www.postgresql.org/ftp/pgadmin/pgadmin4/v3.4/macos/

following this tutorial to install Postgresql:
https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb

check the version:
`postgres -V`

`run: psql postgres`

default user is 'postgres'
Terminal:
`psql postgres`

enter: \du to check users intalled

set new password:
`\password`

CREATE ROLE patrick WITH LOGIN PASSWORD '**\*\***\*\***\*\***';

`\q` to exit

`ALTER ROLE patrick CREATEDB;`

//login
`psql postgres -U patrick`

`postgres=> CREATE DATABASE base1;`
`GRANT ALL PRIVILEGES ON DATABASE base1 TO patrick;`

`\list` lists all the databases in Postgres
`\connect` connect to a specific database
`\dt` list the tables in the currently connected database
`\connect base1`

Default port number: 5432

`GRANT CONNECT ON DATABASE recipebookdb TO recipe;`

`\d+ recipes`
