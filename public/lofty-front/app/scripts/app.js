(function (document) {
    'use strict';

    document.addEventListener('polymer-ready', function () {
        // Perform some behaviour
        console.log('Polymer is ready to rock!');
    });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));

window.app = 'lofty';

angular.module('lofty', [
    'ngRoute',
    'ngCookies',
    'ngMaterial'
]).constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
}).constant('baseurl', function(url){
    var base = 'http://spring_iatf_zplan/';

    if(url.toString().indexOf('sessions') > -1){

        return base+url;

    } else {

        return base+'api/'+url;

    }

}).run([
    '$log', '$rootScope', '$location', '$timeout', '$mdSidenav', 'AUTH_EVENTS', 'AuthService',
    function ($log, $rootScope, $location, $timeout, $mdSidenav, AUTH_EVENTS, AuthService) {
    $rootScope.$on('$routeChangeStart', function (event, next) {

        AuthService.isAuthenticated().then(function(isAuthenticated){
            if (!isAuthenticated) {
                event.preventDefault();

                // user is not not authenticated
                $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
            }
        });

    });
}]).config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'scripts/views/dashboard.html'
        })
        .when('/404', {
            templateUrl: '404.html'
        })
        .otherwise('/');

    $httpProvider.interceptors.push([
        '$injector',
        function ($injector) {
            return $injector.get('AuthInterceptor');
        }
    ]);

}]);
