app.directive('mandelCube', function() {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        controller: "MandelCubeController",
        templateUrl: 'js/directives/mandelCube.html'
    }
});