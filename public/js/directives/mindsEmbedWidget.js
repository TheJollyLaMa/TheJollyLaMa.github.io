app.directive('mindsEmbedWidget', function() {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        controller: "FoundMoundsController",
        templateUrl: 'js/directives/mindsEmbedWidget.html'
    }
});