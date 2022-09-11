// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string.
//  If there are two or more words that are the same length, return the first word from the string with that length.
// Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

function LongestWord(sen) {
  // Using regrex to return the word containing only letters and numbers
  var arr = sen.match(/[a-z]+/gi);

  //Using the sort method to return the word with the longest letters
  var sorted = arr.sort(function (a, b) {
    return b.length - a.length;
  });
  //Returning the first word in the array
  return sorted[0];
}
