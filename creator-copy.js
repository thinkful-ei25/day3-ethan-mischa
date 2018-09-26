'use strict';
// In this drill, you need to write code for the createMyObject function so that it returns an object with the following key value pairs:

// foo => 'bar'
// answerToUniverse => 42
// olly olly => 'oxen free'
// sayHello => a function that returns the string 'hello'

function createMyObject() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function() {
      return 'Hello';
    }
  }
}
let object = createMyObject();
console.log(createMyObject());
console.log(object.foo);
console.log(object.sayHello());

function updateObject(obj){
  obj.foo = 'foo',
  obj.bar = 'bar',
  obj.bizz = 'bizz',
  obj.bang = 'bang';
  return obj;
}
const obj = {};
console.log(updateObject(obj));

