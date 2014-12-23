/**
 * Created by brunoferreirbrunoa on 12/19/14.
 */
(function (app) {

    function ApplicationCtrl($scope, $rootScope, $http, $log, AUTH_EVENTS, baseurl) {
        $scope.currentUser = null;

        $scope.setCurrentUser = function (user) {
            $scope.currentUser = user;
        };

        $scope.$on(AUTH_EVENTS.loginSuccess, function (e, user) {
            $log.info('success');
            $scope.setCurrentUser(user);
        });

        $scope.$on(AUTH_EVENTS.logoutSuccess, function () {
            $log.info('logout');
            $scope.currentUser = false;
        });

        $scope.$on(AUTH_EVENTS.notAuthenticated, function(){
            $log.info('notAuthenticated');
        });

    }
    angular.module(app).controller('ApplicationCtrl', [
        '$scope', '$rootScope', '$http', '$log', 'AUTH_EVENTS', 'baseurl',
        ApplicationCtrl
    ]);

})(app);