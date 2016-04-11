var express = require('express');
var router = express.Router();

module.exports = router;

/**
 * 简单配置个路由 用来检测无用的请求 仅符合路由规则的才能被接受
 * 自己可以按照需要定义
 * @type {{/: string, favicon: string, user: string, login: string, biz: string}}
 */
// var route = {
//     '/': "/",
//     'login': '/doLogin'
// };
//
// /**
//  * 上述路由的简单判断规则
//  * @param reqPath
//  * @returns {boolean}
//  */
// var isValid = function (reqPath) {
//     for (var key in route) {
//         if (route[key] == reqPath) {
//             return true;
//         }
//     }
//     return false;
// };
//
// /**
//  * 照样输出json格式的数据
//  * @param query
//  * @param res
//  */
// var writeOut = function (query, res) {
//     res.write(JSON.stringify(query));
//     res.end();
// }
//
// /**
//  * 启用http创建一个端口为8124的服务
//  * createServer内侧为回调函数：
//  * ...可看作java servlet中的 onService(HttpRequest,HttpResponse)
//  * ...或者（doGet、doPost）
//  */
// http.createServer(function (req, res) {
//
//     if (!isValid(url.parse(req.url).pathname)) {
//         res.writeHead(404, {'Content-Type': 'text/plain;charset=utf-8'});
//         res.write("{'errcode':404,'errmsg':'404 页面不见啦'}");
//         res.end();
//     } else {
//         res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
//         if (req.method.toUpperCase() == 'POST') {
//             console.log(req.data);
//             var postData = "";
//             /**
//              * 因为post方式的数据不太一样可能很庞大复杂，
//              * 所以要添加监听来获取传递的数据
//              * 也可写作 req.on("data",function(data){});
//              */
//             req.addListener("data", function (data) {
//                 postData += data;
//             });
//             /**
//              * 这个是如果数据读取完毕就会执行的监听方法
//              */
//             req.addListener("end", function () {
//                 var query = qs.parse(postData);
//                 writeOut(query, res);
//             });
//         }
//         else if (req.method.toUpperCase() == 'GET') {
//             /**
//              * 也可使用var query=qs.parse(url.parse(req.url).query);
//              * 区别就是url.parse的arguments[1]为true：
//              * ...也能达到‘querystring库’的解析效果，而且不使用querystring
//              */
//             var query = url.parse(req.url, true).query;
//             writeOut(query, res);
//         } else {
//             //head put delete options etc.
//         }
//     }
//
// });