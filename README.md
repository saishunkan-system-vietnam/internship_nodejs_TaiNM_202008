# internship_nodejs_TaiNM_202008
Thực tập NodeJS (NestJS) - Xây dựng ứng dụng phân tán
Xây dựng ứng dụng đặt vé máy bay theo mô hình ứng dụng phân tán theo module.

# Các module trong ứng dụng
- Front-end người dùng
+ Tìm kiếm vé máy bay
+ Đặt vé máy bay
+ Quản lý vé máy bay đã đặt (hủy vé)

- Back-end quản lý
+ CRUD quản lý danh mục:
++ Tên hãng bay
++ Loại ghế
+ CRUD quản lý vé máy bay
++ Hãng bay, loại ghế, số lượng ghế, giá tiền
+ CRUD quản lý thông tin đặt vé
+ Thống kê thông tin đặt vé.

- Login hệ thống
+ Login cho khách hàng
+ Login cho quản lý

# Các CHÚ Ý khi phát triển
- Xử lý cookie - session:
Vì là ứng dụng phân tán, nên cần chú ý đến xử lý cookie - session nếu không khi login thành công, khi truy cập đến các module khác sẽ không có thông tin session.
- Convention code phải thống nhất với nhau.
- Sử dụng MySQL là cơ sở dữ liệu nên cần chú ý đến SQL Injection
- Sử dụng cơ chế truyền dữ liệu MQTT
