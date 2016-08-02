var Player = require('./player');
var Room   = require('./room');
var Item   = require('./item');

var chair = new Item({name: 'a comfy chair', flags: ['sittable']});

var cafe = new Room({
  name: 'A small, quaint cafe',
  description: "The walls around you are quite dark from years and years of tobacco smoke and overcooked coffee. There is a smell that you can't quite put your nose to, but the coffee is cheap and plentiful, there are a lot of books, and the chairs are overstuffed and comfy.",
  items: [chair]
});

var jim  = new Player({name: 'Jim'});
var jane = new Player({name: 'Jane'});

jim.enter(cafe);
jane.enter(cafe);

console.log(jim.sit(chair));

cafe.display();
