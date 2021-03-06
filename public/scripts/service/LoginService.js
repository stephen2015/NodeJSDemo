/**
 * Created by Administrator on 2016/4/11.
 */
servicesModule.service("LoginService", function ($q, $http) {
    this.headers = {'Accept': 'application/json', 'Content-Type': 'application/json'};
    this.defaultConfig = {headers: this.headers};
    //GET请求发送参数方法
    this.doLogin = function (userName) {
        var deferred = $q.defer();
        var path = "/login";
        $http({
            method: 'GET',
            url: path,
            params: {userName: userName}
        }).success(function (data, status, headers, defaultConfig) {
            deferred.resolve(data);
        }).error(function (data, status, headers, defaultConfig) {
            deferred.reject(data);
        });
        return deferred.promise;
    };
    //GET请求发送参数方法
    this.doLoginParam = function (userName) {
        var deferred = $q.defer();
        var path = "/login/" + userName;
        $http({
            method: 'GET',
            url: path
        }).success(function (data, status, headers, defaultConfig) {
            deferred.resolve(data);
        }).error(function (data, status, headers, defaultConfig) {
            deferred.reject(data);
        });
        return deferred.promise;
    };
    //POST请求发送参数方法
    this.loginPost = function (user) {
        var deferred = $q.defer();
        var path = "/login";
        $http({
            method: 'POST',
            url: path,
            data: {user: user}
        }).success(function (data, status, headers, defaultConfig) {
            deferred.resolve(data);
        }).error(function (data, status, headers, defaultConfig) {
            deferred.reject(data);
        });
        return deferred.promise;
    };
    //数据库连接获取数据
    this.getCityInfo = function (id) {
        var deferred = $q.defer();
        var path = "/getCity";
        $http({
            method: 'GET',
            url: path,
            params: {id: id}
        }).success(function (data, status, headers, defaultConfig) {
            deferred.resolve(data);
        }).error(function (data, status, headers, defaultConfig) {
            deferred.reject(data);
        });
        return deferred.promise;
    }
});
