app.directive('jollyBackground', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        controller: "BackgroundController",
        templateUrl: 'js/directives/jollyBackground.html'
    };
    
});