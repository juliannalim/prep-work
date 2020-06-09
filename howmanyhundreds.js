function howManyHundreds(bottles) {
  // you want to find the whole number and remove the reaminder
  // get the remainder amount of the bottles
  var remainderOfBottles = bottles % 100;
  //once you have a remander remove it from the bottle amount
  // create a new varible for this new amount
  var wholeHundreds = bottles - remainderOfBottles; 
  // output is bottles - remainder of bottles 
  // divide by 100 because its per 100 bottles 
  // woot math
  var output = wholeHundreds / 100; 
  return(output) 
}



console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);