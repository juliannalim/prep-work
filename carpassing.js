// This function should create a new object with a property called
// speed, and another property called time and add it to the cars array. 
function carPassing (cars, speed) {
  // blank object 
  var newCar = new Object({});
  // the newCard speed = speed that is given
  newCar.speed = speed;
  newCar.time = Date.now();
// add newCar to the list (cars) 
  cars.push(newCar);
  
  return cars;
};