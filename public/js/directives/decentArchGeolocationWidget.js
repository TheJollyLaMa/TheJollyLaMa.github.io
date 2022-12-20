app.directive('decentArchGeolocationWidget', function() {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        controller: "FoundMoundsController",
        templateUrl: 'js/directives/decentArchGeolocationWidget.html'
    }
});