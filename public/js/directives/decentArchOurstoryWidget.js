app.directive('decentArchOurstoryWidget', function() {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        controller: "FoundMoundsController",
        templateUrl: 'js/directives/decentArchOurstoryWidget.html'
    }
});