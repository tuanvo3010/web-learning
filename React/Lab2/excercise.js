// 1. Viết 1 function đảo ngược một số.

function reverse(number) {
  let n = number.toString().split("").reverse().join("");
  return n;
}
console.log(reverse(123));

// 2. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.

let country = ["USA", "Norway", "Vietnam", "Argentina", "Laos"];
function longestCountryName(arr) {
  let longest = arr.reduce(function (a, b) {
    return a.length > b.length ? a : b;
  });
  console.log(longest);
}
longestCountryName(country);

// 3

// 4.  There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]
let array1 = [1, 0, 2, 3, 4];
let array2 = [3, 5, 6, 7, 8, 13];
let arr3 = [];
function computeSumArray(array1, array2) {
    for (i = 0; i < Math.max(array1.length, array2.length); i++) {
        arr3.push((array1[i] || 0) + (array2[i] || 0));
    }
    console.log(arr3);
  }
computeSumArray(array1, array2);

// 6. Write a JavaScript program to count number of words in string
function countWord(string) {
  let count = 0;
  let str = string.replace(/\s+/g, " ");
  console.log(str);
  for (i = 0; i < str.length; i++){
    if (str.charAt(i) == " ") {
      count++
    }
  }
  console.log(count);
}
countWord("hello    world   alo alo   toi nay di  nhau")