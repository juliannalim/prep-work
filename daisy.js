function carPassing(cars, speed) {
 let newCar = new Object({});

  newCar.speed = speed;
  newCar.time = Date.now();
 
  cars.push(newCar);
  
  return cars;
}
const speed = 38

carPassing(cars, speed)
