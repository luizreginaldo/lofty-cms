/**
 * Created by brunoferreirbrunoa on 12/19/14.
 */
(function(app){

    angular.module(app).service('Session', function () {
        this.use = null;
        this.create = function (user) {
            this.user = user;
        };
        this.destroy = function () {
            this.user = null;
        };
        return this;
    });

})(app);