app.directive('jollyWallet', function() {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        controller: "WalletController",
        templateUrl: 'js/directives/jollyWallet.html',
        link: function(scope, elem, attrs ) {
            // wallet connect boolean
            scope.walletConnected = false;
            // wallet connect
            scope.connectWallet = function() {
                alert("Wallet Connect");
                // set walletConnected to true
                scope.walletConnected = true;
          }
            scope.wallet = {
                "ens": "TheJollyLaMA.eth",
                "acc_hash": "0x0000000000000000000000000000000000000000"
            }
        }
    }
})