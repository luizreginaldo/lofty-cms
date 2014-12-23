/**
 * Created by brunoferreirbrunoa on 12/19/14.
 */
(function (app) {

    function AuthService($log, $rootScope, $http, Session, AUTH_EVENTS, baseurl) {
        var authService = {};

        authService.login = function (credentials) {
            return $http
                .post(baseurl('sessions'), credentials)
                .then(function (res) {
                    $log.info(res);

                    if(res.data.user) {
                        Session.create(res.data.user);
                        return res.data.user;
                    }

                });
        };

        authService.logout = function () {
            return $http
                .delete(baseurl('sessions'))
                .then(function (response) {
                    return true;
                });
        };

        authService.isAuthenticated = function () {
            return $http
                .get(baseurl('sessions'))
                .then(function (res) {
                    if(res.data.user){
                        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, res.data.user);
                        Session.create(res.data.user);
                        return res.data.user;
                    }

                });
        };

        return authService;
    }

    angular.module(app).factory('AuthService', [
        '$log', '$rootScope', '$http', 'Session', 'AUTH_EVENTS', 'baseurl',
        AuthService
    ])

})(app);