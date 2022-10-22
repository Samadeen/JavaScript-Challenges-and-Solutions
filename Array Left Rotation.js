/**
 A left rotation operation on an array of size n shifts each of the array's elements 1 unit to the left. 
 Given an integer, d , rotate the array that many steps left and return the result.
Example
d = 2
arr = [1,2,3,4,5]
after 2 rotations
arr = [3,4,5,1,2]
 */

// function rotateLeft(d, arr) {
//   // Write your code here
//   const spread = arr.splice(0, d);
//   arr.push(...spread);
//   console.log(arr.toString().split(',').join(' '));
// }

function rotateLeft(d, arr) {
  const newPos = (index) => {
    return (index - d + arr.length) % arr.length;
  };
  let rotatedArr = [];
  for (let i = 0; i < arr.length; i++) {
    rotatedArr[newPos(i)] = arr[i];
  }
  return rotatedArr;
}

rotateLeft(3, [1, 2, 3, 4, 5]);
