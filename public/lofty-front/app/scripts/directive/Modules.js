/**
 * Created by brunoferreirbrunoa on 1/6/15.
 */
(function(app){

    function Modules() {

        var xtemplate = [
            '<div ng-repeat="item in items">',
                '<core-menu ng-if="!item.subitems">',
                    '<paper-item ng-click="go(item.path)">',
                        '<core-icon icon="{{item.icon}}"></core-icon>',
                            '{{item.name}}',
                        '</core-icon>',
                    '</paper-item>',
                '</core-menu>',
                '<span tool ng-if="item.subitems">{{item.name}}</span>',
                '<core-menu if="item.subitems" ng-repeat="subitem in item.subitems">',
                    '<paper-item ng-click="go(subitem.path)">',
                        '<core-icon icon="{{subitem.icon}}"></core-icon>',
                            '{{subitem.name}}',
                        '</core-icon>',
                    '</paper-item>',
                '</core-menu>',
            '</div>'
        ].join('');

        return {

            restrict: 'E',
            template: xtemplate,
            replace: true

        }

    }

    angular.module(app).directive('modules', [
       Modules
    ]);

})(app);