'use strict';
/*
This block is using Node.js inbuilt http module.

const http = require('http');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

/* Using Express */

const express = require('express');
const app = express();
const PORT = 8000;

app
  .get('/', (req, res) => {
    res.send('Hello World!')
})
  .post('/', (req, res) => {
    res.send('Testing POST messages with Postman')
})
  .listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
})
