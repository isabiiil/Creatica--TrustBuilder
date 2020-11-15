const http = require('http');
const express = require('express');
const path = require('path');

const cool = require('cool-ascii-faces');

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000;

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    // .get('/cool', (req, res) => res.render('pages/index'))
    .get('/', (req, res) => res.send(cool()))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));