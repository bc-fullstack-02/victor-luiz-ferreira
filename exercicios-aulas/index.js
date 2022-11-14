/*
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        console.log(req.headers)
        res.write('hello from server')
        res.end()
    }
});

server.on('connection', (stream) => {
    console.log('some one connected')
});

server.listen(4000);
console.log('server listening on http://localhost:4000');

//node ./exercicios-aulas/backend/server.js
*/
const path = require('path');
const fs = require('fs');
const express = require('express');
const { Router } = require('express');
const app = express();

//app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    console.log('primeiro get');
    next();
});

app.get('/', (req, res, next) => {
    console.log('segundo get');
    next();
});
//app.get('/', (req, res) => {
   //console.log(req.headers);
    //const content = fs.readFileSync(path.join(__dirname, 'static', 'index.html'), 'utf8');
    //res.send(content);
//});

app.listen(3000) 