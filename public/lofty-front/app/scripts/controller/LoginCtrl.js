/**
 * Created by brunoferreirbrunoa on 12/19/14.
 */
(function (app) {

    function LoginCtrl($log, $rootScope, $scope, AuthService, AUTH_EVENTS) {

        $log.info('login ctrl');

        $scope.credentials = {};

        $scope.submit = function () {

            $log.info('login submit');
            AuthService.login($scope.credentials).then(function (user) {
                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, user);
            }, function () {
                $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            });

        };
    };

    angular.module(app).controller('LoginCtrl', [
        '$log', '$rootScope', '$scope', 'AuthService', 'AUTH_EVENTS',
        LoginCtrl
    ]);

})(app);