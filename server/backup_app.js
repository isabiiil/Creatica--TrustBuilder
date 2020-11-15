const http = require('http');
const express = require('express');
const path = require('path');

const cool = require('cool-ascii-faces');

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Test Hello Test World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});