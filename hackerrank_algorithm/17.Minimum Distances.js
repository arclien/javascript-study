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

// https://www.hackerrank.com/challenges/minimum-distances/problem
// Complete the minimumDistances function below.
function minimumDistances(a) {
  let count = counter(a);
  let min = -1;
  for (let number in count) {

    if (count[number] >= 2) {
      console.log(count)
      let indices = a.reduce((arr, e, i) => ((e == number) && arr.push(i), arr), []);
      let _min = Math.abs(indices[1] - indices[0]);
      console.log(_min);
      min = (min === -1 || _min < min) ? _min : min;

    }

  }
  return min;
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

  const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

  let result = minimumDistances(a);

  ws.write(result + "\n");

  ws.end();
}
