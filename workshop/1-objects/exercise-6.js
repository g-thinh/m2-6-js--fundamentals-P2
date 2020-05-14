/**
 * One of the most common tasks as a software developer is to "transform" data
 * from one form to another.
 *
 * In this exercise, you're asked to transform data from the given shape to
 * a new shape.
 */

let inputData = {
  name: 'Will Byers',
  age: 9,
  status: 'upside down',
  superpower1: 'can-blink-lights',
  superpower2: null,
  address1: '123 Whatever street',
  addressCity: 'Hawkins',
  addressState: 'Indiana',
  addressCountry: 'United States',
  motherName: 'Joyce Byers',
  motherAge: 35,
  motherStatus: 'worried',
  motherSuperpower1: null,
  motherSuperpower2: null,
  bestFriendName: 'Mike Wheeler',
  bestFriendAge: 9,
  bestFriendStatus: 'frenetic',
  bestFriendSuperpower1: null,
  bestFriendSuperpower2: null,
  girlfriendName: 'Eleven',
  girlfriendAge: 9,
  girlfriendStatus: 'angry',
  girlfriendSuperpower1: 'telepathy',
  girlfriendSuperpower2: 'multiverse portal sealing',
};

/*

We want a function that can transform it from that shape to this shape:

{
  "name": "Will Byers",
  "age": 9,
  "status": "upside down",
  "address": {
    "streetAddress": "123 Whatever street",
    "city": "Hawkins",
    "state": "Indiana",
    "country": "United States"
  },
  "superpowers": [
    "can-blink-lights"
  ],
  "relationships": [
    {
      "type": "mother",
      "name": "Joyce Byers",
      "age": 35,
      "status": "worried",
      "superpowers": []
    },
    {
      "type": "girlfriend",
      "name": "Eleven",
      "age": 9,
      "status": "angry",
      "superpowers": [
        "telepathy",
        "multiverse portal sealing"
      ]
    }
  ]
}

Specifically:

- Address becomes nested in an object
- Instead of `superpower1` and `superpower2`, an array is used
- Instead of having a "flat" structure for relationships, a new `relationships`
  array is added, which holds objects for each relationship.
- Each relationship has a `type`, like mother/best-friend/girlfriend
- Each relationship also has an array of super powers, same logic as the main
  `superpowers` array

NOTE: For superpowers, you should only have as many items as are available.
For example, the main superpowers array should be:
✅ ['can-blink-lights']
⛔️ ['can-blink-lights', null]
*/

function transformData(data) {
  let newData = {
    name: data.name,
    age: data.age,
    status: data.status,
    address: {
      streetAddress: data.address,
      city: data.addressCity,
      state: data.addressState,
      country: data.addressCountry,
    },
  }

  //create an array of powers
  // let powers = [data.superpower1, data.superpower2];
  
  //filter the array for undefined
  //let newPowers = powers.filter(power => typeof(power) == 'string');
  // console.log(newPowers);

  //add the new superpowers array to the data
  // newData.superpowers = newPowers;
  newData.superpowers = filterPowers(data.superpower1, data.superpower2);

  momPowers = data.motherSuperpower1;
  console.log(filterPowers(momPowers));
  let mother = {
    type: 'mother',
    name: data.motherName,
    age: data.motherAge,
    status: data.motherStatus,
    superpowers: filterPowers(data.motherSuperpower1,data.motherSuperpower2),
  }
  let bestfriend = {
    type: 'best friend',
    name: data.bestFriendName,
    age: data.bestFriendAge,
    status: data.bestFriendStatus,
    superpowers: filterPowers(data.bestFriendSuperpower1,data.bestFriendSuperpower2),
  }
  let girlfriend = {
    type: 'girlfriend',
    name: data.girlfriendName,
    age: data.girlfriendAge,
    status: data.girlfriendStatus,
    superpowers: filterPowers(data.girlfriendSuperpower1,data.girlfriendSuperpower2),
  }

  newData.relationships = [mother,bestfriend,girlfriend];
  // return newData.superpowers;
  return newData;
}


function filterPowers(power1,power2) {
  //let newPowers = powers.filter(power => typeof(power) == 'string');
  //because the powers are always in an array, we can use this
  let newPowers = [];

  //cant use this because array is null
  // powers.forEach(power => {
  //   if(power) {
  //     newPowers.push(power);
  //   }
  // })

  if(typeof(power1) == 'string') { 
    newPowers.push(power1);
  }
  if(typeof(power2) == 'string') { 
    newPowers.push(power2);
  }

  return newPowers
}

/*
  `JSON.stringify` is used to "pretty-print" the output, so that it's easy
  to see what it looks like, and debug any problems.
*/
console.log(JSON.stringify(transformData(inputData), null, 2));
