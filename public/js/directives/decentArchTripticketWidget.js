app.directive('decentArchTripticketWidget', function() {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        controller: "FoundMoundsController",
        templateUrl: 'js/directives/decentArchTripticketWidget.html'
    }
});