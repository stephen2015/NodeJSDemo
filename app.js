//模块依赖
var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var ejs = require('ejs');
var routes = require('./routes');

var app = express();

// view engine setup  环境变量
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('PORT', 3000);
// app.engine('.html', ejs.__express);
// app.set('view engine', 'html');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'views')));

//路由
var indexRouter = require('./routes/index');
var userRouter  = require('./routes/users');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
// app.get('/', routes.index);
// app.get('/login', routes.login);
// app.get('/logout', routes.logout);
// app.get('/users', routes.users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// production 500 error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
// development error handler
// will print stacktrace  开发模式
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// 启动及端口
http.createServer(app).listen(app.get('PORT'), function(){
    console.log('Express server listening on port ' + app.get('PORT'));
});

// app.use(function(req, res, next){
//     res.locals.user = req.session.user;
//     next();
// });

module.exports = app;
