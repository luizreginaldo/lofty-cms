/**
 * Created by brunoferreirbrunoa on 1/6/15.
 */
(function(app){

    function SidenavCtrl($log, $scope, $mdSidenav) {
        $scope.items = [
            {
                name: 'Dashboard',
                icon: 'dashboard',
                path: '/'
            }
        ];

        $scope.toggleMenu = function() {
            $mdSidenav('left').toggle();
        };
    }

    angular.module(app).controller('SidenavCtrl', [
       '$log',
        '$scope',
        '$mdSidenav',
        SidenavCtrl
    ]);

})(app);