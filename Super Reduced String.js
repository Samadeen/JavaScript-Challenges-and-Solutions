/**
 Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations. 
 In each operation, select a pair of adjacent letters that match, and delete them.
Delete as many characters as possible using this method and return the resulting string. 
If the final string is empty, return Empty String
 */

function reduceString(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === str[i]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }

  return stack.join('') || 'Empty String';
}

function reduceString(str) {
  let i = 0;
  let j = 1;
  while (j < str.length) {
    if (str[i] === str[j]) {
      i--;
    }
    i++;
    j++;
  }
  return i === 0 ? 'Empty String' : str.substring(0, i);
}
