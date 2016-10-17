'use strict';

/**
 * Module dependencies.
 */
var init = require('./config/init')(),
    express = require('express');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Init the express application
var app = express();

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});