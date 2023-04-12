// import siteRouter from './site.js';
const siteRouter = require('./site');
const adminRouter = require('./admin');
const productRouter = require('./product');
const usertRouter = require('./user');

const route = (app) => {
    app.use('/admin', adminRouter);
    app.use('/product', productRouter);
    app.use('/user', usertRouter);
    app.use('/', siteRouter);
};
module.exports = route;
