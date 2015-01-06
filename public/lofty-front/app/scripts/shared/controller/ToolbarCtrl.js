/**
 * Created by brunoferreirbrunoa on 12/19/14.
 */
(function(app){

    function ToolbarCtrl($log, $rootScope, $scope, $mdDialog, $mdSidenav, AuthService, AUTH_EVENTS) {

        this.openLeftMenu = function() {
            $mdSidenav('left').toggle();
        };

        $scope.logout = function(ev) {

            var confirm = $mdDialog.confirm()
                .title('Atenção')
                .content('Deseja sair do Sistema ?')
                .ariaLabel('Lucky day')
                .ok('Sim')
                .cancel('Não')
                .targetEvent(ev);

            $mdDialog.show(confirm).then(function() {
                AuthService.logout().then(function(){
                    $log.info('emit event logoutSuccess');
                    $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
                });
            }, function() {

            });

        };

    }

    angular.module(app).controller('ToolbarCtrl', [
        '$log',
        '$rootScope',
        '$scope',
        '$mdDialog',
        '$mdSidenav',
        'AuthService',
        'AUTH_EVENTS',
        ToolbarCtrl
    ]);

})(app);