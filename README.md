# node-postgres-recipes
A recipe app built with Node.js and PostgreSQL

following Brad Traversy's tutorial series on Youtube
https://www.youtube.com/watch?v=EBw5E5DzAvE

Steps that I've done to install Postgresql on a Mac:
- install postgresql with Homebrew by typing in terminal:
brew update; brew install postgres
- launch postgres by typing in Terminal:
brew services start postgresql
Alternative:
start postgresql by typing in Terminal:
pg_ctl -D /usr/local/var/postgres start && brew services start postgresql

- download the latest pgadmin at:
https://www.postgresql.org/ftp/pgadmin/pgadmin4/v3.4/macos/

following this tutorial to install Postgresql:
https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb



check the version:
postgres -V

run: psql postgres

enter: \du to check users intalled

set new password:
\password   

CREATE ROLE patrick WITH LOGIN PASSWORD '**************'; 

\q to exit




