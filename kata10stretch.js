// 20 mins, git hub
const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // put a black slate with strings
  let search1 = '';
  let search2 = '';
  for (let i = 0; i < recipes.length; i++) {
    // accessing the first ingredient of the reciepe
    // search 1 is representing the first ingredient
    search1 = recipes[i].ingredients[0];
    // going through bakery A list 
    for (let j = 0; j < bakeryA.length; j++) {
      if (search1 === bakeryA[j]) {
        // we found the ingredient in Bakery A 
        // second seawrch for the second ingredient
        search2 = recipes[i].ingredients[1];
        // the third for loop
        for (let k = 0; k < bakeryB.length; k++) {
          if (search2 === bakeryB[k]) {
            // we found the second ingredient in Bakery B
            return recipes[i].name; // return the recipe 
          }
        }
      }
    }
    // we finished searching for ingredient one in Bakery A
    // now we need to find ingredient one in Bakery B 
    // essentially, the first ingredient could be in bakery B, not in A
    // if we don't provide this other possiblity, one of the recipes will not be returned 
    for (let j = 0; j < bakeryB.length; j++) {
      // also we don't need to state search one again because we're under search one in line 9
      // brackets are important 
      if (search1 === bakeryB[j]) {
        // we found the ingredient in Bakery B 
        search2 = recipes[i].ingredients[1];
        for (let k = 0; k < bakeryA.length; k++) {
          if (search2 === bakeryA[k]) {
            // we found the second ingredient in Bakery A
            return recipes[i].name;
          }
        }
      }
    }
  } 
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));