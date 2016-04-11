/**
 * Created by Administrator on 2016/4/11.
 */
servicesModule.service("LoginService", function ($q, $http) {
    this.headers = {'Accept': 'application/json', 'Content-Type': 'application/json'};
    this.defaultConfig = {headers: this.headers};

    this.doLogin = function (user) {
        var deferred = $q.defer();
        var path = "/doLogin";
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
});
