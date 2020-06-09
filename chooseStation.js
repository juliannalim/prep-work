// capacity of at least 20, must be school or community 
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
const chooseStations = function (stations) {
  // a blank array to add to the list 
  const goodStations = [];
  
  for (const station of stations) {
    // creating variable that looks at element 1 in the array 10, 50, 45
    const capacity = station[1];
    // if it is over 20 (what we're looking for)
    if (capacity >= 20) {
      // create new variable looking at the type of place resturant, school, CC
      const type = station[2];
      // you're adding to a list (.push) in goodStation from the name of place [0]
      if (type === "school" || type === "community centre") {
        goodStations.push(station[0]);
        // ie it will add bright light elementary, run the next line, and add mouse mountian
      }
    }
  }
  return goodStations;
};

console.log(chooseStations(stations));