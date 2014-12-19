/**
 * Created by brunoferreirbrunoa on 12/19/14.
 */
(function(app){

    function Ctrl($log, $scope, $mdDialog) {

        $scope.logout = function(ev) {

            document.querySelector('#confirmLogout').speak();

            var confirm = $mdDialog.confirm()
                .title('Atenção')
                .content('Deseja sair do Sistema ?')
                .ariaLabel('Lucky day')
                .ok('Sim')
                .cancel('Não')
                .targetEvent(ev);

            $mdDialog.show(confirm).then(function() {
                $scope.alert = 'You decided to get rid of your debt.';
            }, function() {
                $scope.alert = 'You decided to keep your debt.';
            });

        }

    }

    angular.module(app).controller('ToolbarCtrl', [
        '$log',
        '$scope',
        '$mdDialog',
        Ctrl
    ]);

})(app);