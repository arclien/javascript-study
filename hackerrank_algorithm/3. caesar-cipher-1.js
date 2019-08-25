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

// https://www.hackerrank.com/challenges/caesar-cipher-1/problem
// Complete the caesarCipher function below.
function caesarCipher(s, k) {
  // 한바퀴를 더 돌 경우( a+25=>z ) 모듈러 연산으로 무시
  k = k % 26;
  return s.split("").map((char) => {
    let ascii = char.charCodeAt(0);
    if (ascii >= 65 && ascii <= 90) {
      let offset = 90 - k + 1;
      if (ascii / offset >= 1) {
        return String.fromCharCode(ascii % offset + 65);
      } else {
        return String.fromCharCode(ascii + k);
      }
    } else if (ascii >= 97 && ascii <= 122) {
      let offset = 122 - k + 1;
      if (ascii / offset >= 1) {
        return String.fromCharCode(ascii % offset + 97);
      } else {
        return String.fromCharCode(ascii + k);
      }
    } else {
      return char;
    }
  }).join("");
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const s = readLine();

  const k = parseInt(readLine(), 10);

  let result = caesarCipher(s, k);

  ws.write(result + "\n");

  ws.end();
}
