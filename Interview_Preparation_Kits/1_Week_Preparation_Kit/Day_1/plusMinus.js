/* Given an array of integers, calculate the ratios of its elements that are positive,
 negative, and zero. Print the decimal value of 
 each fraction on a new line with  places after the decimal.

 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  let positive = 0,
    negative = 0,
    zeros = 0;

  for (let integer of arr) {
    if (integer > 0) {
      positive++;
    } else if (integer < 0) {
      negative++;
    } else {
      zeros++;
    }
  }

  console.log(
    (positive / arr.length).toFixed(6) +
      '\n' +
      (negative / arr.length).toFixed(6) +
      '\n' +
      (zeros / arr.length).toFixed(6) +
      '\n'
  );
  // console.log((negative/arr.length).toFixed(6));
  // console.log((zeros/arr.length).toFixed(6));
}

const arrayOfIntegers1 = [1, 2, 3, -1, -2, -3, 0, 0];
const arrayOfIntegers2 = [-4, 3, -9, 0, 4, 1];

plusMinus(arrayOfIntegers1);
plusMinus(arrayOfIntegers2);
