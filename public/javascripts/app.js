angular.module('ui-bootstrap', ['ngAnimate', 'ui.bootstrap']);
angular.module('myWebsite', [
  'ngRoute',
  'myWebsiteControllers',
  'userService',
  'ui-bootstrap'
])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/partials/index.html',
        controller: 'indexCtrl'
      }).
      when('/html', {
        templateUrl: '/partials/html.html',
        controller: 'htmlCtrl'
      }).
      when('/mean', {
        templateUrl: '/partials/mean.html',
        controller: 'meanCtrl'
      }).
      when('/dashboard', {
        templateUrl: '/partials/dashboard.html',
        controller: 'dashboardCtrl'
      }).
      when('/bootstrap', {
        templateUrl: '/partials/bootstrap.html',
        controller: 'bsCtrl'
      }).
      when('/demo', {
        templateUrl: '/partials/demo.html',
        controller: 'demoCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);
