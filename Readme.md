# How to run

1, install nvm
2, run

```
npm install
```

3, run

```
npm run start
```

# Basic knowledge

Tóm tắt:
Cài đặt một môi trường code :

- nodejs: cài nvm ( node version managements ) đối vs môi trường code nào cũng thế kiểu kì cũng có cái version managements cả nên cài vào mình dễ bắt đầu hơn
- (nodejs) : khởi tạo project npm init -y
- (javascript) : vì cơ chế non-blocking nên không phải code cứ chạy từ trên xuống tuần tự mà là nó cho vào ngăn xếp thằng nào chạy xong trước thì ra trước vì thế có khái niệm synchronized mọi ng search nhé
  catching errors: ngôn ngữ nào cũng sẽ sử dụng cái này để bắt lỗi trên code
  Khái niệm mới
- hot reload: trong quá trình code mình cần check xem code mình thay đổi có đúng hay ko chỉ bằng việc nhấn ctrl+S thì hãy search key word này nhé ( với code server nodejs thì dùng package nodemon)
- uri: nếu chưa xét đến bảo mật thì một request mình cần nhó khái niệm body, header( params, query)
- bodyParser: các dữ liệu trên internet đến server đều được mã hoá vì thế mà nó cần phải parse ra mới đọc được
- ORM: để tương tác với database thì server sử dụng ORM. đây sẽ là cái mapping các query của mình ra các câu lệnh query nhưng đã được lọc bớt các yếu tố có thể bị hack
- CRUD: viết tắt của Create, Read, Update, Delete là các tác vụ cơ bản tương tác với dữ liệu
- RESTful API: mọi ng đọc thêm ở đây https://viblo.asia/p/restful-api-la-gi-1Je5EDJ4lnL
- views: (nodejs) sử dụng package bug
- Postman: công cụ hỗ trợ gọi các giao thức restful api
