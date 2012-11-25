/*!
 * githall - routes.js
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var home = require('./controllers/home');

module.exports = function (app) {
  app.get('/', home);
};
