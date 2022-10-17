// footer directive for the jollyfoot.html in angularjs
app.directive('jollyFoot', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        controller: "MainController",
        templateUrl: 'js/directives/jollyFoot.html'
    };
    
});
