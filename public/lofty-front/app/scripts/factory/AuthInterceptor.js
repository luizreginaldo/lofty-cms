/**
 * Created by brunoferreirbrunoa on 12/19/14.
 */
(function(app){

    function AuthInterceptor($log, $rootScope, $q, AUTH_EVENTS) {
        return {
            response: function(response){
                if (response.status === 401) {
                }

                $log.info(response);

                return response || $q.when(response);
            },
            responseError: function (response) {
                $log.error('error');
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

    angular.module(app).factory('AuthInterceptor', [
        '$log', '$rootScope', '$q', 'AUTH_EVENTS',
        AuthInterceptor
    ]);

})(app);