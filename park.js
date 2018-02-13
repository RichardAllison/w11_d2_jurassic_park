const Park = function() {
  this.enclosure = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.enclosure.push(dinosaur);
}

Park.prototype.removeDinosaursOfType = function(dinosaurType) {
  for (var dinosaur of this.enclosure) {
    if (dinosaur.type === dinosaurType) {
      const index = this.enclosure.indexOf(dinosaur);
      if (index >= 0) {
        this.enclosure.splice(index,1)
      }
    }
  }
}

Park.prototype.allOverTwoOffspring = function() {
  const dinosaurs = [];
  for (var dinosaur of this.enclosure) {
    if (dinosaur.numberOfOffspring > 2) {
      dinosaurs.push(dinosaur);
    }
  }
  return dinosaurs;
}

Park.prototype.calculateDinosaurs = function(numberOfYears) {
  let dinosaurCount = 0;
  for (var dinosaur of this.enclosure) {
    dinosaurCount++;
    dinosaurCount += dinosaur.numberOfOffspring;
  }
  return dinosaurCount * numberOfYears;
}

module.exports = Park;
