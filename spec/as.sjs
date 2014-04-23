'use strict';
var chai = require("chai")
require('should')

describe('as', function() {
  describe('json', function() {
    it('should stringify obj', function() {
      var obj = {
        foo: {
          bar: []
        }
      };

      (obj as string).should.equal(JSON.stringify(obj));

    });
  })
});