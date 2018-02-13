const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  beforeEach(function() {
    park = new Park();
    dinosaur1 = new Dinosaur('Tyrannosaurus Rex', 2);
    dinosaur2 = new Dinosaur('Triceratops', 2);
    dinosaur3 = new Dinosaur('Velociraptor', 2);
    dinosaur4 = new Dinosaur('Diplodocus', 2);
  });

  it('should have an enclouse that starts empty', function() {
    actual = park.enclosure;
    assert.deepStrictEqual(actual, []);
  });

})
