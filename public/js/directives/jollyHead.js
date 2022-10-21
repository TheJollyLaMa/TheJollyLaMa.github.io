// header directive for the jollyhead.html in angularjs
app.directive('jollyHead', function() {
    return {
        restrict: 'E',
        scope: {
            navbar: '='
        },
        controller: "NavController",
        templateUrl: 'js/directives/jollyHead.html'
    }
});
