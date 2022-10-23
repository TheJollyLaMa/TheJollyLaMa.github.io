// header directive for the jollyhead.html in angularjs
app.directive('jollyHead', function() {
    return {
        restrict: 'E',
        scope: {
            navbar: '=',
            data: '='
        },
        controller: "NavController",
        templateUrl: 'js/directives/jollyHead.html',
        link: function(scope, elem, attrs ) {
            scope.sayHi = function() {
                alert("Hi! This alert is from the jollyHead directive.\n\n" + scope.data.name + " is " + scope.data.age + " years old and not getting any younger.");
            };
        }
    }
});
