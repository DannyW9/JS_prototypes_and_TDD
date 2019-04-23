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
  
}




module.exports = Park;
