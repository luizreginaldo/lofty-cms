/**
 * Created by brunoferreirbrunoa on 12/19/14.
 */
(function (app) {

  function LoginCtrl($log, $rootScope, $scope, AuthService, AUTH_EVENTS) {

    $scope.credentials = {};
    $scope.errors = {
      auth: {}
    };
    $scope.loading = false;

    $scope.submit = function () {

      $scope.errors.auth = {};
      $scope.loading = true;

      AuthService.login($scope.credentials).then(function (res) {
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, res);
      }, function () {
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
      }).finally(function(){
        $scope.loading = false;
      });

    };

    $scope.$on('errors', function(event, errors){
      $scope.errors.auth = errors;
    });
  };

  angular.module(app).controller('LoginCtrl', [
    '$log', '$rootScope', '$scope', 'AuthService', 'AUTH_EVENTS',
    LoginCtrl
  ]);

})(app);
