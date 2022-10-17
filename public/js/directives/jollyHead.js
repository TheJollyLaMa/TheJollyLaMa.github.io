// header directive for the jollyhead.html in angularjs
app.directive('jollyHead', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        controller: "MainController",
        templateUrl: 'js/directives/jollyHead.html'
    };
    
});
