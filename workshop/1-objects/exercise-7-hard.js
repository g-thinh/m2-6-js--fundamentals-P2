// Exercise 6
// -------------------

// Below are two objects of the same "format".
// Each object is a mapping between individual people and their favourite
// desserts
//
// Notice that there are duplicates (eg. both Riley and John like "ice-cream").

const favoriteDessertsGroupA = {
  scott: 'brownies',
  fred: 'tiramisu',
  lisa: 'chocolate cake',
  riley: 'ice-cream',
  sunny: 'cheese cake',
  john: 'ice-cream',
  beth: 'cheese cake',
  summer: 'ice-cream',
  morty: 'apple pie',
  rick: 'brownies',
  andrew: 'cheese cake',
  jerry: 'rhubard pie',
  'jean-luc': 'cheese cake',
  tiffany: 'waffles',
  melissa: 'profiteroles',
};

const favouriteDessertsGroupB = {
  alice: 'pie',
  betty: 'deep-fried mars bar',
  colin: 'gummy bears',
  damien: 'child tears',
  ellicia: 'panda express',
  fertrude: 'gummy bears',
  glinda: 'pie',
  hethel: 'not applicable',
  irsula: 'rum cake',
  judas: 'revenge (served cold)',
  khloe: 'pie',
  lyndon: 'easter eggs',
  minda: 'dessert',
}

// Exercise A
// Write a function which takes one of these objects and puts them into an
// array which is sorted from most popular to least popular. For example,
// in Group B, the most popular dessert is "pie", so it should be first
// in the array.
//
// For "ties", the order doesn't matter.
//
// HINT: You'll need to do this in 2 steps:
// - First, count how often each dessert appears
// - Second, put them in order

function sortDessertsByPopularity(dessertObject) {
  let foodArray = Object.values(favouriteDessertsGroupB);

  let count = {};

  //for each desert, if there is a duplicate, count it and add 1
  //add 1 by default because there should be at least one occurence of that item
  foodArray.forEach(dessert => {
    count[dessert] = (count[dessert] || 0) + 1;
  })

  
  console.log(count);
  // count returns
  // {
  //   pie: 3,
  //   'deep-fried mars bar': 1,
  //   'gummy bears': 2,
  //   'child tears': 1,
  //   'panda express': 1,
  //   'not applicable': 1,
  //   'rum cake': 1,
  //   'revenge (served cold)': 1,
  //   'easter eggs': 1,
  //   dessert: 1
  // }

  //now sort the new count object by keys
  return Object.keys(count).sort((a,b) => {
    let countA = count[a];
    let countB = count[b];
    // (countA < countB) ? 1 : -1;
    if(countA < countB) {
      return 1;
    } else {
      return -1;
    }
  })
  // console.log(dessertRanked);
  // return dessertRanked;

  //THIS STUFF DIDNT WORK
  
  //now from the above count, we will create an array that has each element take
  //the format [(dessert, count)];

  // let dessertArray =[];
  // console.log(Object.keys(count));

  // Object.keys(count).forEach(key => {
  //   dessertArray.push([key, count[key]]);
  // })

  // console.log(dessertArray);
  // console.log(count);


  
  // return count;
}
// sortDessertsByPopularity(favouriteDessertsGroupB);

console.log(
  'Popular desserts in Group B:',
  sortDessertsByPopularity(favouriteDessertsGroupB)
);


/*
Exercise B
Create a new object with the following form:

{
  'name of dessert': ['name1', 'name2']
}

To be clear:
- The keys of this object should be the desserts
- The values should be arrays of the names of the people who prefer this
  dessert.

Expected output for Group B:

{
  'pie': [ 'alice', 'glinda', 'khloe' ],
  'deep-fried mars bar': [ 'betty' ],
  'gummy bears': [ 'colin', 'fertrude' ],
  'child tears': [ 'damien' ],
  'panda express': [ 'ellicia' ],
  'not applicable': [ 'hethel' ],
  'rum cake': [ 'irsula' ],
  'revenge (served cold)': [ 'judas' ],
  'easter eggs': [ 'lyndon' ],
  'dessert': [ 'minda' ]
}

(The order doesn't matter for objects. Your desserts might be in a different
order, and that's 100% OK).
*/

function groupPeopleByDessert(dessertObject) {
let result = {};

Object.values(dessertObject).forEach(dessert => {
  //new object, every value is a dessert, with an empty array
  result[dessert] = [];
})

console.log(result);

//now to fill in the people who like the dessert in the empty key arrays
//Object.entries() returns key value pairs
Object.entries(dessertObject).forEach(entry => {
  //put name and dessert together in an array
  let [name,dessert] = entry;

  //now we can reference each dessert in the result object and insert a name
  result[dessert].push(name);
}) 

return result;

}

console.log(
  'People grouped by dessert:',
  groupPeopleByDessert(favouriteDessertsGroupB)
);
