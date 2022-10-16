var app = angular.module('JollysCheatSheet', ["ngoute"]);
app.config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider
  
      .when("/", {controller: "MainController", templateUrl: "index.html"})
      .when("/html", {controller: "MainController", templateUrl: "pages/html.html"})
      .when("/css", {controller: "MainController", templateUrl: "pages/css.html"})

      .otherwise({redirectTo: "/"})
    }
  ]);