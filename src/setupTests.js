const createProxyMiddleware = require('http-proxy-middleware');
const proxy_url = require('../constant.js')
module.exports = function (app) {
    app.use(
        createProxyMiddleware('/Graph', {
            target: proxy_url 
        })
    );
    app.use(
        createProxyMiddleware('/Data', {
            target: proxy_url
        })
    );
};
