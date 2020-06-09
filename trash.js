// trash is a string aka the type of waste.. 
// bins increases depending on what is logged. 
function smartGarbage (trash, bins) {
  if (trash === 'waste') {  
    // bins = number [trash] = waste, it will be the current number + 1
    // increases if it = waste and then add to current amount 
    bins[trash] = bins[trash] + 1;
  }
  else if (trash === 'recycling') {
    bins[trash] = bins[trash] + 1;
  }
  else if (trash === 'compost') {
    bins[trash] = bins[trash] + 1;
  }
  //  bins[trash]++; (short cut way to do this and replaces lines 2-10)
  return bins;
};
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));