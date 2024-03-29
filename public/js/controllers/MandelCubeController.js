app.controller('MandelCubeController', ['$scope', function($scope) {
    // $scope.title = "Blender Art (refresh for new random image)";
    $scope.blender_art_urls = {
        "mandelblum_clear": "https://decentagency.space/public/img/mandelblum_clear.gif",
        "mandel_toroid_clear": "https://decentagency.space/public/img/mandel_toroid_clear.gif",
        "mandelblum_clear_royal": "https://decentagency.space/public/img/mandelblum_clear_royal.gif",
        "mandelblum_FlyingElephantVisions": "https://decentagency.space/public/img/mandelblum2_FlyingElephantVisions.gif",
        "trigoDeVotiontry": "https://decentagency.space/public/img/TrigoDevotiontry04.gif",
    };
    $scope.randomMandelBlum = function(urls) {
        var keys = Object.keys(urls);
        var random_key = keys[Math.floor(Math.random() * keys.length)];
        var random_url = urls[random_key];
        return random_url;
    }
}]);
