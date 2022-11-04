// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

function timeConversion(s) {
  if (s.includes('AM')) {
    return s.slice(0, 2) === '12'
      ? s.replace('12', '00').slice(0, 8)
      : s.slice(0, 8);
  } else {
    const convertedHour =
      +s.slice(0, 2) + 12 !== 24 ? +s.slice(0, 2) + 12 : '12';
    return `${convertedHour}${s.slice(2, 8)}`;
  }
}

const timeInput = '12:05:45AM';
const timeInputMidnight = '12:01:00AM';
const timeInput2 = '12:01:00PM';
const timeInput3 = '05:01:00PM';
const timeInput4 = '11:01:00PM';
const timeInput5 = '11:01:00AM';
const timeInput6 = '04:49:59PM';

console.log(timeConversion(timeInput));
console.log(timeConversion(timeInputMidnight));
console.log(timeConversion(timeInput2));
console.log(timeConversion(timeInput3));
console.log(timeConversion(timeInput4));
console.log(timeConversion(timeInput5));
console.log(timeConversion(timeInput6));
