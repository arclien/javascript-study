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

// https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=sorting
// Complete the maximumToys function below.
function maximumToys(prices, k) {

  let sortedPrices = prices.sort((a, b) => Number(a) - Number(b));
  let num = 0;

  for (let i = 0, init = 0; i < sortedPrices.length; i++) {
    if (init + sortedPrices[i] <= k) {
      init += sortedPrices[i];
    } else {
      num = i;
      break;
    }
  }


  return num;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nk = readLine().split(' ');

  const n = parseInt(nk[0], 10);

  const k = parseInt(nk[1], 10);

  const prices = readLine().split(' ').map(pricesTemp => parseInt(pricesTemp, 10));

  let result = maximumToys(prices, k);

  ws.write(result + "\n");

  ws.end();
}
