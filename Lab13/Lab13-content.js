// Khai báo object rỗng
// let obj = {};
// Khai báo kèm thông tin
// let obj {
//     key1: value1,
//     method1: function name(params) {

//     }
// }
// const self = {
//   name: "Tuan",
//   dateOfBirth: "1998/10/30",
//   gender: "Male",
//   job: "Unemployed",
//   weight: 45,
//   height: "163cm",
//   hobby: ["Gaming", "Sleep", "Eat"],
//   // Method
//   speak() {
//     console.log("Hello!");
//     },
//   "special key": "LoL Watafak!"
// };
// console.log(self);
// // Dot notation = obj.key
// console.log(self.name);
// console.log(self.dateOfBirth);
// console.log(self.gender);
// self.speak();

// Bracket notation = obj["key"]
// console.log(self["name"]);
// console.log(self["job"]);
// console.log(self["hobby"]);

// Key trong object ko bị giới hạn đặt tên
// Cho phép chứa bất kì ký tự gì
// Lưu trữ dưới dạng chuỗi
// Vẫn nên tuân thủ quy ước camelCase khi đặt tên key
// Ưu tiên sử dụng cú pháp Dot notation khi truy cập giá trị

// Bracket notation sử dụng trong trường hợp
// Sử dụng với biến
// let self = {
//   name: "Tuan",
//   dateOfBirth: "1998/10/30",
//   age: 23,
//   speak() {
//     // this => đối tượng đang thực hiện hành vi
//     // this => là đối tượng trước dấu .
//     console.log(
//       "Lol Watafak! I'm " + this.name + ", " + this.age + " years old"
//     );
//   },
// };
// // Cho phép ng dùng nhập giá trị
// // let key = prompt("Nhập thông tin cần biết");
// // console.log(self[key]);// self["name"]

// // for (let key in self) {
// //   console.log("Key:", key, "Value:", self[key]);
// // }

// self.speak();
// const copy = self;
// self = null;
// copy.speak(); // this = self



function hello() {
    console.log("Hello, I'm " + this.name);
}
const Tuan = {
    name: "Tuan",
}
const Ba = {
    name: "Ba",
}
Tuan.hello = hello;

Tuan.hello(); // this = Tuan