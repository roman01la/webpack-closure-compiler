var div = require('./divide');
var R = require('ramda');

require('./styles.css');

console.log(div(30, 3));

var animals = [
  {
    name: 'goose',
    type: 'bird',
    color: 'white'
  },
  {
    name: 'parrot',
    type: 'bird',
    color: 'yellow'
  },
  {
    name: 'cat',
    type: 'mammal',
    color: 'grey'
  }
];

var getBirds = R.filter(R.compose(R.equals('bird'), R.prop('type')));
var getBirdsCount = R.compose(length, getBirds);
var birdsCount = getBirdsCount(animals);

console.log(birdsCount);
