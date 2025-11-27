//import model Course
const Course = require("../Models/Course");

//function controller xu ly trang Site
class SiteController {
  //[GET] /home, cho render trang Site
  //   index(req, res) {
  //     res.render("home");
  //   }
  //lấy dữ liệu từ model Course và truyền dữ liệu đó vào trang home

  async index(req, res) {
    try {
      const courses = await Course.find({});
      res.json(courses);
    } catch (error) {
      res.status(400).json({ error: "ERROR!!!" });
    }
  }

  //[GET] /search, cho render trang Search
  search(req, res) {
    res.render("search");
  }
}

//export de su dung o file khac
module.exports = new SiteController();
