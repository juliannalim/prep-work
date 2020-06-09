// time 20 minutes, need to git. 
const checkAir = function (samples, threshold) {
  // count is something to compare to 
  let count = 0;
  // for loop of samples
  for (let i = 0; i < samples.length; i++) {
    // counting the amount of dirty to compare to acceptable amount (THRESHOLD) of dirty air samples
    if (samples[i] === "dirty") {
      count ++;
    }
  }
  // sanity check 
  //console.log(count);
  // if amount of dirty / the total in the string...
  // if it is less than the threshold, it is clean
    if ((count / samples.length) < threshold) {
      return "Clean";
  } else { 
    // or just return polluted 
      return "Polluted";
  }
};


console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))


const checkAir = function (samples, threshold) {

  let count = 0;
  for (let i = 0; i < samples.length; i ++) {
    if (samples[i] === 'dirty') {
      count++;
    }
  }
  if ((count/samples.length) < threshold) {
    return "Clean";
  } else {
    return "Polluted";
  }
};