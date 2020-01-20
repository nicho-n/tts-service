# TrueToSize-Service!

## Local Setup
  - [Install postgresql](http://postgresguide.com/setup/install.html)
  - If you are using a unix-based system, you can run the automatic setup script with `sh setup.sh`. This will create the database, tables and generate a configuration for you.
  - Otherwise, you will have to manually execute the sql scripts located in `db/scripts`, and change the username/password in `db/config/postgresConfig` to agree with your local configuration.
## Installation
`npm install && npm start`
## Testing
`npm test`
## Usage
   - Post TTS data: `curl 'http://localhost:3001/' -H 'Content-Type: application/json' --data {"brand":"Adidas","name":"Yeezy","ttsData":3}`<br>
   
   - Get TTS average: `curl http://localhost:3001/Adidas/Yeezy`

## Notes
- The POST request only works for shoes that are already present in the database. 'Adidas Yeezy' is included in the setup.
- postgresConfig.js is commited as reference, but it is deleted and regenerated when you run `setup.sh`. It is there so Windows users know what to put in their config if they cannot run the script.
- The user input is case-insensitive, the data fields are case sensitive - e.g `{brand: 'AdidaS'}` works but `{Brand: 'Adidas'}` does not.


