// we will be building a function that determines the last index of an item in an array.
function lastIndexOf(array,value) {
  // if the value never occurs, function returns -1
  let lastIndex = -1;
  // running for loop for parameter array
  for (i = 0; i < array.length; i++) {
    // if the array[i] equals to the value, last index will record the array position
    if (array[i] === value) {
      // it will continue to replace the number as it continues 
      lastIndex = i;
    }
  }
  return lastIndex;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);