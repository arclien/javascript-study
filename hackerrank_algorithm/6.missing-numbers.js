'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// https://www.hackerrank.com/challenges/missing-numbers/problem
// Complete the missingNumbers function below.
function missingNumbers(arr, brr) {
  let counter1 = counter(arr);
  let counter2 = counter(brr);
  let missing = [];
  if (counter)
    for (let el in counter2) {

      if (counter1[el] && counter2[el] > counter1[el]) {
        missing.push(el);
      } else if (!counter1[el]) {
        missing.push(el);
      }
    }
  return missing.sort((a, b) => Number(a) > Number(b));
}

function counter(arr) {
  return arr.reduce((total, letter) => {
    total[letter] ? total[letter]++ : total[letter] = 1;
    return total;
  }, {});
};


function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

  const m = parseInt(readLine(), 10);

  const brr = readLine().split(' ').map(brrTemp => parseInt(brrTemp, 10));

  const result = missingNumbers(arr, brr);

  ws.write(result.join(' ') + '\n');

  ws.end();
}
