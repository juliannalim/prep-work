const repeatNumbers = function(data){
	let resultingString = '';

	for (let i = 0; i < data.length; i++) {
		thingToRepeat = data[i][0];  // the thing we need to repeat
		repeatCount = data[i][1]; 	// how many times to repeat
		
		// this for loop 'prints' the numbers
		for (let j = 0; j < repeatCount; j++) { // repeat the following code "repeatCount" times
			resultingString = resultingString + thingToRepeat;
		}

		//adding the comma and period after every set of number, except the last set
		if (i != data.length - 1) {
			resultingString = resultingString + ", ";
		}
	}
	return resultingString;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
