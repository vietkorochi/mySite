var myApp = angular.module('myApp',['ngMessages','ngResource']);

/*myApp.controller("mainController",['$scope','$log',function($log,$scope){
    console.log($scope);
   //$log.debug($scope);
}]);*/

myApp.controller("mainController",['$scope','$timeout',function($scope,$timeout){
    $scope.name ="Vietkoro";
    
    $timeout(function(){
        $scope.name="Love";
        
    },3000);
}]);

/*myApp.controller("mainController",function($scope,$log){
   $log.debug($scope);
});*/

//myApp.controller("mainController",["$scope","$log","$timeout","$resource",function(o,l,a,b){l.debug(o)}]);
var types = [1,
             '2',
             function(){
                 alert("hello");
             }];

types[2]();
console.log(types);
