'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem
// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
  //s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  let array = [];
  let length = s.length;
  let count = 0;

  for (let number = 1; number <= length; number++) {
    for (let i = 0; i < length; i++) {
      if (i + number <= length) {
        array.push(sortLetters(s.substr(i, number)));
      } else {
        continue;
      }
    }
  }

  let counter1 = counter(array);
  for (let el in counter1) {
    console.log(el, counter1[el]);
    if (counter1[el] > 1) {
      count += counter1[el] * (counter1[el] - 1) / 2;
    }
  }
  return count;
}

function counter(arr) {
  return arr.reduce((total, letter) => {
    total[letter] ? total[letter]++ : total[letter] = 1;
    return total;
  }, {});
};

function sortLetters(s, order) {
  return s.split("").sort().join("");
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine();

    let result = sherlockAndAnagrams(s);

    ws.write(result + "\n");
  }

  ws.end();
}

