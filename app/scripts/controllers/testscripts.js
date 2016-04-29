'use strict';

  angular.module('testApp')
  .controller('testscripts', function($scope){
  		$scope.list=true;
  		$scope.myFun=function(){
  			$scope.list = !$scope.list;
  		}

  });