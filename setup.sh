psql postgres -f db/scripts/create_database.sql  -v v1=$USER
sudo -u $USER psql -f db/scripts/create_tables.sql tts -v v1=$USER
cd db;
rm -rf config;
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
