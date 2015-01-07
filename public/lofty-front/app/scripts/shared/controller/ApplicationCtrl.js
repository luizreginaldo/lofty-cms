/**
 * Created by brunoferreirbrunoa on 12/19/14.
 */
(function (app) {

  function ApplicationCtrl($scope, $location, $log, $cookieStore, $http, AUTH_EVENTS) {

    $scope.currentUser = null;

    $scope.errors = {};

    $scope.setCurrentUser = function (user) {
      $scope.currentUser = user;
      if(user.access_token) {
        $cookieStore.put('access_token', user.access_token);
        $http.defaults.headers.common['access_token'] = $cookieStore.get('access_token');
      }
    };

    $scope.$on(AUTH_EVENTS.loginSuccess, function (e, user) {
      $scope.setCurrentUser(user);
    });

    $scope.$on(AUTH_EVENTS.logoutSuccess, function () {
      $scope.currentUser = false;
      $cookieStore.remove('access_token');
    });

    $scope.$on(AUTH_EVENTS.notAuthenticated, function () {
      $cookieStore.remove('access_token');
    });

    $scope.$on('manageErrors', function (e, infoError) {

      $scope.errors[infoError.key] = {};

      if (infoError.errors) {
        for (key in infoError.errors) {
          $scope.errors[infoError.key][key] = infoError.errors[key][0];
        }
      }

    });

    $scope.go = function (path) {
      $location.path(path);
    };

  }

  angular.module(app).controller('ApplicationCtrl', [
    '$scope', '$location', '$log', '$cookieStore','$http', 'AUTH_EVENTS',
    ApplicationCtrl
  ]);

})(app);
