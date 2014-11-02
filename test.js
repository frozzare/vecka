'use strict';

var assert = require('assert'),
    vecka = require('./lib/vecka.js');

it('should return a number', function () {
  assert.equal(typeof vecka.nu(), 'number');
});