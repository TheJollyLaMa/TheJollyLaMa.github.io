var app = angular.module('JollysCheatSheet', ["ngRoute"]);
app.config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider
  
      .when("/", {controller: "MainController", templateUrl: "pages/home.html"})
      .when("/html", {controller: "MainController", templateUrl: "pages/html.html"})
      .when("/css", {controller: "MainController", templateUrl: "pages/css.html"})
      .when("/js", {controller: "MainController", templateUrl: "pages/js.html"})
      .when("/fullstack", {controller: "MainController", templateUrl: "pages/fullstack.html"})
      .when("/tests", {controller: "MainController", templateUrl: "pages/tests.html"})
      .when("/hosting", {controller: "MainController", templateUrl: "pages/hosting.html"})
      .when("/git", {controller: "MainController", templateUrl: "pages/git.html"})

      .otherwise({redirectTo: "/"})
    }
  ]);