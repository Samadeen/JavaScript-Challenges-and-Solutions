/**[
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0 ],
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 0, 2, 4, 4, 0 ],
  [ 0, 0, 0, 2, 0, 0 ],
  [ 0, 0, 1, 2, 4, 0 ]
] */

const arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

// function hourglassSum(arr) {
//   // Write your code here
//   const firstArr = Math.max(...arr[0]);
//   const secondArr = Math.max(...arr[1]);
//   const thirdArr = Math.max(...arr[2]);
//   const fourthArr = Math.max(...arr[3]);
//   const fifthArr = Math.max(...arr[4]);
//   const sixthArr = Math.max(...arr[5]);

//   console.log(
//     fifthArr + fourthArr + fifthArr + sixthArr + firstArr + secondArr + thirdArr
//   );

//   console.log(
//     firstArr,
//     secondArr,
//     thirdArr,
//     fifthArr,
//     fourthArr,
//     fifthArr,
//     sixthArr
//   );
// }

function hourglassSum(arr) {
  let max = -63;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let sum = 0;
      sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      max = max < sum ? sum : max;
    }
  }
  return max;
}

console.log(
  hourglassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ])
);
