/**
 * Created by Stephen on 2016/4/10.
 */
controllersModule.controller("LoginCtrl", function ($scope) {
    $scope.title = "Express";
    $scope.userName = "";
    $scope.password = "";

    $scope.doLogin = function () {
        if($scope.userName && $scope.password){
            console.log($scope.userName);
            console.log($scope.password);
        }
    }

});