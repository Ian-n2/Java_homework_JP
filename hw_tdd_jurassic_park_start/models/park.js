const Park = function (name, price, dinosaur) {
  this.name = name;
  this.price = price;
  this.dinosaur = [];
}

Park.prototype.addDino = function(dino){
  this.dinosaur.push(dino);
};

Park.prototype.count = function(){
  return this.dinosaur.length;
};

Park.prototype.delete = function(name){
  this.dinosaur.splice(name);
};

Park.prototype.popular = function(){
  let largest = 0;
  for ( dinosaur of this.dinosaur){
  if (dinosaur.guestsAttractedPerDay >= largest || dinosaur.guestsAttractedPerDay >=
    largest.guestsAttractedPerDay){
      largest = dinosaur
    }
  }
  return largest
};

Park.prototype.species = function(species){
  array = []
  for (dinosaur of this.dinosaur){
    if (dinosaur.species === species){
      array.push(dinosaur)
    }
  }
        return array
};

Park.prototype.vistors = function(){
  total = 0
  for (dinosaur of this.dinosaur){
    total += dinosaur.guestsAttractedPerDay
  }
  return total
};

Park.prototype.yearlyVists = function(){
  return this.vistors() * 365;
};

Park.prototype.yearlyprice = function(){
  return this.yearlyVists() * this.price;
}

module.exports = Park;
