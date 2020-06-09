const PI = 3.14159 ;

const sphereVolume = function (radius) {
  // adding the formula to calculate the volume
 return (4/3) * Math.PI * Math.pow(radius, 3);
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return (1/3) * Math.PI * Math.pow(radius, 2) * height;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return height * width * depth;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  // sum as a black slate for the new integer which is the volume
  // sum because we're going to add all the volumes together
  let sum = 0;
  for (let i = 0; i < solids.length; i++) {
    // if type === "-----"
    if (solids[i].type === 'sphere') {
      // add the sum to the current sum with the sphereVolume
      // accessing radius amount and putting it in the sphereVolume equation above
      sum = sum + sphereVolume(solids[i].radius);
    }
    else if (solids[i].type === 'cone') {
     sum = sum + coneVolume(solids[i].radius, solids[i].height);
    }
    else if (solids[i].type === 'prism') {
      sum = sum + prismVolume(solids[i].height, solids[i].width, solids[i].depth);
    }
  }
  // don't need to make an equation because we're already store the value as it goes 
  return sum;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]
/*
const duck2 = [
  largeSphere,
  smallSphere,
  largeSphere
]
*/
// console.log(totalVolume(duck2));
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);