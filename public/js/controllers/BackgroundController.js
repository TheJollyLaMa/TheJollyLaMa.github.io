app.controller('BackgroundController', ['$scope', function($scope) {
    $scope.background_urls = {
        "Matrix4Kids": "https://ipfs.io/ipfs/QmdeZDPtS6NW37KeSNJvH5jGTri3mSpyzfVp3LZfrJa72y",
        "AxisSprite": "https://ipfs.io/ipfs/QmYMML6K846sbkdGai3M8ejzHpy7iyz44TDe22amZUFawa",
        "BlueSprite": "https://ipfs.io/ipfs/QmaG5FCEerfjdnABYAqmUehJaoqx1S4vrt6ZHgvzjXE8qn",
        "SpiralGreenSprite": "https://ipfs.io/ipfs/QmZbZo4fGrYkLFoqXBSZdJhnm4omqY6paCeEN5zQYxYyQX",
        "SpiralOrangeSprite": "https://ipfs.io/ipfs/QmQeCN1cLtsG3tYgXjGcQPsdcQudP5ZCseWZhGUREmorj4",
        "SpiralMultiSprite": "https://ipfs.io/ipfs/QmYjWH7Ex2MAmBoLLUKVQMoyChc6kwUzh69AD4T1DqLMA5"
    }
    // function to randomly select a background image
    $scope.randomBackground = function() {
        var keys = Object.keys($scope.background_urls);
        var random_key = keys[Math.floor(Math.random() * keys.length)];
        var random_url = $scope.background_urls[random_key];
        return random_url;
    }


}]);