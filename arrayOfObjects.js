'use strict';

function Person(name, jobTitle){
  this.name = name,
  this.jobTitle = jobTitle;
}
Person.prototype.boss = function(){
  return this.jobTitle !== 'owner' ? 'Tom' : '';
  // this.name === 'Karen' ? 'short' : 'tall';
};

function Employee (name, jobTitle, boss){
  this.name = name,
  this.jobTitle = jobTitle,
  
}
const person1 = new Person('Karen', 'hobbit');

const person2 = new Person('Mike', 'janitor');

const person3 = new Person('Tom', 'owner');

const people = [person1, person2, person3];

for (let i = 0; i < people.length; i++){
  if (people[i].boss() === ''){
    console.log(`${people[i].jobTitle} ${people[i].name} doesn't report to anybody.`);
  }
  else{
    console.log(`${people[i].jobTitle} ${people[i].name} reports to ${people[i].boss()}.`);
  
  }  //console.log(Person());
}
// console.log(person1.boss());

// console.log(person2);

// console.log(person3.boss());
