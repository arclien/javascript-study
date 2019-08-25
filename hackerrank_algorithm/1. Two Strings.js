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

// https://www.hackerrank.com/challenges/two-strings/problem
// Complete the twoStrings function below.
function twoStrings(s1, s2) {
  const set1 = new Set(s1.split(''));
  const array = s2.split('');
  let hasCommon = "NO";
  array.forEach((el) => {
    if (set1.has(el)) {
      hasCommon = "YES";
      return;
    }
  });
  return hasCommon;
}


function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s1 = readLine();

    const s2 = readLine();

    let result = twoStrings(s1, s2);

    ws.write(result + "\n");
  }

  ws.end();
}
