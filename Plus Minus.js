/* Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
Print the decimal value of each fraction on a new line with  places after the decimal.
Note: This challenge introduces precision problems. 
The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable*/

const arr = [1, 1, 0, -1, -1];

let positive = [];
let negative = [];
let zero = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 1) {
    positive.push(arr[i]);
  } else if (arr[i] === 0) {
    zero.push(arr[i]);
  } else {
    negative.push(arr[i]);
  }
}

const positiveNum = (positive.length / arr.length).toFixed(5);
const negativeNum = (negative.length / arr.length).toFixed(5);
const zeroNum = (zero.length / arr.length).toFixed(5);
console.log(positiveNum, '\n', negativeNum, '\n', zeroNum);

console.log(positive.length, negative.length, zero.length);

// function plusMinus(arr) {
//   let positive = arr.filter((number) => number > 0).length / arr.length;
//   let negative = arr.filter((number) => number < 0).length / arr.length;
//   let zeronums = arr.filter((number) => number == 0).length / arr.length;
//   return console.log(
//     positive.toFixed(6) +
//       '\n' +
//       negative.toFixed(6) +
//       '\n' +
//       zeronums.toFixed(6)
//   );
// }
