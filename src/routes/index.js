const newsRouter = require('./news');
const siteRouter = require('./Site');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/', siteRouter);

};

module.exports = route;