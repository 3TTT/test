'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testApp
 */
// angular.module('testApp')
//   .controller('AboutCtrl', function () {
//     this.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   });


  angular.module('testApp')
  .controller('AboutCtrl1', function($scope, $http){
  	$http.get("http://www.w3schools.com/angular/customers_mysql.php")
  	.then(function(response){
  		$scope.names = response.data.records;
  	});

  
  });

  angular.module('testApp')
  .controller('menuList', function($scope){
  		$scope.list=true;
  		$scope.myFun=function(){
  			$scope.list = !$scope.list;
  		}

  });
