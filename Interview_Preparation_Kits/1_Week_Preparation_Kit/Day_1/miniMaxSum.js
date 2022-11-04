/* Given five positive integers, find the minimum and maximum values 
that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two 
space-separated long integers. */

function miniMaxSum(arr) {
  let smaller = arr[0],
    greater = arr[0],
    minimumSum = 0,
    maximumSum = 0,
    arrCopy = [...arr];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smaller) {
      smaller = arr[i];
    }
    if (arr[i] > greater) {
      greater = arr[i];
    }
  }

  arrCopy.splice(arrCopy.indexOf(smaller), 1);
  arr.splice(arr.indexOf(greater), 1);

  minimumSum = arr.reduce((minimumSum, i) => {
    return minimumSum + i;
  });

  maximumSum = arrCopy.reduce((maximumSum, i) => {
    return maximumSum + i;
  });

  console.log(minimumSum, maximumSum);
}

const array1 = [3, 1, 5, 9, 7];
const array2 = [5, 5, 5, 5, 5];

miniMaxSum(array1);
miniMaxSum(array2);
