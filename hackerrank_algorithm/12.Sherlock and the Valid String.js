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


// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
// Complete the isValid function below.
function isValid(s) {

  let splitted = counter(s);
  console.log(splitted);
  let wordCounter = {};
  for (let i in splitted) {
    //console.log(i, splitted[i]);
    wordCounter[splitted[i]] ? wordCounter[splitted[i]]++ : wordCounter[splitted[i]] = 1;
  }
  let count = 0;
  let a;
  let b;
  for (let i in wordCounter) {
    if (count === 0) {
      a = i;
    } else {
      b = i
    }
    count++;
    //console.log(i, wordCounter[i]);
  }
  console.log(count);
  if (count === 1) {
    return "YES";
  } else if (count === 2) {
    console.log(wordCounter[a], wordCounter[b]);
    console.log(a, b);

    if (wordCounter[a] == 1) {
      if (a == 1) {
        return "YES";
      } else {
        if (Math.abs(a - b) == 1) {
          return "YES";
        } else {
          return "NO";
        }
      }
    }

    if (wordCounter[b] == 1) {
      if (b == 1) {
        return "YES";
      } else {
        if (Math.abs(a - b) == 1) {
          return "YES";
        } else {
          return "NO";
        }
      }
    }



    if (a > b) {
      if (a - b == 1 && wordCounter[a] === 1) {
        return "YES";
      } else if (a - b == 1 && wordCounter[a] !== 1) {
        return "NO";
      } else {
        return "NO";
      }
    } else if (a < b) {
      if (b - a == 1 && wordCounter[b] === 1) {
        return "YES";
      } else if (b - a == 1 && wordCounter[b] !== 1) {
        return "NO";
      } else {
        return "NO";
      }
    } else {
      return "NO";
    }

  } else {
    return "NO";
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

  const s = readLine();

  let result = isValid(s);

  ws.write(result + "\n");

  ws.end();
}
