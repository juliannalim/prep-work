// 20 mins, need to git
const organizeInstructors = function(instructors) {
  let answer = {};
  for (i = 0; i < instructors.length; i++) {
    //console.log(instructors[i].course);
    //console.log(answer[instructors[i].course]);
    // if course doesn't exist in answer yet, add it and put person's name in
    if (answer[instructors[i].course] === undefined) {
      // need square brackets around instructors[i].name b/c it needs to be an array
      // aka array = array not a string 
      answer[instructors[i].course] = [instructors[i].name];
    }
    // if course already exist then add person's name to the list
    // else, code assumes the answers[instructors[i].course] is an array and adding to an array
    else { 
      // so adding .push (adding to the end of the array (the list)) of answer
      // answer which is the course in this case 
      // iOS: [instructor], [adding another instructor]
      answer[instructors[i].course].push(instructors[i].name); 
    }
  }
  return answer;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));


const organizeInstructors = function(instructors) {
  // a blank slate to put the new output 
  let answer = {};
  // running through the for loop of instructors 
  for (let i = 0; i < instructors.length; i ++) {
    // going into courses... need to make a list with the arrays
    // AKA we're creating a new list with the course if doesn't exist 
    if (answers[instructors[i].course] === undefined) {
      // if course doesn't exist, make one and add person's name
      answers[instructors[i].course] = instructors[i].name;
    }
    else {
      // add the person's name at the end of the list if course exists already
      answer[instructors[i].course].push(instructors[i].name);
    }
  }
  return answer
};
