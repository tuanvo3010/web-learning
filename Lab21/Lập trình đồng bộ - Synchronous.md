## Lập trình đồng bộ - Synchronous

#### Các câu lệnh thì thực hiện tuần tự theo thứ tự xác định, câu lệnh trước kết thúc thì mới tới câu lệnh tiếp theo

Ưu điểm:

- Dễ đọc

- Dự đoán kết quả

Nhược điểm:



Lập trình bất đồng bộ - Asynchronous

Các câu lệnh không cần chờ câu lệnh tiếp theo thực hiện xong, một thao tác có thể bắt đầu tại 1 thời điểm, nhưng kết thúc ở một thời điểm khác

Ưu điểm

- Tốc độ thực thi các thao tác nhanh hơn

Nhược điểm:

- Mã khó đọc
- Không thể biết chính xác khi nào thì câu lệnh sẽ thực thi xong

## APIs

Aplication Programming Interfaces - Giao diện lập trình ứng dụng

Tập hợp các giao thức cho phép các ứng dụng | dịch vụ | hệ thống khác nhau giao tiếp | trao đổi dữ liệu

Ví dụ: Server cung cấp các endpoints (APIs) cho phép client kết nối và truyền tải dữ liệu

## HTTP

HyperText Transfer Protocol - Giao thức truyền tải dữ liệu siêu văn bản cho phép client và server kết nối và gửi | nhận dữ liệu

Client state - UI

Server state - Database 

## Cấu trúc

- Path: Đường dẫn (endpoint) mà mình muốn gọi
- Method: Phương thức (HTTP Verb) mà mình muốn thực hiện
- Status: Trạng thái cho biết yêu cầu thành ôcng hay thất bại
- Headers: Các thông tin bổ sung cho yêu cầu (cookie, agent, authorization, ...)
- Body: Dữ liệu mà mình muốn gửi đi

## Implement

* Endpoint: https://jsonplaceholder.typicode.com/users
* Method (GET| POST | PUT | DELETE)
* Status (1xx - 2xx - 3xx - 4xx - 5xx)
* Headers
* Body





- Xây dựng giao diện tĩnh
- Ghép APIs (đồng bộ với dữ liệu phía server)
- Hiển thị giao diện tương ứng với dữ liệu