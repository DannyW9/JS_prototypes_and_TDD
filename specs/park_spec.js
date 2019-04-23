const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1
  let dinosaur2
  let dinosaurs

  beforeEach(function() {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Velociraptor', 'carnivore', 70);
    dinosaurs = [dinosaur1, dinosaur2]
    park = new Park('Raptor Ridge', 12, dinosaurs);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Raptor Ridge');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 12);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2)
  });

  it('should be able to add a dinosaur to its collection', function(){
    let dinosaur3 = new Dinosaur('t-rex', 'carnivore', 50);
    const actual = park.addDinosaur(dinosaur3).length;
    assert.strictEqual(actual, 3);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    const actual = park.removeDinosaur(dinosaur2).length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.mostVisitors().guestsAttractedPerDay;
    assert.strictEqual(actual, 70);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    const actual = park.findBySpecies("t-rex").length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    const actual = park.totalDailyVisitors();
    assert.strictEqual(actual, 120);
  })

  it('should be able to calculate the total number of visitors per year', function(){
    const actual = park.totalYearlyVisitors();
    assert.strictEqual(actual, 43800);
  })

  it('should be able to calculate the total yearly revenue from ticket sales', function(){
    const actual = park.totalYearlyRevenue();
    assert.strictEqual(actual, 525600);
  })

  it('should be able to remove all dinosaurs of a particular species');

});
