/**
 * Created by Stephen on 2016/4/10.
 */
controllersModule.controller("LoginCtrl", function ($scope, LoginService) {
    $scope.title = "Express";
    $scope.userName = "";
    $scope.password = "";

    $scope.doLogin = function () {
        var user = {
            userName: "",
            password: ""
        };
        if ($scope.userName && $scope.password) {
            user.userName = $scope.userName;
            user.password = $scope.password;
            LoginService.doLoginParam(user.userName)
                .then(function (data) {
                    console.log(data);
                });
        }
    };

    $scope.getCityInfo = function () {
        LoginService.getCityInfo(10)
            .then(function (data) {
                console.log(data);
            });
    }
});