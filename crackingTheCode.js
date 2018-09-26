'use strict';

function decode(string){
  let decoded = ''; 
  const words = string.split(' ');
  const cipher = {a: 1, b: 2, c: 3, d: 4,};
  for(let i = 0; i < words.length; i++){
    if (cipher.hasOwnProperty(words[i][0])){
      let num = cipher[words[i][0]];
      decoded += words[i][num];
    }else decoded += ' ';
  }
  return decoded;
}

let coded = 'craft block argon meter bells brown croon droop';
console.log(decode(coded));