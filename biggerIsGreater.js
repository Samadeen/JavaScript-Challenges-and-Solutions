/**
 Given a word, create a new word by swapping some or all of its characters. This new word must meet two criteria:

It must be greater than the original word
It must be the smallest word that meets the first condition
 */

function biggerIsGreater(w) {
  // Write your code here
  const arr = w.split('');
  let pivot = arr.length - 2;

  while (pivot >= 0 && arr[pivot] >= arr[pivot + 1]) {
    pivot--;
  }
  if (pivot < 0) {
    return 'no answer';
  }

  let swap = arr.length - 1;
  while (swap > pivot && arr[swap] <= arr[pivot]) {
    swap--;
  }
  [arr[pivot], arr[swap]] = [arr[swap], arr[pivot]];

  const suffix = arr.splice(pivot + 1).reverse();
  arr.push(...suffix);
  return arr.join('');
}
