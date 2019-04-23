const Park = function(name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur);
  return this.dinosaurs;
}

Park.prototype.removeDinosaur = function(dinosaur){
  this.dinosaurs.pop(dinosaur);
  return this.dinosaurs;
}

Park.prototype.mostVisitors = function(){
  mostPopular = this.dinosaurs[0];
  for (let visitor of this.dinosaurs){
    if (visitor.guestsAttractedPerDay > mostPopular.guestsAttractedPerDay){
      mostPopular = visitor;
    }
  }
  return mostPopular;
}

Park.prototype.findBySpecies = function(species){
  result = []
  for (let dinosaur of this.dinosaurs){
    if (dinosaur.species === species){
      result.push(dinosaur);
    }
  }
  return result;
}




module.exports = Park;
