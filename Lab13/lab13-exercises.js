// Danh sách sinh viên và quốc gia tương ứng
// Tên sinh viên là key còn quốc gia là value
const guessList = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};

/**
 * Kiểm tra xem `name` có trong `guessList` hay không
 *
 * - Nếu có thì trả về chuỗi theo mẫu: `Hi! I'm [name], and I'm from [country]!`
 * - Nếu không có thì trả về chuỗi theo mẫu: `Hi! I'm guess.`
 *
 * @param {string} name Tên bất kỳ
 *
 * @return {string} Câu chào
 */
function greeting(name) {
    for (let key in guessList) {
        if (name == key) {
            console.log("Hi! I'm " + name + ", and I'm from " + guessList[key]);
            break
        } else {
            console.log("Hi! I'm guess");
        }
    }
}
console.log(greeting("Wendy"));
console.log(greeting("Tuan"));
// Danh sách thành viên trong 1 gia đình
// Tên là key, tuổi là value
const myFamily = {
  Fred: 34,
  Susan: 32,
  Emily: 8,
  Tom: 5,
};

/**
 * Tính xem sau `n` năm nữa thì các thành viên trong gia đình bao nhiêu tuổi
 *
 * Lưu ý: Object cũ không được thay đổi, kết quả trả về phải là một object mới
 *
 * @param {{[key: string]: number}} obj Danh sách thành viên trong gia đình
 * @param {number} n Số năm bất kỳ
 *
 * @return {{[key: string]: number}} Danh sách thành viên và số tuổi tương ứng sau `n` năm
 */
let obj = {};
for (let key in myFamily) {
  obj[key] = myFamily[key];
}
function afterNYears(obj, n) {
  for (let key in obj) obj[key] = myFamily[key] + n;
  return obj;
}
console.log(afterNYears(myFamily, 7));
/**
 * Đảo ngược key thành value, value thành key của một object bất kỳ
 *
 * Lưu ý: Object cũ không được thay đổi, kết quả trả về phải là một object mới
 *
 * @param {{key: string}: any} obj Object bất kỳ
 *
 * @return {[key: string]: string} Object mới sau khi đảo ngược
 */
let student = {
  name: "Tuan",
  age: 23,
  class: "Frontend 28",
};
function invert(obj) {
  let invertObj = {};
  for (let key in obj) {
    invertObj[obj[key]] = key; // Gán key của obj mới bằng value của obj cũ
  }
  return invertObj;
}
console.log(invert(student));
// Danh sách items
// Key là tên, value là giá trị tương ứng
const items = {
  tv: 300,
  ipad: 1000,
};

/**
 * Tính tổng giá trị (value) các items trong object đầu vào
 *
 * @param {{[key: string]: number}} items Danh sách items
 *
 * @return {number} Tổng giá trị các items
 */
function totalAmount(items) {
  let sum = 0;
  for (let key in items) {
    sum += items[key];
  }
  return sum;
}
console.log(totalAmount(items));
/**
 * Lọc và trả về danh sách các items có giá trị cao (value >= 1000) trong danh sách đầu vào
 *
 * Lưu ý: Object ban đầu không được phép thay đổi, kết quả trả về phải là một object mới
 *
 * @param {{[key: string]: number}} items Danh sách items
 *
 * @return {{[key: string]: number}} Danh sách các items có giá trị cao
 */
