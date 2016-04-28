'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */


// angular.module('testApp')
//   .controller('MainCtrl', function ($scope) {
//     $scope.todos = ['Item11', 'Item2', 'Item3', 'Item4'];
//     $scope.addTodo = function(){
//     	$scope.todos.push($scope.todo);
//     	$scope.todo = '';
//     };
//     $scope.removeTodo = function(index){
//     	$scope.todos.splice(index, 1);
//     };
//   });


// angular.module('testApp')
// .controller('MainCtrl', function($scope){

//     $scope.firstName="john";
//     $scope.lastName="deep";
//     });


angular.module('testApp')
.controller('MainCtrl', function($scope){

    $scope.firstName="ASASAS";
    $scope.lastName="deep";
    });


angular.module('testApp')
.controller('nameslist', function($scope){
    $scope.names=[
        {name1:'satish', job:'frientEnddeveloper'},
        {name1:'Raju', job:'frientEnddeveloper'},
        {name1:'Ramesh', job:'developer'},
        {name1:'amar', job:'tester'},

    ]
});

angular.module('testApp')
.controller('filterlist', function($scope){
    $scope.nameslist=[
        'aaaa',
        'asas',
        'sasa',
        'asws',
        'ds'
    ]
});

angular.module('testApp')
.controller('webLocation', function($scope, $location){
    $scope.myUrl=$location.absUrl();

});

angular.module('testApp')
.controller('customersCtrl', function($scope, $http){

    $http.get('http://www.w3schools.com/angular/customers.php')
    .then(function (response) {
      $scope.myData = response.data.records;
  });
});