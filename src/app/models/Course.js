//khai báo mongoose
const mongoose = require("mongoose");
//tạo biến Schema để dễ sử dụng
const Schema = mongoose.Schema;

//tạo cấu trúc Course model
const Course = new Schema({
  name: { type: String, maxLength: 255 },
  description: { type: String, maxLength: 255 },
  image: { type: String, maxLength: 255 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

//xuất model Course để sử dụng ở các file khác
module.exports = mongoose.model("Course", Course);
