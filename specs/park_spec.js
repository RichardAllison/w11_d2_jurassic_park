const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaur5;

  beforeEach(function() {
    park = new Park();
    dinosaur1 = new Dinosaur('Tyrannosaurus Rex', 2);
    dinosaur2 = new Dinosaur('Triceratops', 3);
    dinosaur3 = new Dinosaur('Velociraptor', 6);
    dinosaur4 = new Dinosaur('Diplodocus', 4);
    dinosaur5 = new Dinosaur('Triceratops', 2);
  });

  it('should have an enclouse that starts empty', function() {
    const actual = park.enclosure;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur', function() {
    assert.strictEqual(park.enclosure.length, 0);
    park.addDinosaur(dinosaur1);
    assert.strictEqual(park.enclosure.length, 1);
  });

  it('should be able to add multiple dinosaurs', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    assert.strictEqual(park.enclosure.length, 5);
  });

  it('should be able to remove all dinosaurs of particular type', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    assert.strictEqual(park.enclosure.length, 5);
    park.removeDinosaursOfType('Triceratops');
    assert.strictEqual(park.enclosure.length, 3);
    assert.deepStrictEqual(park.enclosure, [dinosaur1, dinosaur3, dinosaur4]);
  });

  it('should be able to get all dinosaurs with offspring more than 2', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    actual = park.allOverTwoOffspring();
    assert.deepStrictEqual(actual, [dinosaur2, dinosaur3, dinosaur4]);
  });

  it('should be able to calculate number of dinosaurs after 1 year starting with 1 dinosaur', function(){
    park.addDinosaur(dinosaur2);
    assert.strictEqual(park.calculateDinosaurs(1), 4);
  });

});
