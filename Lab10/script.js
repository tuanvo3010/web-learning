// alert("Hello JS");
// console.log("Test Javascript");
// console.log("Alo alo");
// console.log("Ảo thật đấy");

// let myName = "Tuấn Võ";
// let myAge = 23;
// let myJob = "Unemployed";
// const BIRTHDAY = "30/10/1998";
// const QUOTE = "Không làm mà đòi có ăn, thì chỉ có ăn...";
// const PI = 3.14;

// console.log(myName);
// console.log(myAge);
// console.log(myJob, BIRTHDAY, QUOTE);

let number = 123;
let float = 123.456;
let seperator = 100_000_000;
console.log(number);
console.log(seperator);
console.log(typeof seperator);

// 3 giá trị đặc biệt của number
console.log(Infinity);
console.log(-Infinity);
console.log(NaN);

// let firstName = "Tuấn";
// let lastName = "Võ";
// let age = 23;

// In ra ký tự đặc biệt thì dùng \ trước ký tự đó
// let message = "Hello, I'm Tuấn";

let message = "Hello everyone, I'm " + firstName + ", " + age + " years old";
console.log(message);

// Kiểu dữ liệu boolean
let isOn = true;
let isHandsome = true;

let myLove = null;
let myMoney = undefined;

// Object là kiểu phức hợp, cho phép lưu trữ nhiều giá trị trong cùng 1 biến duy nhất
// mỗi 1 giá trị đc gán 1 key cụ thể
// cú phap {key: value}

const Tuan = {
  firstName: "Tuấn",
  lastName: "Võ",
};

const Phi = {
  firstName: "Phi",
  lastName: "Lê",
};
const Ha = {
  firstName: "Hà",
  lastName: "Nguyễn",
};
// Mảng cho phép lưu trữ 1 danh sách các giá trị
let students = [Tuan, Phi, Ha];

// Declaration
function hello(who) {
  console.log("Hello, " + who);
}

// Gán giá trị hàm
const greeting = function (who) {
  console.log("Hello, " + who);
};

// Để sử dụng đoạn mã được đóng gói trong hàm
// Tên hàm ()
// Hàm có thể nhận các đối số (arguments)
hello("Tuấn");
hello("Sói");
Hello("Wolf");
