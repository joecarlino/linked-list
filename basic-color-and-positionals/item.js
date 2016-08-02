var Item = function(options) {
  this.name = options.name;
  this.description = options.description;
  this.flags = options.flags || [];

  return this;
};

Item.prototype.toString = function() {
  return this.name;
};

module.exports = Item;
