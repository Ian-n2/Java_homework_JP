const Dinosaur = function (species, diet, guestsAttractedPerDay) {
  this.species = species;
  this.diet = diet;
  this.guestsAttractedPerDay = guestsAttractedPerDay;
}

Dinosaur.prototype.guests = function(){
  return this.guestsAttractedPerDay;
};


module.exports = Dinosaur;
