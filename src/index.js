// import express from 'express';
//khai báo các biến và hằng số, sử dụng require thay vì import, const thay vì let hoặc var
const express = require('express')
const handlebars = require('express-handlebars');
const app = express()
const PORT = process.env.PORT || 3000;
const path = require('path');
const route = require('./routes');


//Static files , lấy file tĩnh từ thư mục Content, chỉ cần gõ localhost:3000/tenfile*(img/logo.jpeg )
app.use(express.static(path.join(__dirname, 'Content')));


app.use(express.urlencoded(
{ extended: true }
)); //middleware xử lý dữ liệu form gửi lên
app.use(express.json()); //middleware xử lý dữ liệu json gửi lên


//HTTP request logger 
const morgan = require('morgan');
// app.use(morgan('combined'));

//Template engine, đổi tên đuôi .handlebars thành .hbs trong handlebars.engine()
app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'resources/views'));

//route init
route(app); //gọi hàm route để thiết lập các route



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);})