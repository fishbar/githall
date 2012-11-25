/*!
 * githall - test/controllers/home.test.js
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var request = require('supertest');
var app = require('../../app');

describe('controllers/home.test.js', function () {
  it('GET / should show comming soon', function (done) {
    request(app)
    .get('/')
    .expect(/comming soon/)
    .expect(200, done);
  });
});