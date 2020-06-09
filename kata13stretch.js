// 60 mins need to git 
const toCamel = function (input) {
  let answerString = '';
  let tempWord = [];
  let completedWord = '';
   // input = "this is a string"
  splitInput = input.split(" "); // splitInput = ["this", "is", "a", "string"]
  answerString = splitInput[0]; 
  
  for (let i = 1; i < splitInput.length; i++) {  //i = 1 to skip the first word
    tempWord = splitInput[i].split(''); // tempWord = ['t','h','i','s']
    tempWord[0] = tempWord[0].toUpperCase(); // tempWord = ['T','h','i','s']
    completedWord = tempWord.join(""); // completedWord = "This"
    answerString = answerString + completedWord; 
  } 
  return answerString;
};
const toPascal = function (input){
  let answerString = '';
  let tempWord = [];
  let completedWord = '';
   // input = "this is a string"
  splitInput = input.split(" "); // splitInput = ["this", "is", "a", "string"]
  answerString = splitInput[0]; 
  
  for (let i = 0; i < splitInput.length; i++) { 
    tempWord = splitInput[i].split(''); // tempWord = ['t','h','i','s']
    tempWord[0] = tempWord[0].toUpperCase(); // tempWord = ['T','h','i','s']
    completedWord = tempWord.join(""); // completedWord = "This"
    answerString = answerString + completedWord; 
  }
  return answerString;
};
const toSnake = function (input) {
  return input.split(" ").join("_"); // this_is_a_string
    // str.split(search).join(replacement)  
};
const toKebab = function(input) {
  return input.split(" ").join("-"); // this-is-a-string
    // str.split(search).join(replacement)
}; 
const toTitle = function(input) {
  let answerString = '';

  for (let i = 0; i < splitInput.length; i++) {  
    tempWord = splitInput[i].split(''); // tempWord = ['t','h','i','s']
    tempWord[0] = tempWord[0].toUpperCase(); // tempWord = ['T','h','i','s']
    completedWord = tempWord.join(""); // completedWord = "This"
    answerString = answerString + completedWord; 
    if (i != splitInput.length - 1) {
     answerString = answerString + " ";
    }
  }
  return answerString;
};
const toVowel = function (input) {
  let answerString = '';

  answerString = input.split("a").join("A"); // this is A string
  answerString = answerString.split("e").join("E"); // replace input with answer string, to udpate from previous line (keep the changes) this is A string
  answerString = answerString.split("i").join("I");
  answerString = answerString.split("o").join("O");
  answerString = answerString.split("u").join("U"); 
  return answerString;
};
const toConsonant = function (input) {
  let answerString = '';

  answerString = input.toUpperCase();
  answerString = answerString.split("A").join("a"); // this is A string
  answerString = answerString.split("E").join("e"); // replace input with answer string, to udpate from previous line (keep the changes) this is A string
  answerString = answerString.split("I").join("i");
  answerString = answerString.split("O").join("o");
  answerString = answerString.split("U").join("u"); 
  return answerString;  
};
const toUpper = function (input) {
  return input.toUpperCase();
};
const toLower = function (input) {
  return input.toLowerCase();
};
const makeCase = function(input, cases) {
  let answerString = '';
  if (cases === 'camel') {
    answerString = toCamel(input);
  }
  else if (cases === 'pascal') {
    answerString = toPascal(input);
  }
  else if (cases === 'snake') {
    answerString = toSnake(input);
  }
  else if (cases === 'kebab') {
    answerString = toKebab(input);
  }
  else if (cases === 'title') {
    answerString = toTitle(input);
  }
  else if (cases === 'vowel') {
    answerString = toVowel(input);
  }
  else if (cases === 'consonant') {
    answerString = toConsonant(input);
  } 
  else if (cases === 'upper') {
    answerString = toUpper(input);
  } 
  else if (cases === 'lower') {
    answerstring = toLower(input);
  }
  else { // when cases is an array, which means multiple effects (AKA NOT JUST A STRING) 
    // stores temp. "this is a string" 
    // to apply mutliple effects to it 
    answerString = input; 
    for (let i = 0; i < cases.length; i++) {
      if (cases[i] === 'camel') {
        answerString = toCamel(anwerString);
      }
      else if (cases[i] === 'pascal') {
        answerString = toPascal(answerString);
      }
      else if (cases[i] === 'snake') {
        answerString = toSnake(answerString);
      }
      else if (cases[i] === 'kebab') {
        answerString = toKebab(answerString);
      }
      else if (cases[i] === 'title') {
        answerString = toTitle(answerString);
      }
      else if (cases[i] === 'vowel') {
        answerString = toVowel(answerString);
      }
      else if (cases[i] === 'consonant') {
        answerString = toConsonant(answerString);
      } 
      else if (cases[i] === 'upper') {
        answerString = toUpper(answerString);
      } 
      else if (cases === 'lower') {
        answerstring = toLower(answerString);
      }
    }
  }
  return answerString;
};


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["title", "vowel", "snake"]));