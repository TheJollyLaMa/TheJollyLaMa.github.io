var app = angular.module('JollysCheatSheet', ["ngRoute"]);
app.config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider
  
      .when("/home", {controller: "MainController", templateUrl: "pages/home.html"})
      .when("/html", {controller: "MainController", templateUrl: "pages/html.html"})
      .when("/css", {controller: "MainController", templateUrl: "pages/css.html"})
      .when("/js", {controller: "MainController", templateUrl: "pages/js.html"})
      .when("/fullstack", {controller: "MainController", templateUrl: "pages/fullstack.html"})
      .when("/tests", {controller: "MainController", templateUrl: "pages/tests.html"})
      .when("/hosting", {controller: "MainController", templateUrl: "pages/hosting.html"})
      .when("/git", {controller: "MainController", templateUrl: "pages/git.html"})
      .when("/specialty", {controller: "MainController", templateUrl: "pages/specialprojects.html"})
      .when("/IPFS_Blend", {controller: "MainController", templateUrl: "pages/ipfs_blend.html"})
      .when("/Three", {controller: "MainController", templateUrl: "pages/three.html"})

      .when("/Capu", {controller: "MainController", templateUrl: "pages/capu.html"})



      .otherwise({redirectTo: "/"})
    }
  ]);