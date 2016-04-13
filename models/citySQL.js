/**
 * Created by Administrator on 2016/4/13.
 */
var mysql = require('mysql');
var DB_NAME = 'world';

var pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'stephen',
    password: 'root'
});

pool.on('connection', function (connection) {
    connection.query('SET SESSION auto_increment_increment=1');
});

function City(city) {
    this.id = city.id;
    this.name = city.name;
    this.countryCode = city.countryCode;
    this.district = city.district;
};
module.exports = City;

pool.getConnection(function (err, connection) {
    var useDbSql = "USE " + DB_NAME;
    connection.query(useDbSql, function (err) {
        if (err) {
            console.log("USE Error: " + err.message);
            return;
        }
        console.log('Connect Success to ' + useDbSql);
    });

    //保存数据
    City.prototype.save = function save(callback) {
        var city = {
            id: this.id,
            name: this.name,
            countryCode: this.countryCode,
            district: this.district
        };
        var insertCity_Sql = "INSERT INTO city(name,countryCode,district) VALUES(?,?,?)";
        connection.query(insertCity_Sql, [city.name, city.countryCode, city.district], function (err, result) {
            if (err) {
                console.log("insertCity_Sql Error: " + err.message);
                return;
            }
            connection.release();
            console.log("invoked[save]");
            callback(err, result);
        });
    };

    //得到总数量
    City.countCity = function countCity(callback) {
        var countCity_Sql = "SELECT COUNT(1) AS num FROM city";
        connection.query(countCity_Sql, function (err, result) {
            if (err) {
                console.log("countCity Error: " + err.message);
                return;
            }
            connection.release();
            console.log("invoked[countCity]");
            callback(err, result);
        });
    };

    //根据id得到city信息
    City.getCityInfo = function getCityInfo(id, callback) {
        var getCityInfo_Sql = "SELECT * FROM city WHERE id <= ?";
        connection.query(getCityInfo_Sql, [id], function (err, result) {
            if (err) {
                console.log("getUserByUserName Error: " + err.message);
                return;
            }
            connection.release();
            console.log("invoked[getCityInfo]");
            callback(err, result);
        });
    };
});