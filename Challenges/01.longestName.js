// /* BRONZE
// Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
// */

// var myName ='Tom Stout';
// var yourName ='Leslie Stout';
// console.log(myName.length);
// console.log(yourName.length);


// // /* SILVER
// // Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
// // Example Result: My name is longer than Adam's.
// // */


// function longest_string(str_ara) {
//     var max = str_ara[0].length;
//     str_ara.map(v => max = Math.max(max, v.length));
//     result = str_ara.filter(v => v.length == max);
//     return result;
//   }
  
//   console.log('The longest name is:')
//   console.log(longest_string(['Tom Stout', 'Leslie Stout']))

  //   /* GOLD
// In the console log include how many letters difference there are between the names.
// Example Result: Adam's name is shorter than mine by 4 letters.
// There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
// */

let myName = 'Tom Stout';
let yourName = 'Elizabeth]-+ Stout';

let x = myName.length
let y = yourName.length

console.log('x:', x);
console.log('y:', y);

let c = x - y
let q = y - x

if(x > y) {
    console.log(`${myName} is longer by ${c}`);
} else if (y > x) {
    console.log(`${yourName} is longer by ${q}.`);
} else {
    console.log('the names are the same length')
}