Array.prototype.contains = function(item) {
  return this.indexOf(item) > -1;
};

var Player = function(options) {
  this.name = options.name;
  this.position = 'standing';
  return this;
};

Player.prototype.speak = function(msg) {
  console.log([this.name, 'said:', msg].join(' '));
};

Player.prototype.enter = function(room) {
  this.room = room;
  room.players.push(this);
}

Player.prototype.positionalTargetDescription = function() {
  if (!this.positionTarget) {
    return ''
  };

  return [
    'on',
    this.positionTarget.toString()
  ].join(' ');
};

Player.prototype.positionalDescription = function() {
  return [
    'is',
    this.position,
    'here',
    this.positionalTargetDescription()
  ].join(' ');
};

Player.prototype.toString = function() {
  return [
    this.name,
    this.positionalDescription()
  ].join(' ');
};

Player.prototype.sit = function(item) {
  if (!item) {
    return "That doesn't exist.";
  }

  if (!this.room.items.contains(item)) {
    return "That isn't here."
  }

  if (!item.flags.contains('sittable')) {
    return "You can't sit on that.";
  }

  this.position = 'sitting';
  this.positionTarget = item;

  return [
    "You sat down on the",
    item.name
  ].join(' ');
};

module.exports = Player;
