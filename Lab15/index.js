let arr = [1, 2, 3, 4, 5];
function isEven(n) {
  return n % 2 == 0;
}

// Vòng lặp
let result;
for (const number of arr) {
  if (isEven(number)) result = number;
  break;
}
console.log(result);

//find()
const n = arr.find(isEven);
console.log(n);

// vòng lặp
let numbers = [];
for (const number of arr) {
  if (isEven(number)) {
    numbers.push(number);
  }
}
console.log(numbers);

// filter()
const numberss = arr.filter(isEven);
console.log(numberss);

// [1,2,3] => [1,4,9]
// Vòng lặp
let pow = [];
for (const number of arr) {
  pow.push(number ** 2);
}
console.log(pow);

//map()
const r = arr.map(function (n) {
  return n ** 2;
});
console.log(r);

// Tổng hợp các giá trị trong mảng
// Tính tổng, ghép,...

//vòng lặp

function add(a, b) {
  return a + b;
}
let sum = 0;
for (const number of arr) {
  sum = add(sum, number);
}
console.log(sum);

// reduce(function, initialValue);
let total = arr.reduce(add, 0);
console.log(total);

// sort()

let arr2 = [2, 5, 1, 3, 4, 11, 35, 9]; // [1,2,3,4,5,9,11,35]
// Mặc định sort() sắp xếp các giá trị theo dạng chuỗi
arr2.sort();
console.log(arr2);

function compareNumber(a, b) {
  return a - b;
}
arr.sort(compareNumber);
console.log(arr);

let users = [
  { name: "Ba", age: 30 },
  { name: "Đăng", age: 18 },
  { name: "Tuấn", age: 23 },
  { name: "Phi", age: 25 },
];
// sắp xếp tuổi
users.sort(function (user1, user2) {
  return user1.age - user2.age;
});
console.log(users);
// sắp xếp tên
users.sort(function (user1, user2) {
  return user1.name > user2.name ? 1 : -1;
});
console.log(users);

//find() - tìm giá trị theo điều kiện
// findIndex() - Tìm chỉ mục của giá trị theo điều kiện (tìm 1)

// filter() - Tìm nhiều giá trị theo điều kiện (lọc)

// map() - Biến đổi mảng

// reduce() - Tổng hợp, ghép các giá trị trong mảng

// sort() - Sắp xếp các giá trị trong mảng

// Các giá trị tháng thì tính từ 0-11
// Giờ tính từ 0-23
// Thứ trong tuần tính từ 0-6 (Sun - Sat)

// Bắt đầu từ 1970-01-01 00:00:00:0000 (Epoch)
// Get (lấy ra) - Set(Thay đổi)

// Khi cập nhật giá trị thời gian
// Phần giá trị bị dư (thiếu) tự động bù trừ vào những phần khác
