app.directive('jollyWallet', function() {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        controller: "WalletController",
        templateUrl: 'js/directives/jollyWallet.html',
        link: function(scope, elem, attrs ) {
            scope.connect = function() {
                alert("Connect to wallet");
                
            };
        }
    }
})