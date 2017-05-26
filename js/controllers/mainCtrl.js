angular.module('noserver').controller("mainCtrl", function ($scope, mainService){

    $scope.recSounds = function () {
        mainService.getData().then(function (response){
            $scope.sounds = response.data.results 
            console.log(response)
        })
    }
    $scope.recSounds()
     
     $scope.recAPOD = function () {
        mainService.getAPOD().then(function (response){
            $scope.daily = response.data
            console.log(response)
        })
    }
    $scope.recAPOD()

    $scope.recTravelers = function () {
        mainService.getTravelers().then(function (response){
            $scope.travelers = response.data
            console.log(response)
        })
    }
    $scope.recTravelers()

    $scope.current = 0;        
 $scope.Next = function() {
             $scope.current = ($scope.current + 1) % $scope.travelers.people.length;
 }
 $scope.Prev = function() {
             $scope.current = ($scope.current - 1) % $scope.travelers.people.length ;
 }
//  $scope.Next = function() {
//              $scope.current = ($scope.current + 1) % $scope.travelers.people.craft.length;
//  }
//  $scope.Prev = function() {
//              $scope.current = ($scope.current - 1) % $scope.travelers.people.craft.length;
//  }
})
