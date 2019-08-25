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

// https://www.hackerrank.com/challenges/find-digits/problem
// Complete the findDigits function below.
function findDigits(n) {
  let count = 0;
  let array = n.toString().split("");

  array.forEach((el) => {

    if (el > 0) {
      if (n % Number(el) === 0) {
        count++;
      }
    }

  })
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine(), 10);

    let result = findDigits(n);

    ws.write(result + "\n");
  }

  ws.end();
}
