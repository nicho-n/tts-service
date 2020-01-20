# TrueToSize-Service!

## Routes
 - POST / :
	 -- Uploads TTS data for a given shoe.
	 -- Required headers: `{Content-Type: 'application/json'}`
	 -- Body: `{brand: 'Adidas', name: 'Yeezy', ttsData: 3}`
         -- Example CURL request: `curl 'http://localhost:3001/' -H 'Content-Type: application/json' --data '{"brand":"Adidas","name":"Yeezy","ttsData":3}'`
 
 - GET /:brand/:name :
	 -- Returns the TTS average of a given shoe.
	 -- Example CURL request: `curl http://localhost:3001/Adidas/Yeezy`
## Local Setup
  - [Install postgresql](http://postgresguide.com/setup/install.html)
  - If you are using a unix-based system, you can run the automatic setup script with `sh setup.sh`. This will install and configure the database, and also generate a configuration.
  - Otherwise, you will have to manually execute the sql scripts located in `db/scripts`, and change `db/config/postgresConfig` to agree with your local configuration.
## Installation
`npm install && npm start`
## Testing
`npm test`
## Notes
- The POST request only works for shoes that are already present in the database. 
- The user input is case-insensitive, the data fields are case sensitive - e.g `{brand: 'AdidaS'}` works but `{Brand: 'Adidas'}` does not.


