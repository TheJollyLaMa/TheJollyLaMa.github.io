app.controller('NavController', ['$scope', function($scope) {
    $scope.title = "Jolly's Cheatsheet & Toolchest";
    $scope.cheatsheetNav = [
        {name: "Home", url: "/home"},
        {name: "Fullstack", url: "/fullstack"}        
    ];
    $scope.data = {
        "name": "Jolly",
        // date in dd MON YYYY format
        "date": new Date().toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric'}),
        // date minus birthdate including month and day
        "age": Math.floor((new Date() - new Date(1985, 04, 21)) / 31557600000)
    };

    $scope.smarthomeNav = [
        {name: "About", url: "/About"},
        {name: "Home", url: "/Home"},
        {name: "ControlPanel", url: "/ControlPanel"},
        {name: "Greenhouse", url: "/Greenhouse"},
        {name: "Settings", url: "/Settings"},
        {name: "Charts", url: "/Charts"},
        {name: "Weather", url: "/Weather"},
        {name: "StoreFront", url: "http://caffeinelamanna.com/#!/StoreFront"}
    ];
    // caflam storefront
    $scope.storefrontNav = [
        {name: "About", url: "/About"},
        {name: "CrowdFund", url: "/AngelTokens"}, // crowdfund mechanism
        {name: "BehindTheCounter", url: "/BehindTheCounter"},
        {name: "Contact", url: "/Contact"}
    ];
    $scope.behindthecounterNav = [
        {name: "About", url: "/About"},
        {name: "StoreFront", url: "http://caffeinelamanna.com/#!/StoreFront"},
        {name: "Beanlb", url: "/Minterface"}, // currency minting mechanism
        {name: "Inventory", url: "/Inventory"},
        {name: "Shipping", url: "/Shipping"},
        {name: "Imports", url: "/Imports"},
        {name: "Assets", url: "/Assets"},
    ];
}]);
