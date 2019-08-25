'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}


// https://www.hackerrank.com/challenges/sherlock-and-array/problem
// Complete the balancedSums function below.
function balancedSums(arr) {

  //0 제외하고 [] 혹은 [1]같은 경우는 무조건 YES
  arr = arr.filter((el) => el > 0);

  let length = arr.length;
  if (length <= 1) {
    return "YES";
  }

  let total = getSumOfArray(arr);
  let leftSum = 0;
  for (let i = 1; i <= length; i++) {
    leftSum += arr[i - 1];
    if ((leftSum * 2) == (total - arr[i])) {
      return "YES";
    }
  }
  return "NO";
}

function getSumOfArray(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const T = parseInt(readLine().trim(), 10);

  for (let TItr = 0; TItr < T; TItr++) {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = balancedSums(arr);

    ws.write(result + '\n');
  }

  ws.end();
}
