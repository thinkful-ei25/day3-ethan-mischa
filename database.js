'use strict';

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {
  let newArr = arr 
  if (query.name)
  arr.filter(query => query === arr[key]; let key = Object.keys(query);
  console.log(key);
  let values = query[key];
  console.log(values);
  for (let i = 0; i < arr.length; i++){
    if(arr[key[i]] === values){
      return arr[i];
    } else {
      return null;
    }
  }
}

//console.log(findOne(HEROES, { id: 1 }));
console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
