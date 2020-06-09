// 30 minutes, need to git 
const calculateChange = function(total, cash) {
  let change = cash - total;
  // creating a new empty object 
  let answer = {}; 
  // use IF statemnt, to ensure each one of these if statements run
  // if ELSE IF is used, it will only first correct result and jump to the end of the if statment  
  if (change >= 2000) {
    // creating a new data field called twentyDollars in the object called answer
    // initial is zero adding to it later in the while loop 
    // the while loop will run at least once, condition was checked (pass) in the if statment above 
    answer.twentyDollar = 0; 
    // keep repeating WHILE the inside code while this true
    while (change >= 2000) {
      change = change - 2000;
      answer.twentyDollar++;
    }
  }
  if (change >= 1000) {
    answer.tenDollar = 0; 
    while (change >= 1000) {
      change = change - 1000;
      answer.tenDollar++;
    }
  } 
  if (change >= 500) {
    answer.fiveDollar = 0; 
    while (change >= 500) {
      change = change - 500;
      answer.fiveDollar++;
    }
  } 
  if (change >= 200) {
    answer.twoDollar = 0; 
    while (change >= 200) {
      change = change - 200;
      answer.twoDollar++;
    }
  } 
  if (change >= 100) {
    answer.oneDollar = 0; 
    while (change >= 100) {
      change = change - 100;
      answer.oneDollar++;
    }
  } 
  if (change >= 25) {
    answer.quarter = 0; 
    while (change >= 25) {
      change = change - 25;
      answer.quarter++;
    }
  } 
  if (change >= 10) {
    answer.dime = 0; 
    while (change >= 10) {
      change = change - 10;
      answer.dime++;
    }
  }
  if (change >= 5) {
    answer.nickel = 0; 
    while (change >= 5) {
      change = change - 5;
      answer = nickel++;
    }
  }
  // pennies are 1, so as long as change is smaller than all the other options and greater than 0
  // answer for pennies will = change amount 
  if (change > 0) {
    answer.penny = change; 
  } 
  return answer;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));