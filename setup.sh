sudo -u postgres psql -f db/scripts/create_database.sql  -v v1=$USER
sudo -u $USER psql -f db/scripts/create_tables.sql yourdbname -v v1=$USER
cd db;
mkdir config;
echo '
const postgresConfig = {
  user: "'$USER'",
  host: "localhost",
  database: "tts",
  password: "password",
  port: 5432
}

module.exports = postgresConfig
' > config/postgresConfig.js
cd ../