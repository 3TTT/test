'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */


angular
  .module('testApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl1',
        controllerAs: 'about'
      })
      .when('/testscripts',{
        templateUrl:'views/testscripts.html',
        controller:'testscripts',
        controllerAs:'testscripts'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

// var app = angular.module('myApp', []);