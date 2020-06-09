



a = [
  {name:2}, // 0 
  {name:7}, // 1
  {name:12}, // 2
  {name:1}  // 3
];

// name's value 2,7,12,1
let winningNameValue = -1;
// is the index of the array 0,1,2,3
let winningIndex = -1;
for (let i=0; i < a.length; i++) {
  if (a[i].name > winningNameValue) {
    winningNameValue = a[i].name;
    winningIndex = i;
  }
}
console.log (a[winningIndex]);
