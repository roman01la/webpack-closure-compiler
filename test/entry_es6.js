import div from './divide_es6';
import { compose, length, filter, equals, prop } from 'ramda';

import './styles.css';

console.log(div(30, 3));

let animals = [
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

const getBirds = filter(compose(equals('bird'), prop('type')));
const getBirdsCount = compose(length, getBirds);
const birdsCount = getBirdsCount(animals);

console.log(birdsCount);
