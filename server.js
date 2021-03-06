/**
 * Created by Stephen on 2016/4/13.
 */
// 模块依赖
var app_root = __dirname;
var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
// mount-routes 根据路径来自动加载路由，让开发更简单
var mount = require('mount-routes');
// node 异常处理捕获
var domain = require('domain');

var app = express();

// view engine setup 环境变量
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

// 路由文件映射
var login = require('./routes/login');
var city = require('./routes/city');
app.use('/login', login);
app.use('/getCity', city);
app.use('/login', login);

// 自动映射路由，但是路径'/'后的方法名必须和路由器action文件名一致
// mount(app, app_root + '/routes');


// 引入一个domain的中间件，将每一个请求都包裹在一个独立的domain中 domain来处理异常
app.use(function (req, res, next) {
    var d = domain.create();
    // 监听domain的错误事件
    d.on('error', function (err) {
        console.log(err);
        res.statusCode = 500;
        res.json({success: false, message: '服务器异常'});
        d.dispose();
    });
    // 添加e和timer异常监测
    d.add(e);
    d.add(timer);

    d.add(req);
    d.add(res);
    d.run(next);
});


// 异常处理 catch 404 and forward to error handler
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
// development error handler will print stacktrace 开发模式
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
http.createServer(app).listen(app.get('PORT'), function () {
    console.log('Express server listening on port ' + app.get('PORT'));
});

module.exports = app;

