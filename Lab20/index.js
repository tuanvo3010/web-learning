// Arrow function
// const hello = (who) => console.log("Hello", who);
// hello("Tuấn");

// [(1, 2, 3)].filter((n) => n % 2 === 0);

// console.log();
// let x = 10;
// const tuan = {
//   name: "Tuấn",
//   age: 23,
//   speak: function () {
//     console.log(x);
//     console.log("Hello, I'm", this.name);
//   },
// };
// tuan.speak();

// const sum = (a, b) => a + b;
// console.log(sum(1, 2));

// Rest parameters
const sum = (a, b, ...others) =>
  others.reduce((total, n) => (total += n), a + b);
console.log(sum(1, 2, 3, 4, 5));

// Sao chép mảng | đối tượng
// let arr = [1, 2, 3];
// let copy = [1, 2, 3, ...arr, 4, 5, 6];
// console.log(copy);

//
let obj = {
  name: "Tuấn",
  age: 23,
  isRichAsFuck: false,
};
let clone = {
  ...obj,
};

// Với object thì tách theo key (bát buộc), có thể đổi tên
let { name, age, isRichAsFuck: isR } = obj;
console.log(name, age, isR);

// Với array thì tách theo index
let arr = [1, 2, 3];
let [a, b] = arr;

let obj2 = {
  firstname: "Tuấn",
  lastname: "Võ",
};

const getFullName = ({ firstname, lastname }) => firstname + " " + lastname;


console.log(getFullName(obj2));
