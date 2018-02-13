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
    dinosaur2 = new Dinosaur('Triceratops', 3);
    dinosaur3 = new Dinosaur('Velociraptor', 6);
    dinosaur4 = new Dinosaur('Diplodocus', 4);
  });

  it('should have an enclouse that starts empty', function() {
    const actual = park.enclosure;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add dinosaurs', function() {
    assert.strictEqual(park.enclosure.length, 0);
    park.addDinosaur(dinosaur1);
    assert.strictEqual(park.enclosure.length, 1);
  });

});
