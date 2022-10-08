/**Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
 Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 Example
const arr = [1,3,5,7,9]
The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 23. The function print 16 23*/

function miniMaxSum(arr) {
  // Write your code here
  const minSum = arr
    .sort((a, b) => a - b)
    .slice(0, arr.length - 1)
    .reduce((acc, b) => acc + b, 0);
  const MaxSum = arr
    .sort((a, b) => b - a)
    .slice(0, arr.length - 1)
    .reduce((acc, b) => acc + b, 0);
  console.log(minSum, MaxSum);
}

miniMaxSum([1, 3, 5, 7, 9]);
