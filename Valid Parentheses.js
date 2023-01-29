/** 
 Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
The function should return true if the string is valid, and false if it's invalid.
 */
function validParentheses(parens) {
  // your code here ..
  let count = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') count++;
    if (parens[i] === ')' && count-- === 0) return false;
  }
  return count === 0;
}

// function validParentheses(parens) {
//   // your code here ..
//   let stack = [];

//   for (let i = 0; i < parens.length; i++) {
//     if (parens[i] === '(') {
//       stack.push(parens[i]);
//     } else if (parens[i] === ')') {
//       if (stack.length === 0) {
//         return false;
//       }
//       stack.pop();
//     }
//   }

//   return stack.length === 0;
// }

// var isValid = function (s) {
//   // Initialize stack to store the closing brackets expected...
//   let stack = [];
//   // Traverse each character in input string...
//   for (let idx = 0; idx < s.length; idx++) {
//     // If open parentheses are present, push it to stack...
//     if (s[idx] == '{') {
//       stack.push('}');
//     } else if (s[idx] == '[') {
//       stack.push(']');
//     } else if (s[idx] == '(') {
//       stack.push(')');
//     }
//     // If a close bracket is found, check that it matches the last stored open bracket
//     else if (stack.pop() !== s[idx]) {
//       return false;
//     }
//   }
//   return !stack.length;
// };
