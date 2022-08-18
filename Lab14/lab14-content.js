let numbers = [10, 100, 1000, 20, 200, 2000];
console.log(numbers);
console.log(typeof numbers); // object
console.log(numbers.length); // độ dài (số lượng phần tử trong mảng)
// length = index lớn nhất + 1
// length có thể thay đổi tùy ý
// numbers.length = 10 // thêm 4 vị trí trống
// numbers.length = 0 // xóa hết phần tử trong mảng
// thường mảng nên lưu các giá trị giống nhau
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  console.log(element);
}

for (const number of numbers) {
  console.log(number);
}
// Kiểm tra obj có phải mảng hay ko
Array.isArray(numbers); // true
const newArray = numbers.concat(["Tuấn", "Sói"]);
console.log(newArray);

// Tìm vị trí (index) của 1 giá trị trong mảng
// Tìm theo thứ tự từ trái sang phải
console.log(numbers.indexOf(1000));

// 1000 có trong numbers hay ko
console.log(numbers.includes(1000));

// Thêm vào cuối
numbers.push(1, 2, 3);
console.log(numbers);

// Thêm vào đầu
numbers.unshift(-1, -2, -3);
console.log(numbers);

// Xóa phần tử ở cuối
const lastItem = numbers.pop();
console.log(lastItem);
console.log(numbers);

// Xóa phần tử ở đầu
const firstItem = numbers.shift();
console.log(firstItem);
console.log(numbers);

//đảo ngược thứ tự
numbers.reverse();
console.log(numbers);

//Sao chép mảng
const firstThreeItem = numbers.slice(0, 3);
console.log(firstThreeItem);

// Xóa hoặc chèn hoặc thay thế giá trị ở vị trí bất kỳ

// xóa
numbers.splice(2, 1);
console.log(numbers);

// chèn
numbers.splice(5, 0, "Tuấn", "Sói");
console.log(numbers);

// Thay thế
numbers.splice(5, 2, -10, -100);
console.log(numbers);


//Callback
function doSomething(func) {
  func();
}

function test() {
  console.log("test");
}
doSomething(test); // func = test
// 1 hàm được truyền vào 1 hàm khác dưới dạng đối số

let arr = [1, 2, 3, 4, 5];
arr.forEach(function (n) {
  console.log(n ** 2);
});
