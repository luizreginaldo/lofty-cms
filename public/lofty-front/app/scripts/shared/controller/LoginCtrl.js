/**
 * Created by brunoferreirbrunoa on 12/19/14.
 */
(function (app) {

  function LoginCtrl($log, $rootScope, $scope, AuthService, AUTH_EVENTS) {

    $log.info('login ctrl');

    $scope.credentials = {};

    $scope.submit = function () {

      AuthService.login($scope.credentials).then(function (res) {
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, res);
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
