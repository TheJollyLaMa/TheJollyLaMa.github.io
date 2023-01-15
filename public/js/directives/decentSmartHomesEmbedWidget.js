app.directive('decentSmartHomesEmbedWidget', function() {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        controller: "DecentSmartHomesController",
        templateUrl: 'js/directives/decentSmartHomesEmbedWidget.html'
    }
});