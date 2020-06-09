// should be returning [-1, 4]
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];
// creating a new variable / function 
const finalPosition = function (moves) {
  // y (north and south) x (east and west)
  // at zero because of blank slate
  let x = 0;
  let y = 0;
  for (let i = 0; i < moves.length; i++) {
    // need console.log so it prints... why is it up here. no idea
    console.log(moves[i]);
    // going through the different options 
    if (moves[i] === "north") {
      y = y + 1;
    }
    if (moves[i] === "south") {
      y = y - 1;
    }
    if (moves[i] === "east") {
      x = x + 1;
    }
    if (moves[i] === "west") {
      x = x - 1;
    }
  }
  // x and y are different so need print both
  console.log(x);
  console.log(y);
  return [x,y];
 };
