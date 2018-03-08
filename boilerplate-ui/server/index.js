const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const server = express();

server.use(parser.urlencoded({ extended: true }));
server.use(parser.json());
server.use(morgan('tiny'));

server.use(express.static(path.resolve(__dirname, '../client/public')));

server.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../client/public/index.html')));

server.listen(process.env.PORT, () => { console.log(`Serving static files on PORT: ${process.env.PORT}`)});