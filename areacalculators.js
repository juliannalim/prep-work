function calculateRectangleArea(length, width) {
  // If any of the parameters are negative, the function should return undefined.
  if (length < 0) {
    return undefined;
  } 
  if (width < 0) {
    return undefined;
  }
  rectangle = length * width; 
  return rectangle;
}
function calculateTriangleArea(base, height) {
  if (base < 0) {
    return undefined;
  }
  if (height <0) {
    return undefined;
  }
  triangle = base * (height / 2);
  return triangle;
}
function calculateCircleArea(radius) {
  if (radius < 0) {
    return undefined;
  }
  circle = Math.PI * (Math.pow(radius,2));
  return circle;
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));

/*let vacationDays = 2 + 3;

if (vacationDays <= 5) {
  console.log("Not enough for a long vacation.");
} else if (vacationDays === 5) {
  console.log("We can take a whole week off, not bad.");
} else {
  console.log("We're gonna have a great time!");
}
*/