'use strict';

var assert     = require('assert');
var browserify = require('browserify');
var run        = require('vm').runInNewContext;

browserify()
  .add('./')
  .bundle(function (err, code) {
    assert.ifError(err);
    run(code);
    console.info('Normal bundle');
  });
