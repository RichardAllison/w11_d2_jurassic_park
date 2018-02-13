const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function() {

  let dinosaur;

  beforeEach(function() {
    dinosaur = new Dinosaur('Tyrannosaurus Rex');
  });

  it('should have a type', function() {
    actual = dinosaur.type;
    assert.strictEqual(actual, 'Tyrannosaurus Rex');
  });

});
