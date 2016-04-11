/**
 * Created by Stephen on 2016/4/11.
 */

var dependencies = ['ngAnimate', 'routeConfig', 'ngRoute', 'controllers', 'services', 'directives', 'filters'];

angular.module('myExpress', dependencies);

angular.module('routeConfig', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'partials/login.html'
    }).when('/poll/:pollId', {
        templateUrl: 'partials/login.html'
    }).when('/new', {
        templateUrl: 'partials/new.html'
    }).otherwise({redirectTo: '/login'});
}]);

//分别生成各个分模块
this.controllersModule = angular.module('controllers', []);
this.servicesModule = angular.module('services', []);
this.directivesModule = angular.module('directives', []);
this.filtersModule = angular.module('filters', []);