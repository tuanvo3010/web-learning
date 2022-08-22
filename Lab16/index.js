// Xử lí số
// 1.
function volumeOfSphere(r) {
  return ((4 / 3) * Math.PI * (r * r * r)).toFixed(2);
}
console.log(volumeOfSphere(5));

// 2.
function sumSeries(min, max) {
  let n = max - min - 1; // Số lượng số nằm giữa min và max
  let sum = (n * (min + max)) / 2; // công thức https://en.wikipedia.org/wiki/Arithmetic_progression#Sum
  return sum;
}
console.log(sumSeries(4, 9));

// 3.
function sumDivisors(n) {
  let sum = 0;
  for (i = 1; i <= n; i++) {
    if (!(n % i)) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumDivisors(6));

// 4.
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  // kiểm tra từ 2 đến n-1
  for (i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
    return true;
  }
}
console.log(isPrime(9));

// 5.
// function sumOfAllPrime(number) {
//   let sum = 0;
//   for (i = 2; i <= number; i++) {
//     if (isPrime(i)) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(sumOfAllPrime(45));

// Xử lí chuỗi
// 1.
function titleCase(str) {
  let splitStr = str.toLowerCase().split(" ");
  for (i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}
console.log(titleCase("ALOOOOOO làm vÁN gamE"));

// 2.
function spinalCase(str) {
  let words = [];
  words = str.toLowerCase().split(",");
  let result = "";
  for (i = 0; i < words.length; i++) {
    result += words[i].split(" ").join("-");
  }
  return result;
}
console.log(spinalCase("viết liền lại xem nào"));

// 3.
// function wrapword(str) {
//     let words = [];
//     words = str.toLowerCase().split(",");
//     let result = "";
//     for (i = 0; i < words.length; i++) {
//       result += words[i].split(" ").join("");
//     }
//     return result;
// }
function checkSymmetry(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(checkSymmetry("abba"));
console.log(checkSymmetry("racecar"));

// 4.
// function includes(str, substring) {
//   let splitStr = [];
//   splitStr = str.split("");
//   let splitSubString = [];
//   splitSubString = substring.split("");
//   for (i = 0; i < splitStr.length; i++) {
//     if (splitStr.includes(splitSubString)) return true;
//   } return false
// }
// console.log(includes("Hello World", "wor"));

// Xử lí mảng
// 1.
let arr = [1, "test", undefined, null, 5, false, "đúng", 3, "", NaN];
function checkFalsy(arr) {
  return arr.filter(Boolean);
}
console.log(checkFalsy(arr));

// 2.
let arr1 = ["aba", "aa", "ad", "c", "vcd"];
function checkLongest(arr) {
  let length = 0;
  let longest;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > length) {
      length = arr[i].length;
      longest = arr[i];
    }
  }
  return longest;
}
console.log(checkLongest(arr1));

// 3.
function theOnly(arr1, arr2) {
  const result = [];
  for (let number of arr1) {
    if (!arr2.includes(number)) {
      result.push(number);
    }
  }
  for (let number of arr2) {
    if (!arr1.includes(number)) {
      result.push(number);
    }
  }
  return result;
}
console.log(theOnly([1, 2, 3], [1, 3, 4, 5, 5]));

// 4.

// Xử lí object
// 1.
let student = [
  { Name: "Ba", Age: 28 },
  { Name: "Đăng", Age: 20 },
  { Name: "Tuấn", Age: 23 },
  { Name: "Phi", Age: 21 },
];
function averageAge(arr) {
  let sumOfAge = 0;
  arr.forEach((element) => {
    sumOfAge += element.Age;
  });
  return sumOfAge / student.length;
}
console.log(averageAge(student));

// 2.
    student.sort(function (student1, student2) {
        return student2.Age - student1.Age;
})
console.log(student);