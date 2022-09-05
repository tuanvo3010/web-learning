ES6
// Cú pháp khai báo biến và phạm vi biến
`
var - Phiên bản cũ - có Hoisting - (Scope) Chỉ bị giới hạn trong function scope
let - ES6 - không hoisting - Bị giới hạn trong cả Block scope và function scope
const - ES6 - không hoisting - Bị giới hạn trong cả Block scope và function scope
`

`**Arrow function
    - Cú pháp thay thế / ngắn gọn hơn cho cú pháp khai báo hàm thông thường
    - Sử dụng thay thế cho biểu thức hàm thông thường (sử dụng từ khóa function)
    - Về cú pháp, không có từ khóa function, sau danh sách hay tham số có ký tự =>
    - Có thể bỏ qua () nếu chỉ có 1 tham số
    - Có thể bỏ qua {} nếu phần thân hàm chỉ có 1 câu lệnh | biểu thức
    - Biểu thức | Giả trị ở ngay sau dấu => chính là giá trị return
    - Thường thì arrow function sử dụng để khai báo các hàm callback cho cú pháp ngắn gọn
    - Không nên dùng arrow function làm phương thức của đối tượng (object method)
    - Arrow function không có this, arguments giống như hàm thông thường
`
//Cú pháp
`Function expression - ES5`

const hello = function (who) {
    console.log("Hello", who);
}

`Arrow function - ES6`
const helloo = (who) => {
    console.log("Hello", whoo)    
}

`Trong trường hợp ngắn gọn có thể bỏ qua phần thân hàm {}`
const hellooo = who => console.log("Hello", who);


`**Spread operator - ...
Có nhiều cách dùng, vị trị sử dụng sẽ có ý nghĩa và kết quả khác nhau:
Trong phần khai báo tham số hàm (Rest parameters)
- Phải là tham số ở vị trí cuối cùng trong danh sách tham số
Trong câu lệnh gọi hàm hoặc các tập giá trị (Spread operator)
`
    
    
`**Template literals
    *Cho phép nhúng các giá trị | biểu thức vào trong chuỗi
    - cú pháp template literals: `` (cặp dấu huyền)
    - Nhúng giá trị | biểu thức: ${ expression}
`
let myname = "Tuấn";
let myage = 23;
// ES6
const msg = `Hello, I'm ${myname}, I'm ${myage} years old!`;
// ES5
const msg = "Hello, I'm ".concat(myname).concat(", I'm").concat(myage).concat("years old!");

`Destructuring Assignment
*Cho phép gán nhanh những giá trị trong mảng | đối tượng cho các biến | Tham số
`
// module
// classes
// promises