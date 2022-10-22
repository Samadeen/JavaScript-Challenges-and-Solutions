// Write your code here

//   const day = s.split(':')[0];
//   const min = s.split(':')[1];
//   const pm = s.split(':')[2];
//   const firstTwo = day.slice(0, 2);
//   const firstTwoPm = pm.slice(0, 2);
//   const slicePm = pm.slice(pm.length - 2, pm.length);

//   if (+firstTwo === 12 && slicePm === 'AM') {
//     return `00:${min}:${firstTwoPm}`;
//   } else if (slicePm === 'PM') {
//     const sum = +day + 12;
//     return `${sum}:${min}:${firstTwoPm}`;
//   } else {
//     return s;
//   }
//   let hour = s.substring(0, 2) * 1;
//   let timeFormat = s.substring(2, 8);
//   // if midnight
//   if (hour === 12 && s.indexOf('AM') !== -1) {
//     return '00' + timeFormat;
//   }
//   // if afternoon
//   if (hour === 12 && s.indexOf('PM') !== -1) {
//     return time + timeFormat;
//   }
//   // if hour is from 1 to 11PM, add 12 to the time
//   if (hour < 12 && s.indexOf('PM') !== -1) {
//     return 12 + hour + timeFormat;
//   } else {
//     // if hour is from 1 to 11 AM
//     if (hour < 10) {
//       // if number is less than 10, add a zero in front
//       return '0' + hour + timeFormat;
//     } else {
//       // if number is greater than 9, just add rest of string
//       return hour + timeFormat;
//     }
//   }
// }

// console.log(timeConversion('12:05:45AM'));
function timeConversion(s) {
  const arr = s.slice(0, 8).split(':');
  arr[0] =
    s.indexOf('PM') > -1
      ? arr[0] == 12
        ? '12'
        : Number(arr[0]) + 12
      : arr[0] == 12
      ? '00'
      : arr[0];
  return arr.join(':');
}
