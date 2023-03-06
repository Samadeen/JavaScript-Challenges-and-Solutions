// Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

function sherlockAndAnagrams(s) {
  // Write your code here
  let counter = 0;
  const anagrams = {};

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const substring = s.slice(i, j + 1);
      const sorted = substring.split('').sort().join('');
      if (anagrams[sorted]) {
        counter += anagrams[sorted];
        anagrams[sorted]++;
      } else {
        anagrams[sorted] = 1;
      }
    }
  }

  return counter;
}

// function countAnagramPairs(s) {
//   let counter = 0;
//   const anagrams = new Map();

//   for (let i = 0; i < s.length; i++) {
//     let hash = 0;
//     for (let j = i; j < s.length; j++) {
//       hash += s.charCodeAt(j);
//       const freq = anagrams.get(hash) || new Map();
//       const count =
//         freq.get(
//           s
//             .slice(i, j + 1)
//             .split('')
//             .sort()
//             .join('')
//         ) || 0;
//       counter += count;
//       freq.set(
//         s
//           .slice(i, j + 1)
//           .split('')
//           .sort()
//           .join(''),
//         count + 1
//       );
//       anagrams.set(hash, freq);
//     }
//   }

//   return counter;
// }
