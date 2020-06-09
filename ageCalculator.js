function ageCalculator(name, yearOfBirth, currentYear) {
  // create a new var age which is the difference between current year and year of birth
  var age = currentYear - yearOfBirth;
  return (name + " is " + age + " years old.");
}
ageCalculator("Suzie", 1983, 2015);

