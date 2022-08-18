let arr = ["Linh", "Nhi", "Hùng", "Hà", "Mai Anh"];

// In arr ra console
console.log(arr);
// In ra độ dài (số lượng phần tử) của arr
console.log(arr.length);
// In ra phần tử thứ 3 trong mảng
console.log(arr[2]);
// In ra phần tử đầu tiên trong mảng
console.log(arr[0]);
// In ra phần tử cuối cùng của mảng
console.log(arr[arr.length - 1]);
// In ra phần tử có index = -1, chú ý kết quả
console.log(arr[-1]);
// Sử dụng vòng lặp in ra từng giá trị trong arr
for (let i = 0; i < arr.length; i++) {
  const value = arr[i];
  console.log(value);
}
// Sử dụng vòng lặp in ra giá trị và chỉ mục tương ứng của giá trị đó trong arr
// Ví dụ:
// Index: 0, Value: 10
// Index: 1, Value: 20
// ...
for (let i = 0; i < arr.length; i++) {
  const value = arr[i];
  console.log("Index:", i, "Value:", value);
}
// Sử dụng vòng lặp in ra giá trị và chỉ mục tương ứng trong arr theo chiều ngược lại (từ cuối mảng)
for (let i = arr.length - 1; i > 0; i--) {
  const value = arr[i];
  console.log("Index:", i, "Value:", value);
}
// Thêm "Ba"  cuối mảng sử dụng phương thức push()
arr.push("Ba");
console.log(arr);
// Thêm "Thảo" vào cuối mảng mà KHÔNG SỬ DỤNG phương thức push()
// arr = arr.concat(["Thảo"])
// console.log(arr);
arr[arr.length] = "Thảo";
console.log(arr);
// Thêm "Béo Ú" vào vị trí đầu tiên trong mảng sử dụng phương thức unshift()
arr.unshift("Béo Ú");
console.log(arr);
// Xóa phần tử ở vị trí cuối cùng của mảng sử dụng phương thức pop() và in ra giá trị đó
const lastItem = arr.pop();
console.log(lastItem);
// Xóa phần tử ở vị trí đầu tiên trong mảng sử dụng phương thức shift() va in ra giá trị đó
const firstItem = arr.shift();
console.log(firstItem);
// Sao chép 2 phần tử đầu tiên sử dụng phương thức slice() và in ra kết quả
const firstTwoItem = arr.slice(0, 2);
console.log(firstTwoItem);
// Sao chép toàn bộ phần tử của mảng sử dụng phương thức slice()
const allItem = arr.slice(0, arr.length);
console.log(allItem);
// Sao chép 3 phần tử cuối cùng của mảng sử dụng phương thức slice()
const lastThreeItem = arr.slice(arr.length - 3, arr.length);
console.log(lastThreeItem);
// Xóa 2 phần tử thứ 2 và 3 ("Nhi" và "Hùng") khỏi mảng sử dụng phương thức splice()
arr.splice(1, 2);
console.log(arr);
// Thêm lại "Nhi" và "Hùng" vào vị trí thứ 2 và 3 sử dụng phương thức splice()
arr.splice(1, -2, "Nhi", "Hùng");
console.log(arr);
// Tìm và in ra chỉ mục của "Ba" ra console sử dụng phương thức indexOf()
console.log(arr.indexOf("Ba"));
// Tìm và in ra chỉ mục của "Thảo" ra console, chú ý kết quả
console.log(arr.indexOf("Thảo"));
// Kiểm tra "Mai Anh" có trong mảng arr hay không sử dụng phương thức includes() và in ra kết quả
if (arr.indexOf("Mai Anh") != -1) {
  console.log(true);
} else {
  console.log(false);
}
// Sử dụng alert() in arr, chú ý kết quả
// alert(arr)
// Nối các tên trong mảng thành một chuỗi sử dụng phương thức join() và in ra console
let newArr = arr.join(" ");
console.log(newArr);
// Đảo ngược các giá trị trong mảng arr sử dụng phương thức reverse() và in ra kết quả
console.log(arr.reverse());
// Đổi chỗ 2 phần tử đầu và cuối mảng
let temp = arr[0];
arr[0] = arr[arr.length - 1];
arr[arr.length - 1] = temp;
console.log(arr);
// Xóa toàn bộ phần tử trong mảng
arr.splice(0, arr.length);
console.log(arr);
/**
 * Tính tổng các số trong một mảng
 *
 * @param {number[]} numbers Mảng các số
 *
 * @return {number} Tổng các số trong mảng
 */
let numbers = [1, 2, 3, 4, 5];
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++)
    sum += arr[i];
    return sum;
}
console.log(sum(numbers))


// console.log(
//   numbers.reduce(function (a, b) {
//     a += b;
//     return a;
//   }, 0)
// );
/**
 * Tính trung bình cộng các số trong mảng
 *
 * @param {number[]} numbers Mảng các số
 *
 * @return {number} Trung bình cộng các số trong mảng
 */
function avg(numbers) {}
