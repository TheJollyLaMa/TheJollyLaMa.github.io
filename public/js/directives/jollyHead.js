// header directive for the jollyhead.html in angularjs
app.directive('jollyHead', function() {
    return {
        restrict: 'E',
        scope: {
            navbar: '='
        },
        controller: "NavController",
        templateUrl: 'js/directives/jollyHead.html',
        link: function(scope, elem, attrs ) {
            scope.sayHi = function() {
                alert("Hi! This alert is from the jollyHead directive.");
            };
        }
    }
});
