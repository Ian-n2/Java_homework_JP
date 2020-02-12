const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park("Lizard Land", 20, [])
    terry = new Dinosaur('t-rex', 'carnivore', 50)
    harry = new Dinosaur('Hornface', "herbivore", 40)
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Lizard Land');
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 20);
  });
  it('should have a collection of dinosaurs', function(){
    const actual = park.count();
    assert.deepEqual(actual, 0);
});
  it('should be able to add a dinosaur to its collection', function(){
  park.addDino(terry);
  const actual = park.count();
  assert.deepEqual(actual, 1);
});
  it('should be able to remove a dinosaur from its collection', function(){
    park.addDino(terry);
    park.delete(terry);
    const actual = park.count();
    assert.deepEqual(actual, 0);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDino(terry);
    park.addDino(harry);
    const actual = park.popular();
    assert.strictEqual(actual, terry)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDino(terry);
    park.addDino(harry);
    const actual = park.species('Hornface')
    const expected = [harry]
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDino(terry);
    park.addDino(harry);
    const actual = park.vistors();
    assert.strictEqual(actual, 90)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDino(terry);
    park.addDino(harry);
    const actual = park.yearlyVists();
    assert.strictEqual(actual, 32850)
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDino(terry);
    park.addDino(harry);
    const actual = park.yearlyprice()
    assert.strictEqual(actual, 657000)
  });

});
