//function controller xu ly trang Site
class SiteController {
    //[GET] /home, cho render trang Site
    index(req, res) {
        res.render('home');
    }
    search(req, res) {
        res.render('search');
    }
}

//export de su dung o file khac
module.exports = new SiteController();
