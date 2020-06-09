// kata2 first compile, 20 mins, need to github

const conditionalSum = function(values, condition){
  // even = ""%2 == 0;
  // odd = "" %2 == 1;
  /*
  let sum = 0;
  for (let i = 0; i < values.length; i++){
    if (condition == "even" && (values[i] % 2 == 0)) {
      // the number is even
      sum = values[i] + sum; 
    }
    else if (condition == "odd" && (values[i] % 2 == 1)) {
      // the number is odd
      sum = values[i] + sum;
    }
  } 
  */
  let sum = 0;
  var remainder; 
  if (condition == "even") { 
    remainder = 0;
  } 
  else { 
    remainder = 1; 
  }
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 == remainder) {
      // ie 3/2 remainder 1 --  3 + sum 
      // using value[i] because you want to keep track of the number and add it together 
      sum += values[i];
    }
  }  
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

