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
                alert("Future Wallet Connect");
                // set walletConnected to true
                scope.walletConnected = true;
          }
            scope.wallet = {
                "ens": "TheJollyLaMA.eth",
                "acc_hash": "0x807061DF657A7697c04045dA7d16D941861cAABc"
            }
        }
    }
})