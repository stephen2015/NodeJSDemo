//模块依赖
var app_root = __dirname;
var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var routes = require('./routes');

var app = express();

// view engine setup  环境变量
app.set('views', path.join(app_root, 'views'));
app.set('view engine', 'jade');
app.set('PORT', 3000);

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(app_root, 'public')));
app.use(express.static(path.join(app_root, 'bower_components')));
app.use(express.static(path.join(app_root, 'views')));

//路由
app.use('/doLogin', require('./routes/index'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// production 500 error handler no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
// development error handler will print stacktrace  开发模式
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// 启动监听端口
http.createServer(function (req, res) {
    if (req.url == '/doLogin' && req.method.toUpperCase() == 'POST') {
        var postData = "";
        req.addListener("data", function (data) {
            postData += data;
            console.log(postData);
            res.send('respond with a resource');
        });
    }
}).listen(app.get('PORT'), function () {
    console.log('Express server listening on port ' + app.get('PORT'));
});

module.exports = app;
