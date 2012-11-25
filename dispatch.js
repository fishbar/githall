/*!
 * githall - dispatch.js
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var config = require('./config');
var app = require('./app');

var port = config.port;

app.listen(port, function () {
  console.log('Server start listen on ' + port);
});