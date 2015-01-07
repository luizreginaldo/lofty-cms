/**
 * Created by brunoferreirbrunoa on 12/19/14.
 */
(function (app) {

  function AuthService($log, $rootScope, $resource, Session, AUTH_EVENTS) {
    var authService = {};
    var $request = $resource(
      baseurl('auth/:command'),
      {

      },
      {
        login: {
          method: 'POST',
          errorKey: 'auth',
          params: {
            command: 'login'
          }
        },
        logout: {
          method: 'GET',
          params: {
            command: 'logout'
          }
        },
        verify: {
          method: 'POST',
          params: {
            command: 'guest'
          }
        }
      }
    );

    authService.login = function (credentials) {
      return $request.login(credentials).$promise.then(function (res) {

        if (res.user) {
          Session.create(res.user);
          return res;
        }

      });
    };

    authService.logout = function () {
      return $request.logout().$promise.then(function (response) {
        return true;
      });
    };

    authService.isAuthenticated = function () {
      return $request.verify().$promise.then(function (res) {
          if (res.user) {
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, res);
            Session.create(res.user);
            return res.user;
          }

        });
    };

    return authService;
  }

  angular.module(app).factory('AuthService', [
    '$log', '$rootScope', '$resource', 'Session', 'AUTH_EVENTS',
    AuthService
  ])

})(app);
