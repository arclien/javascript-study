//https://www.hackerrank.com/challenges/qheap1/problem
function processData(input) {
  let inputs = input.split("\n");
  let array = [];
  for (let i = 0; i < inputs.length; i++) {
    let split = inputs[i].split(" ");

    split[0] = Number(split[0]);
    split[1] = Number(split[1]);


    if (split[0] === 1) {
      array.push(split[1]);
      array = array.sort((a, b) => Number(a) - Number(b));
    } else if (split[0] === 2) {
      let index = array.indexOf(split[1]);
      array.splice(index, 1);
    } else if (split[0] === 3) {
      if (array.length > 0) {
        console.log(array[0]);

      }

    }
  }

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
