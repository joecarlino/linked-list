var clear  = require('clear');
var colors = require('colors');

var Room = function(options) {
  this.name        = options.name;
  this.description = options.description;

  this.players     = options.players || [];
  this.items       = options.items   || [];
  return this;
};

Room.prototype.display = function() {
  var string = [
    this.name.cyan.underline,
    '',
    this.description.green,
    '',
    this.items.map(function(item) {
      return [
        "a",
        item.name.yellow,
        'is here.'
      ].join(' ')
    }).join('\n'),
    '',
    this.players.map(function(player) {
      return player.toString()
    }).join('\n')
  ].join('\n');
  clear();
  console.log(string);
};

module.exports = Room;
