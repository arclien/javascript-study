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

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */
//  https://www.hackerrank.com/challenges/picking-numbers/problem
function pickingNumbers(a) {
  // Write your code here
  let array = new Array(a.length);

  for (let i = 0; i < a.length; i++) {

    array[a[i]] = array[a[i]] ? array[a[i]] + 1 : 1;
    array[a[i] - 1] = array[a[i] - 1] ? array[a[i] - 1] + 1 : 1;
  }
  console.log(array);
  array = array.sort((a, b) => b - a);
  return array[0]
}


function counter(arr) {
  return arr.reduce((total, letter) => {
    total[letter] ? total[letter]++ : total[letter] = 1;
    return total;
  }, {});
};



function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

  const result = pickingNumbers(a);

  ws.write(result + '\n');

  ws.end();
}
