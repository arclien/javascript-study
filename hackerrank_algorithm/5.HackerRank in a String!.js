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

// https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem
// Complete the hackerrankInString function below.
function hackerrankInString(s) {
  const compareArray = "hackerrank".split("");
  const compareCounter = counter("hackerrank");

  const targetArray = s.split("");
  const targetCounter = counter(s);
  let result = "NO";

  // 레터 카운팅
  for (let letter in compareCounter) {
    console.log(letter, compareCounter[letter]);
    if (targetCounter[letter] && compareCounter[letter] > targetCounter[letter]) {
      result = "NO";
      break;
    }
  }

  if (!result) {
    return result;
  } else {
    let index = 0;
    // 순서 맞는지 체크
    while (targetArray.length > 0) {
      let letter = targetArray.shift();
      let letter2 = compareArray[index];
      if (letter2 === letter) {
        index++;
      }
      if (index === compareArray.length) {
        result = "YES";
        break;
      }
    }
    return result;
  }
}


function counter(str) {
  return str.split('').reduce((total, letter) => {
    total[letter] ? total[letter]++ : total[letter] = 1;
    return total;
  }, {});
};

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine();

    let result = hackerrankInString(s);

    ws.write(result + "\n");
  }

  ws.end();
}
