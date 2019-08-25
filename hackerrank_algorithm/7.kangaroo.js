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

// https://www.hackerrank.com/challenges/kangaroo/problem
// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
  let left = (v1 - v2);
  let right = x1 - x2;
  let result;

  if (left * right >= 0) {
    result = "NO";
  } else if (left * right < 0) {
    if (Math.abs(left) > Math.abs(right)) {
      if (left % right === 0) {
        result = "YES";
      } else {
        result = "NO";
      }
    } else {
      if (right % left === 0) {
        result = "YES";
      } else {
        result = "NO";
      }
    }
  }
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const x1V1X2V2 = readLine().split(' ');

  const x1 = parseInt(x1V1X2V2[0], 10);

  const v1 = parseInt(x1V1X2V2[1], 10);

  const x2 = parseInt(x1V1X2V2[2], 10);

  const v2 = parseInt(x1V1X2V2[3], 10);

  let result = kangaroo(x1, v1, x2, v2);

  ws.write(result + "\n");

  ws.end();
}
