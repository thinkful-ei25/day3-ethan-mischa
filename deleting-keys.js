'use strict';
const sampleObj = {
  foo: '\'foo\'',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
}
console.log(sampleObj);
keyDeleter(sampleObj);
console.log(sampleObj);
