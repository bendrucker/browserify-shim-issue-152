'use strict';

var assert     = require('assert');
var browserify = require('browserify');
var run        = require('vm').runInNewContext;

browserify()
  .add('./')
  .bundle(function (err, code) {
    assert.ifError(err);
    run(code);
    assert(code.toString().indexOf('__browserify_shim') > -1);
    console.info('Normal bundle success');    
  });

browserify()
  .require('shimmed')
  .bundle(function (err, code) {
    assert.ifError(err);
    run(code);
    assert(code.toString().indexOf('__browserify_shim') > -1);
  });
