// need to git, 100 minutes 
//  In this exercise, we will be given a list of instructors and have to determine which instructor has the longest name.
const instructorWithLongestName = function(instructors) {
  // instructor with the longest name 
  let winner = '';
  // the critrea for having the longest name look at line 10
  let lengthName = '';
  // go through all the instructors
  for (let i = 0; i < instructors.length; i++) {
    // going into name parameter, .length checks how long the string is
    // comparing to lengthName = -1 
    if (instructors[i].name.length > lengthName) {
       // if name is greater than lengthName
      // we are saving the now longest name as a number (meaning the length of the name)
      lengthName = instructors[i].name.length;
      // winner  has the longest name parameter 
      // keeping whole of the winning object that contains currently the longest name
      winner = instructors[i];
    }
  } 
  return winner;
}; 

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

// it's only printing samuel right now. so it "works", it's just not running through the entire consolelong 


// should return {name: "Jeremiah", course: "Web"}
// {name: "Domascus", course: "Web"}