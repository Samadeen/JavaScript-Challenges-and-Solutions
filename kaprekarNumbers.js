/**
 A modified Kaprekar number is a positive whole number with a special property. 
 If you square it, then split the number into two integers and sum those integers, you have the same value you started with. Consider a positive whole number n with d digits. 
 We square n to arrive at a number that is either 2 x d  digits long or (2 x d) - 1  digits long. 
 Split the string representation of the square into two parts, l and r. The right hand part, r must be d digits long. 
 The left is the remaining substring. Convert those two substrings back to integers, add them and see if you get n.
 */
function kaprekarNumbers(p, q) {
  let count = 0;
  const r = [];

  for (let i = p; i < q; i++) {
    let a = (i ** 2).toString();
    let b = Math.floor(a.length / 2);
    let c = a.slice(b);
    let d = a.slice(0, b);

    if (!c) c = 0;
    if (!d) d = 0;
    if (parseInt(c) + parseInt(d) === i) {
      r.push(i);
      count++;
    }
  }
  if (!count) console.log('INVALID RANGE');
  console.log(r.join(' '));
}
