// 40 mins, need to git 
// first complile 
const talkingCalendar = function(date) {
  let month = '';
  let splitData = date.split("/"); // ["2017" "12" "02"]
  if      (splitData[1] === "01") { month = "January";    }
  else if (splitData[1] === "02") { month = "February";   }
  else if (splitData[1] === "03") { month = "March";      }
  else if (splitData[1] === "04") { month = "April";      }
  else if (splitData[1] === "05") { month = "May";        }
  else if (splitData[1] === "06") { month = "June";       }
  else if (splitData[1] === "07") { month = "July";       }
  else if (splitData[1] === "08") { month = "August";     }
  else if (splitData[1] === "09") { month = "September";  }
  else if (splitData[1] === "10") { month = "October";    }
  else if (splitData[1] === "11") { month = "November";   }
  else if (splitData[1] === "12") { month = "December";   }
  // days 1st, 2nd, 3rd else -th, if it is between 10-20 end in -th
  // need to split the numbers 20th section etc.
  let day = splitData[2].split('');
  if (day[0] === '1') { // "21" --> ["2" "1"] 
    numberOfMonth = splitData[2] + "th";
  }
  else if (day[1] === '1') {
    // take splitData and deal with the 0 if there is a 0
    // turning into an integer will get ride of all leading zeros 
    // then change it back to a string
    numberOfMonth = parseInt(splitData[2]).toString() + "st";
  }
  else if (day[1] === '2') {
    numberOfMonth = parseInt(splitData[2]).toString() + "nd"; 
  }
  else if (day[1] === '3') {
    numberOfMonth = parseInt(splitData[2]).toString() + "rd";
  } else {
    numberOfMonth = parseInt(splitData[2]).toString() + "th";
  }
  return month + " " + numberOfMonth + ", " + splitData[0];
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

