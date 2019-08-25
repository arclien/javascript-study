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
  inputString = inputString.trim().split('\n').map(str => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// https://www.hackerrank.com/challenges/equal-stacks/problem
/*
 * Complete the equalStacks function below.
 */
function equalStacks(h1, h2, h3) {

  let sum1 = sumOfArr(h1);
  let sum2 = sumOfArr(h2);
  let sum3 = sumOfArr(h3);

  let length1 = h1.length;
  let length2 = h2.length;
  let length3 = h3.length;

  let shift;
  while ((sum1 !== sum2 || sum2 !== sum3)) {
    if (sum1 > sum2) {
      if (sum1 > sum3) {
        sum1 -= h1.shift();
      } else {
        sum3 -= h3.shift();
      }
    } else {
      if (sum2 > sum3) {
        sum2 -= h2.shift();
      } else {
        sum3 -= h3.shift();
      }
    }
  }
  console.log(sum1, sum2, sum3);
  return sum1;
}

function sumOfArr(arr) {
  return arr.reduce((sum, el) => {
    return sum ? sum + el : el;
  })
}

function maxLength(a, b, c) {

}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n1N2N3 = readLine().split(' ');

  const n1 = parseInt(n1N2N3[0], 10);

  const n2 = parseInt(n1N2N3[1], 10);

  const n3 = parseInt(n1N2N3[2], 10);

  const h1 = readLine().split(' ').map(h1Temp => parseInt(h1Temp, 10));

  const h2 = readLine().split(' ').map(h2Temp => parseInt(h2Temp, 10));

  const h3 = readLine().split(' ').map(h3Temp => parseInt(h3Temp, 10));

  let result = equalStacks(h1, h2, h3);

  ws.write(result + "\n");

  ws.end();
}
