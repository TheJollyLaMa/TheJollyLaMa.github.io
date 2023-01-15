app.directive('coolMindsEmbedWidget', function() {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        controller: "CoolMindsController",
        templateUrl: 'js/directives/coolMindsEmbedWidget.html'
    }
});