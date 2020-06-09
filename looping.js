function range (start, end, step) {
  if (start === undefined || end === undefined || step === undefined) {
    return [];
  } 
  if (start > end) {
    return [];
  } 
  if (step <=0){
    return [];
  }
  // new variable for the output 
  let someValue = [];
  // you can use the parameters here in the for loop
  for (let i = start; i <= end; i = i + step) {
    someValue.push(i);
  } 
  return someValue;
}
console.log(range(0, 10, 2));

/**function array(x,y,z);

we need a function start, end, steps? 
based on input it should out the a row of numbers

fuction numbers(start, end, step)
(0,20,5)

let range = function ()
**/