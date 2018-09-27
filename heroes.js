'use strict';
const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne : function (obj){
    const key = Object.keys(obj);
    const returnObj = [];
    for(let i = 0; i < this.store.heroes.length; i++){
      if (obj[key] === this.store.heroes[i][key]){
        returnObj.push(this.store.heroes[i]);
      }
    }
    return returnObj.length === 0 ? null : returnObj;
  }
};
console.log(Database.findOne({ squad: 'Justices League' }));


const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];
function findOne(arr, obj){
  const key = Object.keys(obj);
  for(let i = 0; i < arr.length; i++){
    if (arr[i][key] === obj[key]){
      return arr[i];
    }
  }
  return null;
}


// console.log(findOne(HEROES, { squad: 'Avengers' }));
