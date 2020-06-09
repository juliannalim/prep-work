// 20 mins, (first compile) git it // counting the numbers of vowels in the string
const numberOfVowels = function (data){
  let vowelsCount = 0;
  for (let i = 0; i < data.length; i++) {
    // "or" so its one of the vowels as it goes through the string 
    // .charAt to allow the for loop to run through the string 
    if (data.charAt(i) == "e" || data.charAt(i) == "a" || data.charAt(i) == "i" || data.charAt(i) == "o" || data.charAt(i) == "u") {
     // console.log(i);
     // currentNumber = currentNumber + 1 (adding + 1 each time)
     vowelsCount = vowelsCount + 1; 
    }
  }
  return vowelsCount;
}
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

const numberOfVowels = function(data) {
  let vowelsCount = 0;
  for (let i = 0; i < data.length; i++){
    if (data.charAt(i) == 'e' || data.charAt(i) == 'a' || data.charAt(i) == 'i' || data.charAt(i) == 'o' || data.charAt(i) == 'u') {
      vowelsCount = vowelsCount + 1;
    }
  }
  return vowelsCount;
};