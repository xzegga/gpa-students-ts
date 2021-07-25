/*eslint-env es6*/
// Get dependencies 
const express = require("express")
const http = require('http')
const path = require('path')
const api = require('./server/routes/api') 

const app = express();

// Enabling cors to send request from react app
var cors = require('cors');
app.use(cors())

// Parsers for POST data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

// Set our api routers
app.use('/', api)

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log('Server Running...')
})
