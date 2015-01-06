/**
 * Created by brunoferreirbrunoa on 1/6/15.
 */
(function(app){

    function SidenavCtrl($log, $scope) {
        $scope.items = [
            {
                name: 'Dashboard',
                icon: 'dashboard',
                path: '/'
            }
        ]
    }

    angular.module(app).controller('SidenavCtrl', [
       '$log',
        '$scope',
        SidenavCtrl
    ]);

})(app);