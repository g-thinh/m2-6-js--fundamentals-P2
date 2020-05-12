// Exercise 3
// -------------------
// In the very first exercise, you logged a top-10 list of foods:

let mostPopularFood = [
  'bean burritos',
  'poke bowl',
  'chicken sliders',
  'pork baby back ribs',
  'chicken burritos',
  'chicken sandwich',
  'cauliflower rice bowl',
  'chicken and waffle sliders',
  'parmesan chicken',
  'buffalo-flavored cauliflower',
];

// Let's log them again, but this time with a proper "count-down". We should
// Start at #10, and go down to #1.
// There should be a **1 second delay** between each console.log. It should
// take 10 seconds to count from the 10th-best food to the 1st.
//
// After all the foods have been logged, the program should end.
//
// HINT: You'll need to use `setInterval` and `clearInterval`.

// let countdown = setInterval(function rankFoods() {
//   let newList = mostPopularFood.reverse();
//   console.log(newList);
//     for(let i=0; i < newList.length;i++){
//       // console.log(newList.length - i);
//       console.log(`Rank ${newList.length - i} is ${newList[i]}`);
//     }
//   //clear the timeout
//   clearInterval(countdown);
// },1000)

let newList = mostPopularFood.reverse();
//console.log(newList);

let countdown = setInterval(function rankFoods() {
  let a = 0;
  let count = newList.length;
  console.log(`Rank ${10-a} is ${newList[a]}`);
  // newList.pop();
  a = a +1;
  // console.log(a);

  //clear the timeout
  if(a == 10){
    clearInterval(countdown);
  }
  
},1000)