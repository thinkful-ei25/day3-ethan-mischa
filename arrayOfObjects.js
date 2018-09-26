'use strict';

function Person(name, jobTitle){
  this.name = name,
  this.jobTitle = jobTitle;
}

Person.prototype.height = function(){
  return 'tall';
  // this.name === 'Karen' ? 'short' : 'tall';
};
const person1 = new Person('Karen', 'hobbit');
console.log(person1.height());

const person2 = new Person('Mike', 'janitor');

console.log(person2.height());
