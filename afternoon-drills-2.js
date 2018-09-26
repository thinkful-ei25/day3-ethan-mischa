'use strict';

const newObject = {
  foo: 'foo!',
  bar: 'bar!',
  fum: '!fum!',
  quux: 'quux',
  spam: 'spam',
};

for(const key in newObject){
  console.log(`${key}: ${newObject[key]}`);
}