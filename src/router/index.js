const siteRouter = require('./site');
const apiRouter = require('./api');

function route(app) {
    // app.use('/admin', adminRouter);
    app.use('/', siteRouter);
    app.use('/api', apiRouter);

}

module.exports = route; 
