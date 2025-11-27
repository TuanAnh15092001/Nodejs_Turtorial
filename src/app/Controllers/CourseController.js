//import model Course
const Course = require("../Models/Course");
const { mongooseToObject } = require("../util/mongoose");

//function controller xu ly trang Site
class CourseController {
  //[GET] /show-detail,:slug
  show_detail(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("courses/show-detail", { course: mongooseToObject(course) })
      )
      .catch(next);
  }
}

//export de su dung o file khac
module.exports = new CourseController();
