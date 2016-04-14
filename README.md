# REST-API-SCAFFOLDING

A simple nodeJS based REST API scaffolding. It uses ExpressJS for routing and MongoDB (with Mongoose) as the DB.

##USAGE:
- Make sure you have node and mongoDB installed and working
- run `npm install`
- change the schema/routing to your needs by altering the restapi/models/...js and the restapi/routes.js and start mongo with `mongod`.
- start the server by running `node restapi/server.js`

The server listens to port 8080 by default. This can be changed in the restapi/server.js file. 
