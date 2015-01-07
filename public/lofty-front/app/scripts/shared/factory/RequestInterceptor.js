/**
 * Created by brunoferreirbrunoa on 12/19/14.
 */
(function (app) {

  function AuthInterceptor($log, $rootScope, $q, AUTH_EVENTS) {
    return {
      request: function(config) {
        return config;
      },
      response: function (response) {
        if (response.status === 401) {
        }

        if (response.config.errorKey) {

          $rootScope.$broadcast('manageErrors', {
            key: response.config.errorKey,
            errors: response.data && response.data.errors ? response.data.errors : false
          });

        }

        return response || $q.when(response);
      },
      responseError: function (response) {
        $rootScope.$broadcast({
          401: AUTH_EVENTS.notAuthenticated,
          403: AUTH_EVENTS.notAuthorized,
          419: AUTH_EVENTS.sessionTimeout,
          440: AUTH_EVENTS.sessionTimeout
        }[response.status], response);
        return $q.reject(response);
      }
    };

  };

  angular.module(app).factory('RequestInterceptor', [
    '$log', '$rootScope', '$q', 'AUTH_EVENTS',
    AuthInterceptor
  ]);

})(app);
