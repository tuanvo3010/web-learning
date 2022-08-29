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

function contains(str, char) {
  const originalChars = str.toLowerCase().split("");
  const subChars = char.toLowerCase();
  let flag = true;
  for (const char of subChars) {
    const index = originalChars.indexOf(char);
    if (index === -1) {
      // không chứa
      flag = false;
      break;
    } else {
      originalChars.splice(index, 1);
    }
  }
  return flag;
}
console.log(contains("Hello world", "llo"));
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
function ziczac(row, col) {
  const matrix = [];
  for (let i = 1; i <= row; i++) {
    const r = [];
    for (let j = 1; j <= col; j++) {
      if (i % 2 == 0) {
        r.unshift((i - 1) * col + j);
      } else {
        r.push((i - 1) * col + j);
      }
    }
    matrix.push(r);
  }
  return matrix;
}
console.log(ziczac(5, 4));
// Xử lí object
// 1.
let student = [
  { Name: "Ba", Age: 28 },
  { Name: "Đăng", Age: 20 },
  { Name: "Tuấn", Age: 23 },
  { Name: "Phi", Age: 21 },
  { Name: "Hà", Age: 22 },
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
});
console.log(student);

//3.
student.sort(function (student1, student2) {
  return student1.Name > student2.Name ? 1 : -1;
});
console.log(student);

// 4.
let result = [];
for (i = 0; i < student.length; i++) {
  if (student[i].Name.charAt(0) == "H") result.push(student[i]);
}
console.log(result);

// Tổng hợp
// 4.
function sortNumbers(n) {
  const numbers = String(n).split("").sort(); // cắt các chữ số thành mảng
  const firstPositiveIndex = numbers.findIndex(function (n) {
    return Number(n) !== 0;
  });
  if (firstPositiveIndex !== 0) {
    // số đầu tiên khác 0 không nằm ở vị trí đầu tiên
    // đổi chỗ 2 số
    const temp = numbers[0];
    numbers[0] = numbers[firstPositiveIndex];
    numbers[firstPositiveIndex] = temp;
  }
  return Number(numbers.join(""));
}
console.log(sortNumbers(3546210));
