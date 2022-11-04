/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0 && i % 5 !== 0) {
      console.log('Fizz');
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);

function findMedian(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  const median = Math.round(arr.length / 2) - 1;
  return arr[median];
}

const array = [0, 1, 2, 4, 6, 5, 3];

console.log(findMedian(array));
