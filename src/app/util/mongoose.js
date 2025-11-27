module.exports = {
  // chuyển đổi mảng mongoose thành mảng object thường
  mutilpleMongooseToObject: function (mongooses) {
    return mongooses.map((mongoose) => mongoose.toObject());
  },
  // chuyển đổi 1 document mongoose thành object thường
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
