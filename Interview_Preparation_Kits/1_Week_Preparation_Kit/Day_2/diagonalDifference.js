/* Given a square matrix, calculate the absolute difference between the sums of its diagonals */
const squareMatrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

const squareMatrix2 = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

const squareMatrix3 = [
  [-11, -2, -4, 3],
  [-4, -5, -6, 10],
  [-10, -8, -12, 7],
  [9, 1, 6, 5],
];

const squareMatrix4 = [
  [-11, -2, -4, 3, 8],
  [-4, -5, -6, 10, 7],
  [-10, -8, -12, 2, 5],
  [9, 1, 6, 5, 11],
  [3, 5, 9, 10, 1],
];

function diagonalDifference(arr) {
  let j = arr.length - 1,
    leftToRight = 0,
    RightToLeft = 0;

  for (let i = 0; i < arr.length; i++) {
    leftToRight += arr[i][i];
    RightToLeft += arr[i][j];
    j--;
  }

  return Math.abs(leftToRight - RightToLeft);
}
console.log(diagonalDifference(squareMatrix1));
console.log(diagonalDifference(squareMatrix2));
console.log(diagonalDifference(squareMatrix3));
console.log(diagonalDifference(squareMatrix4));
