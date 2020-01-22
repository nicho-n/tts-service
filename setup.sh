psql postgres -f service/db/scripts/create_database.sql  -v v1=$USER > /dev/null
psql -f service/db/scripts/create_tables.sql tts -v v1=$USER > /dev/null
cd service/db;
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
