// 20 mins, need to upload
const sumLargestNumbers = function(data) {
  // blank slate starting at -1
  // if second biggest number runs first it can be moved to big2, or get stored at big2
  let big1 = -1; // or let big1 = data[0] to compare to...  
  let big2 = -1; 
  for (let i = 0; i < data.length; i++) {
    if (data[i] > big1) {
      big2 = big1
      big1 = data[i];
    }
    else if (data[i] > big2) {
      big2 = data[i];
    } 
  }
  // the sum of the two biggest # in the array
  return big1 + big2;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
