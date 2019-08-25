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

//https://www.hackerrank.com/challenges/alternating-characters/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
  let total = 0;
  let isA = s[0] === "A" ? true : false;

  s.substr(1).split("").forEach((c) => {
    if (c === "A") {
      if (isA) {
        total++;
      }
      isA = true;
    } else if (c === "B") {
      if (!isA) {
        total++;
      }
      isA = false;
    }
  })
  return total;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine();

    let result = alternatingCharacters(s);

    ws.write(result + "\n");
  }

  ws.end();
}
