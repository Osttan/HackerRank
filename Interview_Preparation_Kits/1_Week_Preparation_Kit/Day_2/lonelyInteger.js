/* Given an array of integers, where all elements but one occur twice, find the unique element. */

const a = [1, 2, 3, 4, 3, 2, 1];
const b = [1, 1, 2, 2, 2, 5, 6, 6, 3, 3, 4, 4];

function lonelyInteger(numbersArray) {
  for (let number of numbersArray) {
    for (let i = 0; i < numbersArray.length; i++) {
      let found = numbersArray.filter(number => number === numbersArray[i]);
      if (found.length === 1) {
        return +found;
      }
    }
  }
}

console.log(lonelyInteger(a));
console.log(lonelyInteger(b));
