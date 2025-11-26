//function controller xu ly trang news
class NewsController {
    //[GET] /news, cho render trang news
    index(req, res) {
        res.render('news');
    }
    show_detail(req, res) {
        res.send('NEWS DETAIL PAGE');
    }
}

//export de su dung o file khac
module.exports = new NewsController();
