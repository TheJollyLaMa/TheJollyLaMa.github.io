app.controller('BackgroundController', ['$scope', function($scope) {
    $scope.background_urls = {
        "Matrix4Kids": "https://ipfs.io/ipfs/QmdeZDPtS6NW37KeSNJvH5jGTri3mSpyzfVp3LZfrJa72y",
        "Sprite": "https://ipfs.io/ipfs/QmYMML6K846sbkdGai3M8ejzHpy7iyz44TDe22amZUFawa"
    }
    // function to randomly select a background image every 60 seconds
    // $scope.randomBackground = function() {
    //     var keys = Object.keys($scope.background_urls);
    //     var random_key = keys[Math.floor(Math.random() * keys.length)];
    //     var random_url = $scope.background_urls[random_key];
    //     // select video source element
    //     var video = document.getElementById("source");
    //     // set video source to random url
    //     video.src = random_url;
    //     // play video
    //     video.play();
    // }
    // call randomBackground function every 60 seconds
    // setInterval($scope.randomBackground, 5000);


}]);