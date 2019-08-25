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

/*
 * Complete the timeConversion function below.
 */
// https://www.hackerrank.com/challenges/time-conversion/problem
function timeConversion(s) {
  let array = s.split(":");
  let format = array[array.length - 1].substr(2, 2);
  array[array.length - 1] = array[array.length - 1].replace(format, "");
  let hour = Number(array[0]);
  if (format === "PM") {
    if (hour < 12) {
      array[0] = hour + 12;
    }
  } else if (format === "AM") {
    if (hour === 12) {
      array[0] = "00";
    }
  }
  return array.join(":");

}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  let result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
