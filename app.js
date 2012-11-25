/*!
 * githall - app.js
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

require('response-patch');
var connect = require('connect');
var urlrouter = require('urlrouter');

var config = require('./config');
var routes = require('./routes');

var app = connect(
  function (req, res, next) {
    res.req = req;
    next();
  },
  connect.query(),
  connect.cookieParser(),
  connect.session({ secret: config.sessionSecret })
);

app.use(urlrouter(routes));

module.exports = app;