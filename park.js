const Park = function() {
  this.enclosure = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.enclosure.push(dinosaur);
}

Park.prototype.removeDinosaursOfType = function(dinosaurType) {
  for (var dinosaur of this.enclosure) {
    if (dinosaur.type == dinosaurType) {
      const index = this.enclosure.indexOf(dinosaur);
      if (index >= 0) {
        this.enclosure.splice(index,1)
      }
    }
  }
}

module.exports = Park;
