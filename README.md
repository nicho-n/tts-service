# TrueToSize-Service!

## Routes
 - POST / :
	 -- Uploads TTS data for a given shoe (must be present in database).
	 -- Required headers: `{Content-Type: 'application/json'}`
	 -- Body: `{brand: 'Adidas', name: 'Yeezy', ttsData: 3}`
         -- Example CURL request: `curl 'http://localhost:3001/' -H 'Content-Type: application/json' --data '{"brand":"Adidas","name":"Yeezy","ttsData":3}'`
 
 - GET /:brand/:name :
	 -- Returns the TTS average of a given shoe.
	 -- Example CURL request: `curl http://localhost:3001/Adidas/Yeezy`
## Local Setup
## Installation
`npm install && npm start`
## Testing
`npm test`
## Notes
- The POST request only works for shoes that are already present in the database. 
- The user input is case-insensitive, the data fields are case sensitive - e.g `{brand: 'AdidaS'}` works but `{Brand: 'Adidas'}` does not.


