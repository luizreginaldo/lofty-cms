/**
 * Created by brunoferreirbrunoa on 1/6/15.
 */
(function (app) {

  function Modules() {

    var xtemplate = [

      '<section ng-repeat="item in items" flex>',
      '<paper-shadow ng-if="!item.subitems" flex multi>',
      '<paper-item ng-click="go(item.path);toggleMenu()" multi>',
      '<core-icon icon="{{item.icon}}"></core-icon>',
      '{{item.name}}',
      '</core-icon>',
      '</paper-item>',
      '</paper-shadow>',
      '<h3 tool ng-if="item.subitems">{{item.name}}</h3>',
      '<paper-shadow ng-if="item.subitems" flex>',
      '<paper-item ng-click="go(subitem.path);toggleMenu()" ng-repeat="subitem in item.subitems">',
      '<core-icon icon="{{subitem.icon}}"></core-icon>',
      '{{subitem.name}}',
      '</core-icon>',
      '</paper-item>',
      '<paper-shadow>',
      '</section>'
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
