'use strict';

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function(){
      return `${this.firstName} ${this.lastName}`;
    },
  };
  return person;
}
const newPerson = personMaker();
console.log(newPerson.firstName);
console.log(newPerson.fullName());