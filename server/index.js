'use strict'

const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, './portfolio')))

app.get('/*', (req, res, next) => {
	res.sendFile(path.join(__dirname, '../index.html'))
})

app.listen(8080, () => {
	console.log('server is listening on 8080')
})

app.use((err, req, res, next) => {
	console.error(err);
	console.error(err.stack);
	res.status(err.status || 500).send(err.message || 'Internal server error.')
})
