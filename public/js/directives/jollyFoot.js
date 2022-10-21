// footer directive for the jollyfoot.html in angularjs
app.directive('jollyFoot', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        controller: "NavController",
        templateUrl: 'js/directives/jollyFoot.html'
    };
    
});
