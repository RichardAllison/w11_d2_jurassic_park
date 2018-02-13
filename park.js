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
    let temp = 1; // this dinosaur
    for (var i = 0; i < numberOfYears; i++) {
      const offspringRate = dinosaur.numberOfOffspring;
      let offspring = temp * offspringRate; // each dinosaur's offspring, starting with total dinosaurs for this year as set in temp (one in first year, increases with each loop)
      temp += offspring;
    }
    dinosaurCount += temp;
  }
  return dinosaurCount;
}

module.exports = Park;
