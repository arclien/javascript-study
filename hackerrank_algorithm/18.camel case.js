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

// https://www.hackerrank.com/challenges/camelcase/problem
// Complete the camelcase function below.
function camelcase(s) {
  let count = 0;
  let characterArr = s.split("");
  characterArr.forEach((c) => {
    if (isUpperCaseAt(c, 0)) {
      count++;
    }
  });
  return count + 1;
}

function isUpperCaseAt(str, index) {
  return str.charAt(index).toUpperCase() === str.charAt(index);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  let result = camelcase(s);

  ws.write(result + "\n");

  ws.end();
}
