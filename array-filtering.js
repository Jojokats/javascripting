var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filtered = numbers.filter(function evenNumbers (number) {
  return number % 2 === 0;
});

console.log(filtered);

// [2, 4, 6, 8, 10]


// var ages = [32, 33, 16, 40];
//
// function checkAdult(age) {
//     return age >= 18;
// }
//
// function myFunction() {
//     return ages.filter(checkAdult);
// }
//
// myFunction();
// (3) [32, 33, 40]
