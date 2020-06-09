const multiplicationTable = function(maxValue) {
  a = " "; // blank statement 
  // running through the nested array x and y
  for (let i = 1; i <= maxValue; i++) { // starting at one b/c cannot multiply by zero
    for (let j = 1; j <= maxValue; j++) { // include maxvalue because we want maxvalue to multiple itself
      a = a + (i * j); // 1x1, 2x2 up until the maxValue amount
      a = a + ' '; // add a space so it looks pretty 
    }
    a = a + "\n"; // putting in the next row
  }
  return a;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));


