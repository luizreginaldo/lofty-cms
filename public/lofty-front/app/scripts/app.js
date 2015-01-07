(function (document) {
  'use strict';

  document.addEventListener('polymer-ready', function () {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));

window.baseurl = function (url) {
  var base = 'http://lofty-cms/';

  return base + url;

};

window.view = function (file) {
  var file = file.replace('.html');
  return baseurl('lofty-front/dist/scripts/components/') + file + '.html';
};

window.app = 'lofty';

angular.module('lofty', [
  'ngRoute',
  'ngCookies',
  'ngMaterial',
  'ngResource'
]).constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
}).run([
  '$log', '$rootScope', '$location', '$timeout', '$mdSidenav', '$http', '$cookieStore', 'AUTH_EVENTS', 'AuthService', 'Session',
  function ($log, $rootScope, $location, $timeout, $mdSidenav, $http, $cookieStore, AUTH_EVENTS, AuthService, Session) {
    //$cookieStore.remove('access_token');
    if($cookieStore.get('access_token')) {

      $http.defaults.headers.common['Authorization'] = $cookieStore.get('access_token');
    }

    $rootScope.$on('$routeChangeStart', function (event) {

      if (!Session.user) {
        AuthService.isAuthenticated().then(function (isAuthenticated) {
          if (!isAuthenticated) {
            event.preventDefault();

            // user is not not authenticated
            $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
          }
        });
      }

    });
  }]).config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

  $routeProvider
    .when('/', {
      templateUrl: view('dashboard/dashboard'),
      controller: ['$timeout', '$log', '$http', function($timeout, $log, $http){
        $timeout(function(){
          $http.post(baseurl('admin')).success(function(res){
            $log.info(res);
          });
        },2000);
      }]
    })
    .when('/404', {
      templateUrl: '404.html'
    })
    .otherwise('/');

  $httpProvider.interceptors.push([
    '$injector',
    function ($injector) {
      return $injector.get('RequestInterceptor');
    }
  ]);

  $httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

}]);
