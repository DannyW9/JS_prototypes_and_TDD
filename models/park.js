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
  let mostPopular = this.dinosaurs[0];
  for (let visitor of this.dinosaurs){
    if (visitor.guestsAttractedPerDay > mostPopular.guestsAttractedPerDay){
      mostPopular = visitor;
    }
  }
  return mostPopular;
}

Park.prototype.findBySpecies = function(species){
  let result = []
  for (let dinosaur of this.dinosaurs){
    if (dinosaur.species === species){
      result.push(dinosaur);
    }
  }
  return result;
}

Park.prototype.totalDailyVisitors = function(){
  let total = 0;
  for (let dinosaur of this.dinosaurs){
    total += dinosaur.guestsAttractedPerDay;
  }
  return total;
}

Park.prototype.totalYearlyVisitors = function(){
  return (this.totalDailyVisitors() * 365);
}

Park.prototype.totalYearlyRevenue = function(){
  return (this.totalYearlyVisitors() * this.ticketPrice)
}

Park.prototype.removeBySpecies = function(species){
  for ( var i = this.dinosaurs.length -1; i >= 0; i-- ){
    if (this.dinosaurs[i].species === species){
      this.dinosaurs.splice(i, 1);
    }
  }
  return this.dinosaurs
}



module.exports = Park;
