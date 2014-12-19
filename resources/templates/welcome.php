<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no"/>
    <link rel="stylesheet" href="lofty-front/bower_components/angular-material/angular-material.css">

    <link rel="stylesheet" href="lofty-front/bower_components/material-design-icons/sprites/css-sprite/sprite-navigation-white.css"/>

    <script src="lofty-front/bower_components/angular/angular.js"></script>
    <script src="lofty-front/bower_components/angular-aria/angular-aria.js"></script>
    <script src="lofty-front/bower_components/angular-animate/angular-animate.js"></script>
    <script src="lofty-front/bower_components/hammerjs/hammer.js"></script>
    <script src="lofty-front/bower_components/angular-material/angular-material.js"></script>
    <script src="lofty-front/bower_components/angular-material/angular-material.js"></script>
    <script src="lofty-front/bower_components/angular-route/angular-route.min.js"></script>
    <script src="lofty-front/src/app.js"></script>

    <script src="lofty-front/src/shared/header/HeaderCtrl.js"></script>
</head>
<body ng-app="lofty">

<div layout="column" layout-fill>


    <md-content>
        <md-toolbar>
            <div class="md-toolbar-tools" ng-controller="HeaderCtrl">
                <md-button class="md-primary" ng-click="openLeftMenu()" aria-label="Menu">
                    <md-icon icon="lofty-front/bower_components/material-design-icons/navigation/svg/production/ic_menu_36px.svg" style="width: 36px; height: 36px; fill: white; color: #fff;">
                    </md-icon>
                </md-button>
                <span>IATF - ZPlan</span>
                <!-- fill up the space between left and right area -->
                <span flex></span>
            </div>
        </md-toolbar>
        <md-sidenav md-component-id="left" class="md-sidenav-left animate-switch-container" md-is-locked-open="$media('gt-md')">
            <md-toolbar class="md-theme-indigo">
                <h1 class="md-toolbar-tools">IATF</h1>
            </md-toolbar>
            <section>
                <md-subheader class="md-primary">Relatórios</md-subheader>
                <md-list layout="column">
                    <md-item >
                        <md-item-content>
                            <div class="md-tile-content">
                                <md-button href="/#/taxa_concepção">Taxa de Concepção Geral</md-button>
                            </div>
                        </md-item-content>
                    </md-item>
                </md-list>
            </section>
            <md-toolbar class="md-theme-indigo">
                <h1 class="md-toolbar-tools">ZPLAN</h1>
            </md-toolbar>
            <section>
                <md-subheader class="md-primary">Relatórios</md-subheader>
                <md-list layout="column">
                    <md-item ng-repeat="message in messages">
                        <md-item-content>
                            <div class="md-tile-left">
                                <img ng-src="{{message.face}}" class="face" alt="{{message.who}}">
                            </div>
                            <div class="md-tile-content">
                                <h3>{{message.what}}</h3>
                                <h4>{{message.who}}</h4>
                                <p>
                                    {{message.notes}}
                                </p>
                            </div>
                        </md-item-content>
                    </md-item>
                </md-list>
            </section>
        </md-sidenav>

        Hello!
    </md-content>
</div>



</body>
</html>