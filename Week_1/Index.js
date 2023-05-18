// 1. Given a random non-negative number, you have to return the digits of this number within an array in reverse order. E.g 35231 => [1,3,2,5,3], 0 => [0]

function digitize(n) {
  //code here
//   let arr = []
//  let newNum = n.toString().split("");
//  console.log(newNum)
// for(let i = newNum.length-1; i>= 0; i--){
//     arr.push(+newNum[i])
// }
// return arr;
return Array.from(String(n), Number);
}

console.log(digitize(35231));

// 2. It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script. Return the average of the given array rounded down to its nearest integer. The array will never be empty.

function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array
  let sum = 0
  for (item of marks){
    sum+=item
  }
  return Math.floor(sum/marks.length);
}

console.log(getAverage([1, 2, 3, 4, 5]));
console.log(getAverage([2, 2, 2, 2]));

// 3. Given a non-empty array of integers, return the result of multiplying the values together in order. Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {
  return x.reduce((acc, curr) => acc * curr, 1)
}

console.log(grow([4, 1, 1, 1, 4]));

// 4. You are given a string containing a sequence of character sequences separated by commas. Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces. If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below). "1,2,3,4,5"  =>  "2 3 4", "1" =>  NULL

function array(string) {
  // TODO
  let splitedStr = string.split(',');
  let slicedArr = splitedStr.slice(1, splitedStr.length - 1);
  return slicedArr.length === 0 ? null : slicedArr.join(' ');
}

console.log(array('A1,B2'));
console.log(array("A,1,23,456,78,9,Z"));

// 5. Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives. Example: invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]

function invert(array) {
  return array.map(e => e*-1)
}

console.log(invert([1, -2, 3, -4, 5]));

// 6. Take an array and remove every second element from the array. Always keep the first element and start removing with the next element. Example: ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]. None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr) {
  //your code here
  return arr.filter((_,i) => i%2 === 0);
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(removeEveryOther([["Goodbye"], { Great: "Job" }]));

// 7. Complete the square sum function so that it squares each number passed into it and then sums the results together. For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 =9

function squareSum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr**2, 0);
}

console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([]));

// 8. What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array? Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

function addLength(str) {
  //start-here
  return Array.from(str.split(" "), (e) => (`${e} ${e.length}`));
}

console.log(addLength("apple ban"));

// 9. Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed. The geese are any strings in the following array, which is pre-populated in your solution:   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array: ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  // return an array containing all of the strings in the input array except those that match strings in geese
return birds.filter((each) => !geese.includes(each))
};

console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
);

// 10. You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1. As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

function monkeyCount(n) {
  // your code here
  return Array.from({ length: n }, (_, i) => i + 1);
}

// Function to create range of numbers
const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (_, index) => start + index * step
  );

  console.log(arrayRange(1, 10, 1));
  console.log(monkeyCount(10))