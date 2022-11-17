# Ôn tập

## Các phương thức mảng

### Mảng là gì?

Dánh sách các giá trị (thông thường thì mảng sẽ lưu các giá trị cùng loại)

Mảng cung cấp các phương thức cho phép **duyệt mảng** các giá trị với các giá trị bên trong mảng, thay vì dùng các vòng lặp `for` thông thường

Các phương thức ES6:

* `forEach`
* `find`
* `findIndex`
* `includes`
* `map`
* `filter`
* `reduce`
* `some`
* `every`

Các phương thức này yêu cầu truyền vào một **callback function**, các hàm callback sẽ nhận giá trị trong mảng và thực hiện thao tác, các hàm callback có thể nhận 3 tham số là **value, index, array**

## Function

Function đơn giản là một tập các câu lệnh được gói trong 1 khối mã, cho phép viết mã 1 lần, dùng nhiều lần

Cấu trúc của 1 hàm:

* Từ khóa khai báo
* Tên hàm
* Tham số
* Thân hàm, các câu lệnh

```javascript
// function declaration
function hello(){
    console.log("Hello")
}

// function expression
let hello = function(){
    console.log("Hello")
}

// arrow function expression
let hello = () => console.log("Hello");

// call
hello();
```

Hàm là các đối tượng hạng nhất (first class)

Hàm là một loại giá trị

Có thể gán hàm cho 1 biến

Hàm có thể là giá trị trả về từ 1 hàm khác

Hàm có thể truyền vào 1 hàm khác dưới dạng đối số



## Lập trình bất đồng bộ

### Synchronous - Đồng bộ

Chỉ thực hiện 1 thao tác tại 1 thời điểm, các thao tác khác thì sẽ phải chờ thao tác trước đó thực hiện xong mới đến lượt

Asynchronous - Bất đồng bộ

Trong khi thực hiện các thao tác mà chiếm nhiều thời gian, thì quy trình vẫn có thể xử lý được các công việc khác

Thao tác chiếm nhiều thời gian sẽ được xử lý sau.



```javascript
// Callback
function doSomethingWithRandomNumber(callback){
setTimeout(() =>{
const random = Math.floor(Math.random()*100);
    callback(random);
},3000);
}
doSomethingWithRandomNumber((random) => {
    console.log("Got:", random);
})
console.log("LOL")
let x
abc(); // gán giá trị cho x
xyz();
```

xyz() cần thao tác với giá trị x

Nhưng giá trị x thì được tính toán bởi abc()

Bằng cách nào đó, mình phải cho thằng xyz() chạy sau khi abc() đã tính toán xong

```javascript
// Promise
```

## Dom

### Dom là gì?

Các thao tác chính có thể thực hiện với DOM

* Tìm kiếm/duyệt qua cấu trúc phần tử
* Chỉnh sửa nội dung/thuộc tính/thêm các sự kiện
* Tạo các thành phần DOM
* Thêm/sửa/xóa các thành phần DOM

Khi mà chỉ cần thêm cấu trúc DOM mà không có các sự kiện thì có thể dùng innerHTML

Khi mà cần tùy chinh thêm các sự kiện thì nên dùng API `document.create`

Khi tạo giao diện thì nên chia nhỏ các phần giao diện ra thành các hàm nhỏ

Ví dụ: Khi cần render danh sách sản phẩm: `createProduct`, `createProductList`, `render`

## API

Application Programming Interface - Tập các giao thức/quy tắc để các ứng dụng/hệ thống/đối tượng khác nhau có giao tiếp và trao đổi dữ liệu với nhua

Cụ thể trong lập tình web, APIs là các endpoint mà server cung cấp, cho phép ứng dụng frontend có thể gửi/nhận dữ liệu:

* /api/user
* /api/signup
* /api/signin
* /api/products/
* /api/products/1

HTTP - HyperText Transfer Protocol

* Endpoint | URL
* Method
* Headers
* Body