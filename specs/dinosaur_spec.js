const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function() {

  let dinosaur;

  beforeEach(function() {
    dinosaur = new Dinosaur('Tyrannosaurus Rex', 2);
  });

  it('should have a type', function() {
    actual = dinosaur.type;
    assert.strictEqual(actual, 'Tyrannosaurus Rex');
  });

  it('should have a number of offspring per year', function() {
    actual = dinosaur.numberOfOffspring;
    assert.strictEqual(actual, 2);
  });

});
