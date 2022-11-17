* NodeJS - JavaScript Runtime Environment (Môi trường thực thi mã JS cho phép chạy mã JS bên ngoài trình duyệt)

* Server

* Node module - Node bao gồm rất nhiều module/library bên thứ 3, được lưu trữ và phân phối thông

  

   qua các repository (npm.js, yarn-pkg,...)

* Npm - Công cụ/chương trình cho phép quản lý các package sử dụng trong project (tự động tìm và cài đặt các package, gỡ bỏ, update, ...), công cụ này kèm theo nodeJS

* Yarn - tương tự như NPM, khác nhau 1 chút về các câu lệnh và cách thức quản lý

* Trong thực tế, là việc phát triển web hiện tại hầu hết là phát triển dựa trên môi trường NodeJS



### JSON Server cho phép tạo 1 mockup server nhanh, đơn giản, chỉ cần khai báo dữ liệu

## Một số câu lệnh NPM cơ bản

- khởi tạo metadata cho NPM để khai báo và quản lý các packages

```
npm init -y
```

- Cài đặt package

```
npm install package_name
npm i package_name ...
npm i package_name@version
```

- Trường Scripts trong package.json khai báo các đoạn script có thể chạy, sử dụng lệnh

  ```
  npm start
  npm run script_name
  ```

- Để dừng server hay dòng lệnh: Ctrl + C