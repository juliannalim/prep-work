const camelCase = function(input) {
  // spilt up words
  splitInput = input.split(" ");  // splitInput = ["this", "is", "a", "string"]t
  if (splitInput === undefined) { // if there is no spaces don't split
    return input; 
  } 
  let answerString = splitInput[0]; 
  let tempWord = [];
  let completedWord = '';

  for (let i = 1; i < splitInput.length; i++) {  //i = 1 to skip the first word
    tempWord = splitInput[i].split(''); // tempWord = ['t','h','i','s']
    tempWord[0] = tempWord[0].toUpperCase(); // tempWord = ['T','h','i','s']
    completedWord = tempWord.join(""); // completedWord = "This"
    answerString = answerString + completedWord; 
  }
  return answerString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

const camelCase = function(input) {
  splitInput = input.split(' '); // need to make each word into it's own string
  if (splitInput === undefined) { //  if varibale has no spaces
    return input; // return the entire string with no spaces
  //now what do we do if there are spaces. they're all individual strings
  // need to now break down each letter of the word
  }

  let answerString = splitInput[0]; // this is the first word 
  let tempWord = []; // this is a blank array
  let completedWord = '' // this is a blank string
  //let's start with a for loop (because thats all you really know what to do.)
  // for loop of the individual words
  for (let i = 1; i < splitInput.length; i++) { // we don't need to capaltize the first word, so let's start at 1
    // need to make each letter into a string now so we can capitalize the first letter
    tempWord = splitWord[i].split(' '); //tempWord = ['t','h','i','s']
    // now we need to captalize the first letter
    tempWord[0] = tempWord[0].toUpperCase();   //tempWord = ['T','h','i','s']
    // need to put it all back together
    completedWord = tempWord.join(""); // completedWord = "This"
    // need to put all the words back together
    answerString = answerString + completedWord;
  }
  return answerString;
};