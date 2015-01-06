/**
 * Created by brunoferreirbrunoa on 12/19/14.
 */
(function (app) {

    function ApplicationCtrl($scope, $rootScope, $http, $log, AUTH_EVENTS) {

        $scope.currentUser = null;

        $scope.errors = {};

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

        $scope.$on('manageErrors', function(e, infoError){

            $scope.errors[infoError.key] = {};

            if(infoError.errors) {
                for(key in infoError.errors) {
                    $scope.errors[infoError.key][key] = infoError.errors[key][0];
                }
            }

        });

    }
    angular.module(app).controller('ApplicationCtrl', [
        '$scope', '$rootScope', '$http', '$log', 'AUTH_EVENTS',
        ApplicationCtrl
    ]);

})(app);